import React from 'react';
import { Sparkles, Search, PlusCircle, Compass, Code, Layers, Users, ShieldCheck, Box } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenUpload: () => void;
  onOpenAiStudio: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenSearch, onOpenUpload, onOpenAiStudio }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#0d0d0e]/90 backdrop-blur-md border-b border-[#26262a] px-4 lg:px-6 py-3 transition-all select-none">
      <div className="flex items-center justify-between gap-4">
        
        {/* Brand Title for Mobile / Compact */}
        <div 
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-2.5 cursor-pointer group lg:hidden"
        >
          <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            O
          </div>
          <span className="font-extrabold text-white text-base tracking-tight">
            Origin<span className="text-purple-400">Kit</span>
          </span>
        </div>

        {/* Center Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-[#141416] p-1 rounded-xl border border-[#26262a]">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'explore' 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Components</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'playground' 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('collections')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'collections' 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Collections</span>
          </button>

          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'community' 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Community</span>
          </button>
        </nav>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 px-3 py-1.5 bg-[#141416] border border-[#26262a] hover:border-slate-700 text-slate-400 text-xs rounded-lg transition-all cursor-pointer group"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-400" />
            <span className="hidden md:inline font-mono">Quick Search...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] font-mono bg-black rounded border border-[#26262a] text-slate-400">⌘K</kbd>
          </button>

          {/* AI Generator Button */}
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600/15 border border-purple-500/40 text-purple-300 hover:bg-purple-600/25 font-bold text-xs rounded-lg transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">AI Studio</span>
          </button>

          {/* Upload Button */}
          <button
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600 text-white font-bold text-xs rounded-lg hover:bg-purple-500 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Upload</span>
          </button>

          {/* Profile Avatar */}
          <button
            onClick={() => setActiveTab('profile')}
            className="w-8 h-8 rounded-lg overflow-hidden border border-[#26262a] hover:border-purple-500 transition-all cursor-pointer shrink-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>

      </div>
    </header>
  );
}
