import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Upload, Sparkles, Check } from 'lucide-react';
import { Framework, Category, Difficulty } from '../types';
import LiveSandbox from './LiveSandbox';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComponentUploaded: (newComp: any) => void;
  initialData?: any;
}

export default function UploadModal({ isOpen, onClose, onComponentUploaded, initialData }: UploadModalProps) {
  if (!isOpen) return null;

  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('Buttons');
  const [framework, setFramework] = useState<Framework>(initialData?.framework || 'React');
  const [difficulty, setDifficulty] = useState<Difficulty>('Intermediate');
  const [tagsInput, setTagsInput] = useState('Button, Modern, Tailwind');

  const [code, setCode] = useState({
    tsx: initialData?.code?.tsx || '',
    html: initialData?.code?.html || '',
    css: initialData?.code?.css || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || (!code.tsx && !code.html)) {
      alert('Please provide a component title and valid code.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title,
        description,
        category,
        framework,
        difficulty,
        tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
        code,
        author: {
          name: 'Elena Rostova',
          handle: 'elenadesign',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          isVerified: true
        }
      };

      const res = await fetch('/api/components', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const newComp = await res.json();

      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 }
      });

      onComponentUploaded(newComp);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Upload Component</h2>
              <p className="text-xs text-slate-400">Share your custom UI code with the developer community.</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Glowing Neon Button"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="Buttons">Buttons</option>
                <option value="Cards">Cards</option>
                <option value="Forms & Inputs">Forms & Inputs</option>
                <option value="Loaders & Spinners">Loaders & Spinners</option>
                <option value="Modals & Drawers">Modals & Drawers</option>
                <option value="Navigation">Navigation</option>
                <option value="Hero Sections">Hero Sections</option>
                <option value="Pricing Tables">Pricing Tables</option>
                <option value="Animations">Animations</option>
                <option value="Dashboards">Dashboards</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Framework</label>
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value as Framework)}
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="React">React TSX</option>
                <option value="Tailwind CSS">Tailwind CSS</option>
                <option value="HTML">HTML / CSS</option>
                <option value="Vue">Vue 3</option>
                <option value="Svelte">Svelte</option>
                <option value="HeroUI">HeroUI</option>
                <option value="Framer Motion">Framer Motion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Button, Modern, Glow"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief overview of component usage & features..."
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500 min-h-[60px]"
            />
          </div>

          {/* Code Inputs */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">React TSX Code</label>
            <textarea
              value={code.tsx}
              onChange={(e) => setCode({ ...code, tsx: e.target.value })}
              placeholder="import React from 'react'; ..."
              className="w-full p-3 bg-slate-950 font-mono text-cyan-300 border border-slate-800 rounded-xl text-xs outline-none focus:border-cyan-500 min-h-[140px]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">HTML / Tailwind Markup (Fallback)</label>
            <textarea
              value={code.html}
              onChange={(e) => setCode({ ...code, html: e.target.value })}
              placeholder="<button class='bg-cyan-500...'>Click</button>"
              className="w-full p-3 bg-slate-950 font-mono text-cyan-300 border border-slate-800 rounded-xl text-xs outline-none focus:border-cyan-500 min-h-[100px]"
            />
          </div>

          {/* Preview Test Box */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Live Sandbox Test</label>
            <LiveSandbox code={code} title={title || 'Component Test'} minHeight="200px" />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl cursor-pointer hover:bg-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl cursor-pointer shadow-lg shadow-cyan-500/20 disabled:opacity-50"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Component'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
