import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Eye, Download, Heart, Bookmark, Copy, Check, Code, ShieldCheck } from 'lucide-react';
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
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#22c55e', '#4ade80', '#86efac']
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
      className="group relative flex flex-col bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-green-500/50 transition-all duration-300 cursor-pointer"
    >
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between p-4 pb-3 border-b border-white/10 bg-black/60 z-10">
        <div className="flex items-center gap-2.5 min-w-0">
          <img 
            src={component.author.avatar} 
            alt={component.author.name} 
            className="w-7 h-7 rounded-full object-cover shrink-0 border border-white/20"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white truncate group-hover:text-green-400 transition-colors">
              {component.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-white/40 font-mono">
              <span className="truncate">@{component.author.handle}</span>
              {component.author.isVerified && (
                <ShieldCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />
              )}
            </div>
          </div>
        </div>

        {/* Category & Framework Badge */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 rounded">
            {component.framework}
          </span>
        </div>
      </div>

      {/* Live Mini Sandbox Container */}
      <div className="relative w-full bg-black/90 p-2 overflow-hidden pointer-events-none">
        <LiveSandbox 
          code={component.code} 
          title={component.title} 
          minHeight="220px" 
          allowFullscreen={false} 
        />
        
        {/* Hover Overlay Action Bar */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-auto">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-extrabold text-xs rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-transform active:scale-95 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onFork(component); }}
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-white/10 text-white font-semibold text-xs rounded-full border border-white/20 transition-transform active:scale-95 cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>Playground</span>
          </button>
        </div>
      </div>

      {/* Bottom Stats & Meta Bar */}
      <div className="flex items-center justify-between p-4 pt-3 bg-[#111111] border-t border-white/10 text-xs text-white/50 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3.5 h-3.5 text-white/30" />
            {component.stats.views}
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <Download className="w-3.5 h-3.5 text-white/30" />
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
            <span className="text-[11px] font-semibold">{component.stats.likes + (liked ? 1 : 0)}</span>
          </button>

          <button
            onClick={handleBookmarkClick}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              bookmarked ? 'text-green-400 bg-green-500/10' : 'hover:text-green-400 hover:bg-white/5'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-green-400' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

