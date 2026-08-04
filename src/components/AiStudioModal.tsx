import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Copy, Download, Code, Play, Check, Wand2 } from 'lucide-react';
import { Framework, Category } from '../types';
import LiveSandbox from './LiveSandbox';
import { downloadComponentZip } from '../lib/zipHelper';

interface AiStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComponentGenerated: (comp: any) => void;
  onOpenPlayground: (comp: any) => void;
}

export default function AiStudioModal({ isOpen, onClose, onComponentGenerated, onOpenPlayground }: AiStudioModalProps) {
  if (!isOpen) return null;

  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<'glassmorphism' | 'minimal' | 'cyberpunk' | 'gradient' | 'neumorphism'>('glassmorphism');
  const [framework, setFramework] = useState<Framework>('React');
  const [category, setCategory] = useState<Category>('Cards');
  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedResult, setGeneratedResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const samplePrompts = [
    'Glassmorphic music player card with audio spectrum pulse',
    'Cyberpunk neon glowing action button with particle beam',
    'Minimalist OTP 6-digit verification pin form',
    '3D tilt pricing table with monthly annual toggle'
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedResult(null);

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          framework,
          category,
          style
        })
      });

      const data = await res.json();
      setGeneratedResult(data);

      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyCode = () => {
    if (!generatedResult) return;
    const codeStr = generatedResult.code?.tsx || generatedResult.code?.html || '';
    navigator.clipboard.writeText(codeStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-purple-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-white">Gemini 3.6 AI Component Generator</h2>
                <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full">
                  AI Studio
                </span>
              </div>
              <p className="text-xs text-slate-400">Generate production-ready UI components instantly from natural language prompts.</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form & Workspace */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Prompt Form */}
          <form onSubmit={handleGenerate} className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Describe the UI Component
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. Glassmorphic music card with audio equalizer bars and glowing play button..."
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-purple-500 font-medium"
                />
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-purple-500/25 cursor-pointer disabled:opacity-50 shrink-0"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>{isGenerating ? 'Generating...' : 'Generate UI'}</span>
                </button>
              </div>
            </div>

            {/* Quick Prompt Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] text-slate-500 mr-1">Inspirations:</span>
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPrompt(p)}
                  className="px-2.5 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-purple-300 rounded-lg border border-slate-800 cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Config Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Style Preset</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value as any)}
                  className="w-full p-2 bg-slate-900 border border-slate-800 text-white text-xs rounded-lg outline-none cursor-pointer"
                >
                  <option value="glassmorphism">Glassmorphism</option>
                  <option value="minimal">Minimalist</option>
                  <option value="cyberpunk">Cyberpunk Neon</option>
                  <option value="gradient">Gradient Glow</option>
                  <option value="neumorphism">Soft Shadows</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Framework</label>
                <select
                  value={framework}
                  onChange={(e) => setFramework(e.target.value as Framework)}
                  className="w-full p-2 bg-slate-900 border border-slate-800 text-white text-xs rounded-lg outline-none cursor-pointer"
                >
                  <option value="React">React TSX</option>
                  <option value="Tailwind CSS">Tailwind CSS</option>
                  <option value="HTML">HTML / CSS</option>
                  <option value="Vue">Vue 3</option>
                  <option value="Svelte">Svelte</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="w-full p-2 bg-slate-900 border border-slate-800 text-white text-xs rounded-lg outline-none cursor-pointer"
                >
                  <option value="Cards">Cards</option>
                  <option value="Buttons">Buttons</option>
                  <option value="Forms & Inputs">Forms & Inputs</option>
                  <option value="Loaders & Spinners">Loaders & Spinners</option>
                  <option value="Hero Sections">Hero Sections</option>
                  <option value="Pricing Tables">Pricing Tables</option>
                </select>
              </div>
            </div>
          </form>

          {/* Generated Result Output */}
          {generatedResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-white">{generatedResult.title}</h3>
                  <p className="text-xs text-slate-400">{generatedResult.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenPlayground({
                        title: generatedResult.title,
                        framework,
                        code: generatedResult.code
                      });
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Open in Playground</span>
                  </button>
                </div>
              </div>

              <LiveSandbox code={generatedResult.code} title={generatedResult.title} minHeight="280px" />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
