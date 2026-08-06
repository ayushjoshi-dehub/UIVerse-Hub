import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Eye, Download, Heart, Bookmark, Copy, Check, Code, ShieldCheck, Box } from 'lucide-react';
import { UIComponent } from '../types';
import LiveSandbox from './LiveSandbox';

interface ComponentCardProps {
  key?: string | number;
  component: UIComponent;
  onSelect: (comp: UIComponent) => void;
  onFork: (comp: UIComponent) => void;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
}

export default function ComponentCard({ component, onSelect, onFork, onLike, onBookmark }: ComponentCardProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const codeText = component.code.tsx || component.code.html || '';
    navigator.clipboard.writeText(codeText);
    setCopied(true);

    confetti({
      particleCount: 35,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#7C3AED', '#c084fc', '#38bdf8']
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      onLike(component.id);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
    onBookmark(component.id);
  };

  return (
    <div 
      onClick={() => onSelect(component)}
      className="group relative flex flex-col bg-[#141416] border border-[#26262a] rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
    >
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between p-3.5 border-b border-[#26262a] bg-[#0d0d0e]/80 z-10">
        <div className="flex items-center gap-2.5 min-w-0">
          <img 
            src={component.author.avatar} 
            alt={component.author.name} 
            className="w-6 h-6 rounded-full object-cover shrink-0 border border-[#26262a]"
          />
          <div className="min-w-0">
            <h3 className="text-xs font-bold text-white truncate group-hover:text-purple-300 transition-colors">
              {component.title}
            </h3>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
              <span className="truncate">@{component.author.handle}</span>
              {component.author.isVerified && (
                <ShieldCheck className="w-3 h-3 text-purple-400 shrink-0" />
              )}
            </div>
          </div>
        </div>

        {/* Category & Framework Badge */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded">
            {component.framework}
          </span>
        </div>
      </div>

      {/* Live Mini Sandbox Container */}
      <div className="relative w-full bg-[#09090b] p-2 overflow-hidden pointer-events-none min-h-[220px]">
        <LiveSandbox 
          code={component.code} 
          title={component.title} 
          minHeight="220px" 
          allowFullscreen={false} 
        />
        
        {/* Hover Overlay Action Bar */}
        <div className="absolute inset-0 bg-[#0d0d0e]/80 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4 pointer-events-auto">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onFork(component); }}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1a1a1d] hover:bg-white/10 text-slate-200 font-semibold text-xs rounded-xl border border-[#26262a] transition-all active:scale-95 cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Playground</span>
          </button>
        </div>
      </div>

      {/* Bottom Stats & Meta Bar */}
      <div className="flex items-center justify-between p-3.5 bg-[#0d0d0e] border-t border-[#26262a] text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            {component.stats.views}
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5 text-slate-500" />
            {component.stats.downloads}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleLikeClick}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              liked ? 'text-rose-400 bg-rose-500/10' : 'hover:text-rose-400 hover:bg-white/5'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-rose-400' : ''}`} />
            <span className="text-[10px] font-semibold">{component.stats.likes + (liked ? 1 : 0)}</span>
          </button>

          <button
            onClick={handleBookmarkClick}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              bookmarked ? 'text-purple-400 bg-purple-500/10' : 'hover:text-purple-400 hover:bg-white/5'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-purple-400' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
