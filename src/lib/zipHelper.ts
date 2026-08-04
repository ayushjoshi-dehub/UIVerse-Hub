import JSZip from 'jszip';
import { UIComponent } from '../types';

export async function downloadComponentZip(component: UIComponent) {
  const zip = new JSZip();

  const isReact = component.framework.includes('React') || component.framework.includes('shadcn') || component.framework.includes('Framer');

  // Package.json
  const packageJson = {
    name: component.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    version: component.version || '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview'
    },
    dependencies: {
      react: '^19.0.0',
      'react-dom': '^19.0.0',
      tailwindcss: '^4.0.0',
      'lucide-react': '^0.450.0'
    },
    devDependencies: {
      vite: '^6.0.0',
      '@vitejs/plugin-react': '^4.0.0'
    }
  };

  zip.file('package.json', JSON.stringify(packageJson, null, 2));

  // README.md
  const readme = `# ${component.title}

> ${component.description}

- **Category:** ${component.category}
- **Framework:** ${component.framework}
- **License:** ${component.license}
- **Author:** ${component.author.name} (@${component.author.handle})

## Setup & Running

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start development server:
\`\`\`bash
npm run dev
\`\`\`

---
*Exported from [UIVerse Hub](https://ai.studio)*
`;

  zip.file('README.md', readme);

  if (isReact && component.code.tsx) {
    zip.file('src/Component.tsx', component.code.tsx);
    zip.file(
      'src/App.tsx',
      `import React from 'react';
import Component from './Component';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <Component />
    </div>
  );
}`
    );
  } else if (component.code.html) {
    zip.file(
      'index.html',
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${component.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    ${component.code.css || ''}
  </style>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center p-8">
  ${component.code.html}
  <script>
    ${component.code.js || ''}
  </script>
</body>
</html>`
    );
  }

  // Generate blob & trigger download
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${component.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-uiverse.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
