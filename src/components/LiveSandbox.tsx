import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, RotateCcw, Smartphone, Tablet, Monitor, Sun, Moon } from 'lucide-react';

interface LiveSandboxProps {
  code: {
    html?: string;
    css?: string;
    js?: string;
    tsx?: string;
  };
  title?: string;
  minHeight?: string;
  allowFullscreen?: boolean;
}

export default function LiveSandbox({ code, title = 'Preview', minHeight = '320px', allowFullscreen = true }: LiveSandboxProps) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0); // for refresh
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const containerWidths = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto',
    mobile: 'max-w-[375px] mx-auto'
  };

  useEffect(() => {
    if (!iframeRef.current) return;

    const htmlContent = code.html || '';
    const cssContent = code.css || '';
    const jsContent = code.js || '';
    const tsxContent = code.tsx || '';

    // Convert simple TSX/JSX to plain executable HTML/JS if TSX provided
    let renderedBody = htmlContent;
    if (!renderedBody && tsxContent) {
      // Strips import statements and export default statements for inline rendering
      let stripped = tsxContent
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
        .replace(/export\s+default\s+function\s+(\w+)\s*\(\)\s*\{/g, 'function App() {')
        .replace(/export\s+default\s+/g, '');

      renderedBody = `<div id="root"></div>
<script type="text/babel">
  try {
    ${stripped}
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  } catch (e) {
    document.getElementById('root').innerHTML = '<div style="color:#ef4444;padding:16px;font-family:sans-serif;">Render Error: ' + e.message + '</div>';
  }
</script>`;
    }

    const doc = `<!DOCTYPE html>
<html class="${theme === 'dark' ? 'dark' : ''}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body {
      background-color: ${theme === 'dark' ? '#030712' : '#ffffff'};
      color: ${theme === 'dark' ? '#f9fafb' : '#111827'};
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      margin: 0;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      box-sizing: border-box;
    }
    ${cssContent}
  </style>
</head>
<body>
  ${renderedBody}
  ${jsContent ? `<script>${jsContent}</script>` : ''}
</body>
</html>`;

    const iframeDoc = iframeRef.current.contentDocument;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(doc);
      iframeDoc.close();
    }
  }, [code, theme, key]);

  return (
    <div className={`flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all ${isFullscreen ? 'fixed inset-4 z-50 m-0 rounded-2xl ring-2 ring-cyan-500' : ''}`}>
      {/* Sandbox Controls Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-semibold text-slate-300">{title}</span>
        </div>

        {/* Device View Mode & Controls */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setDevice('desktop')}
            title="Desktop view"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:text-white'}`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            title="Tablet view (768px)"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:text-white'}`}
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            title="Mobile view (375px)"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:text-white'}`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle preview dark/light theme"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
          >
            {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-indigo-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
            <span className="text-[10px] uppercase font-bold">{theme}</span>
          </button>

          {/* Reset button */}
          <button
            onClick={() => setKey((k) => k + 1)}
            title="Reload preview state"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen button */}
          {allowFullscreen && (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title="Toggle fullscreen"
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Frame Container */}
      <div className={`relative w-full overflow-auto bg-slate-950/60 p-4 transition-all ${containerWidths[device]}`} style={{ minHeight: isFullscreen ? 'calc(100vh - 80px)' : minHeight }}>
        <iframe
          ref={iframeRef}
          title={title}
          className="w-full h-full min-h-[300px] border-0 rounded-xl transition-all shadow-inner"
          sandbox="allow-scripts allow-modals"
        />
      </div>
    </div>
  );
}
