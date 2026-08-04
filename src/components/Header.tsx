import React from 'react';
import { Sparkles, Search, PlusCircle, Compass, Code, Layers, Users, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenUpload: () => void;
  onOpenAiStudio: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenSearch, onOpenUpload, onOpenAiStudio }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-105 transition-transform">
            U
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-lg tracking-tighter uppercase">
                UIVerse<span className="text-green-500">Hub</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                v2.5
              </span>
            </div>
            <p className="text-[10px] text-white/40 tracking-widest uppercase font-mono">Modern UI Component Engine</p>
          </div>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'explore' 
                ? 'bg-white/10 text-green-400 border border-green-500/30' 
                : 'text-white/60 hover:text-green-400 hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Explore
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'playground' 
                ? 'bg-white/10 text-green-400 border border-green-500/30' 
                : 'text-white/60 hover:text-green-400 hover:bg-white/5'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Playground
          </button>

          <button
            onClick={() => setActiveTab('collections')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'collections' 
                ? 'bg-white/10 text-green-400 border border-green-500/30' 
                : 'text-white/60 hover:text-green-400 hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Collections
          </button>

          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'community' 
                ? 'bg-white/10 text-green-400 border border-green-500/30' 
                : 'text-white/60 hover:text-green-400 hover:bg-white/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Community
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'admin' 
                ? 'bg-white/10 text-amber-400 border border-amber-500/30' 
                : 'text-white/60 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Admin
          </button>
        </nav>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-3 px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-white/20 text-white/60 text-xs rounded-full transition-all cursor-pointer group"
          >
            <Search className="w-3.5 h-3.5 text-white/40 group-hover:text-green-400 transition-colors" />
            <span className="hidden lg:inline">Search components...</span>
            <span className="inline lg:hidden">Search...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-black rounded border border-white/10 text-white/40">⌘K</kbd>
          </button>

          {/* AI Studio Trigger */}
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 font-bold text-xs rounded-full transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-green-400" />
            <span className="hidden sm:inline">AI Studio</span>
          </button>

          {/* Upload Component */}
          <button
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-green-500 text-black font-bold text-xs rounded-full hover:bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.25)] transition-all cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Upload</span>
          </button>

          {/* User Profile Avatar Trigger */}
          <button
            onClick={() => setActiveTab('profile')}
            className="w-8 h-8 rounded-full overflow-hidden border border-white/20 hover:border-green-400 transition-all cursor-pointer shrink-0 ml-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>

      </div>
    </header>
  );
}

