import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Code, Play, Sparkles, Copy, Download, RefreshCw, Layers, 
  Check, Terminal, Settings, ArrowRight, Wand2 
} from 'lucide-react';
import { UIComponent, Framework } from '../types';
import LiveSandbox from './LiveSandbox';
import { downloadComponentZip } from '../lib/zipHelper';

interface PlaygroundProps {
  initialComponent?: UIComponent | null;
  onPublish: (compData: any) => void;
}

export default function Playground({ initialComponent, onPublish }: PlaygroundProps) {
  const [title, setTitle] = useState(initialComponent?.title || 'Untitled Playground Component');
  const [framework, setFramework] = useState<Framework>(initialComponent?.framework || 'React');
  const [activeTab, setActiveTab] = useState<'tsx' | 'html' | 'css' | 'js'>('tsx');

  const [code, setCode] = useState({
    tsx: initialComponent?.code.tsx || `import React, { useState } from 'react';

export default function CustomCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-sm text-center">
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4 font-bold text-xl">
        ⚡
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Interactive Counter</h3>
      <p className="text-xs text-slate-400 mb-6">Modify code in the live editor to see changes instantly.</p>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="w-10 h-10 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors"
        >
          -
        </button>
        <span className="text-3xl font-extrabold text-cyan-400 min-w-[40px]">{count}</span>
        <button 
          onClick={() => setCount(count + 1)}
          className="w-10 h-10 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}`,
    html: initialComponent?.code.html || `<div class="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-sm text-center text-white">
  <h3 class="text-xl font-bold mb-2">HTML Tailwind Card</h3>
  <p class="text-xs text-slate-400 mb-4">Edit HTML directly in the sandbox.</p>
  <button class="px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl">Click Me</button>
</div>`,
    css: initialComponent?.code.css || '',
    js: initialComponent?.code.js || ''
  });

  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const text = code[activeTab] || code.tsx || code.html || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = () => {
    const mockComp: UIComponent = {
      id: 'playground-export',
      title: title || 'Playground Component',
      description: 'Exported from UIVerse Hub Playground',
      category: 'Buttons',
      framework,
      code,
      tags: ['Playground'],
      author: { name: 'You', handle: 'me', avatar: '' },
      stats: { views: 0, downloads: 0, likes: 0, bookmarks: 0, rating: 5, commentsCount: 0 },
      license: 'MIT',
      version: '1.0.0',
      dependencies: ['react', 'tailwindcss'],
      responsive: true,
      darkSupport: true,
      accessibilityReady: true,
      difficulty: 'Intermediate',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    downloadComponentZip(mockComp);
  };

  const handleAiRefactor = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Modify existing code: "${aiPrompt}". Current code: ${JSON.stringify(code)}`,
          framework,
          category: 'Buttons',
          style: 'minimal'
        })
      });

      const result = await res.json();
      if (result.code) {
        setCode({
          tsx: result.code.tsx || code.tsx,
          html: result.code.html || code.html,
          css: result.code.css || code.css,
          js: result.code.js || code.js
        });
        if (result.title) setTitle(result.title);
      }
      setAiPrompt('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Playground Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent text-white font-extrabold text-lg outline-none focus:border-b focus:border-cyan-400"
            />
            <p className="text-xs text-slate-400">Live Code Playground • Auto-compiling</p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {/* Framework Picker */}
          <select
            value={framework}
            onChange={(e) => setFramework(e.target.value as Framework)}
            className="bg-slate-950 border border-slate-800 text-white font-semibold text-xs px-3 py-2 rounded-xl outline-none cursor-pointer"
          >
            <option value="React">React TSX</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
            <option value="HTML">HTML / CSS</option>
            <option value="Vue">Vue 3</option>
            <option value="Svelte">Svelte</option>
          </select>

          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Export ZIP */}
          <button
            onClick={handleDownloadZip}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export ZIP</span>
          </button>

          {/* Publish CTA */}
          <button
            onClick={() => onPublish({ title, framework, code })}
            className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Publish Component</span>
          </button>
        </div>
      </div>

      {/* Main Split Grid (Editor Left, Preview Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: EDITOR & AI PROMPT */}
        <div className="flex flex-col space-y-4">
          
          {/* Editor Language Tabs */}
          <div className="flex items-center justify-between bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('tsx')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  activeTab === 'tsx' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                TSX / React
              </button>
              <button
                onClick={() => setActiveTab('html')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  activeTab === 'html' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                HTML
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  activeTab === 'css' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400'
                }`}
              >
                CSS
              </button>
            </div>
            <span className="text-[10px] text-slate-500 font-mono px-2 py-1 bg-slate-950 rounded-lg">
              Live Editor
            </span>
          </div>

          {/* Code Textarea */}
          <div className="relative">
            <textarea
              value={code[activeTab]}
              onChange={(e) => setCode({ ...code, [activeTab]: e.target.value })}
              className="w-full h-[400px] p-4 bg-slate-950 text-cyan-300 font-mono text-xs rounded-2xl border border-slate-800 outline-none focus:border-cyan-500/80 leading-relaxed resize-none shadow-2xl"
              spellCheck={false}
            />
          </div>

          {/* AI Refactor Panel */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Wand2 className="w-4 h-4" />
              <span>Gemini AI Code Refactor</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Ask AI to edit code (e.g., 'Change color scheme to emerald green and add neon glow')..."
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-purple-500"
              />
              <button
                onClick={handleAiRefactor}
                disabled={isAiLoading}
                className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer hover:shadow-lg disabled:opacity-50 shrink-0"
              >
                {isAiLoading ? 'Refactoring...' : 'Apply AI'}
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE PREVIEW */}
        <div className="flex flex-col">
          <LiveSandbox code={code} title={title} minHeight="560px" />
        </div>

      </div>
    </div>
  );
}
