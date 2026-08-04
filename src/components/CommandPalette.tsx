import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, Code, Compass, Layers, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { UIComponent } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  components: UIComponent[];
  onSelectComponent: (comp: UIComponent) => void;
  onNavigateTab: (tab: string) => void;
  onOpenAiStudio: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  components,
  onSelectComponent,
  onNavigateTab,
  onOpenAiStudio
}: CommandPaletteProps) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredComponents = query.trim()
    ? components.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase()) ||
          c.framework.toLowerCase().includes(query.toLowerCase()) ||
          c.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : components.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search components, tools, or categories..."
            className="w-full bg-transparent text-white text-sm outline-none font-medium placeholder-slate-500"
          />
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-white rounded-lg cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results / Navigation Options */}
        <div className="p-3 overflow-y-auto max-h-[380px] space-y-3 text-xs">
          
          {/* Quick Platform Shortcuts */}
          {!query && (
            <div>
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Quick Shortcuts
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                <button
                  onClick={() => { onClose(); onOpenAiStudio(); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-purple-300 font-semibold cursor-pointer border border-purple-500/20"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Launch AI Studio</span>
                </button>

                <button
                  onClick={() => { onClose(); onNavigateTab('playground'); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-cyan-300 font-semibold cursor-pointer border border-cyan-500/20"
                >
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Open Playground</span>
                </button>

                <button
                  onClick={() => { onClose(); onNavigateTab('collections'); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-slate-300 font-semibold cursor-pointer border border-slate-800"
                >
                  <Layers className="w-4 h-4 text-slate-400" />
                  <span>View Collections</span>
                </button>

                <button
                  onClick={() => { onClose(); onNavigateTab('admin'); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-amber-300 font-semibold cursor-pointer border border-amber-500/20"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Admin Dashboard</span>
                </button>
              </div>
            </div>
          )}

          {/* Component Search Results */}
          <div>
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {query ? `Search Results (${filteredComponents.length})` : 'Popular Components'}
            </div>

            <div className="space-y-1 mt-1">
              {filteredComponents.map((comp) => (
                <div
                  key={comp.id}
                  onClick={() => { onClose(); onSelectComponent(comp); }}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/40 hover:bg-slate-800/80 cursor-pointer transition-colors border border-slate-800/60 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                      {comp.framework}
                    </span>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">{comp.title}</h4>
                      <p className="text-[11px] text-slate-400">{comp.category} • @{comp.author.handle}</p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500">
          <span>Press <kbd className="px-1 py-0.5 bg-slate-900 rounded border border-slate-800">ESC</kbd> to exit</span>
          <span>UIVerse Hub Instant Search</span>
        </div>

      </div>
    </div>
  );
}
