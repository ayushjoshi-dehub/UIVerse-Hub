# Azure VM Initialization & Configuration Guide

This guide describes how to provision, configure, and prepare a new Azure Virtual Machine running Ubuntu 24.04 LTS to host the UIVerse-Hub application using Docker Compose and the GitHub Actions CI/CD pipeline.

---

## 1. Network & Firewall Setup (Azure Portal)

Before logging into your VM, configure the **Network Security Group (NSG)** rules associated with your Azure VM network interface:

*   **SSH (Port 22)**: Ensure there is an Inbound security rule allowing SSH access from either your IP address (recommended for security) or `Any` source.
*   **HTTP (Port 80)**: Add an Inbound security rule allowing TCP traffic on port `80` from `Any` source. This exposes the web application.
*   **HTTPS (Port 443)**: (Optional, but recommended) Allow TCP traffic on port `443` for secure SSL connections if adding Nginx/Let's Encrypt later.

---

## 2. Target VM Initialization (Docker & User Configuration)

SSH into your target Azure VM (e.g., `ssh -i ~/.ssh/id_rsa azureuser@<AZURE_VM_IP>`) and run the following commands to initialize the host environment.

### Step 2.1: Update System Packages
Keep the operating system updated and install basic prerequisites:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl gnupg lsb-release ca-certificates
```

### Step 2.2: Install Docker Engine
Install Docker officially using the Docker apt repository:
```bash
# Add Docker's official GPG key
sudo fold -w 80 -s <<'EOF'
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
EOF

# Add the repository to Apt sources
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENODE_ENV" | head -n 1 || echo "noble") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Sync and install Docker packages
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Step 2.3: Verify Installation
Verify that Docker and Docker Compose are installed correctly:
```bash
docker --version
docker compose version
```

### Step 2.4: Set Non-Root User Permissions
To allow the GitHub Actions deploy job to interact with Docker over SSH without typing `sudo`, add the SSH user (e.g., `azureuser`) to the `docker` system group:
```bash
# Add current user to docker group
sudo usermod -aG docker $USER

# Apply the group changes to the current terminal session
newgrp docker
```
> [!IMPORTANT]
> If you do not perform the command `sudo usermod -aG docker $USER`, the SSH deployment script in GitHub Actions will fail with permission errors. After running this command, verify that you can run `docker ps` without `sudo`.

---

## 3. GitHub Secrets Configuration

To enable automated deployments, navigate to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**, and create the following secrets:

| Secret Name | Description / Value | Example |
| :--- | :--- | :--- |
| `AZURE_VM_IP` | The public IP address of your Azure Virtual Machine. | `20.123.45.67` |
| `AZURE_VM_USER` | The admin username used to access the VM. | `azureuser` |
| `AZURE_SSH_KEY` | The entire private SSH key file content corresponding to the public key authorized on the VM. | `-----BEGIN OPENSSH PRIVATE KEY----- ...` |
| `REGISTRY_USER` | Your Docker Hub Username. | `ayush991` |
| `REGISTRY_TOKEN` | A Docker Hub Personal Access Token (or password). | `dckr_pat_abcdef...` |
| `APP_URL` | The production domain or IP address of the deployed app. | `http://20.123.45.67` |

---

## 4. SSH Key Setup Verification (Self Check)
Make sure the public key corresponding to `AZURE_SSH_KEY` is registered in `~/.ssh/authorized_keys` on the VM:
```bash
cat ~/.ssh/authorized_keys
```
If you need to add your public key, run:
```bash
echo "YOUR_PUBLIC_KEY_CONTENT" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

Once this is done, you can push changes to the `main` branch, and the GitHub Actions runner will automatically build your image, push it to GHCR, copy `docker-compose.yml` to the VM, and execute the deployment script.
