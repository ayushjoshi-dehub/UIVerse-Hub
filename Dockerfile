# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy application source code and configuration files
COPY tsconfig.json vite.config.ts index.html server.ts ./
COPY src/ ./src/
COPY assets/ ./assets/

# Build client assets and compile backend server
RUN npm run build

# Stage 2: Production runner
FROM node:20-alpine

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install only production-level dependencies to minimize image size
RUN npm ci --only=production && npm cache clean --force

# Copy only the compiled dist folder containing built assets and server.cjs
COPY --from=builder /app/dist ./dist

# Expose port 3000 (Express server's default port)
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.cjs"]