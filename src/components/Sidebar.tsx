import React from 'react';
import { 
  Globe, 
  Image as ImageIcon, 
  Type, 
  MousePointer, 
  Sparkles, 
  SquareCheck, 
  CreditCard, 
  Layers, 
  Zap, 
  Search,
  SlidersHorizontal,
  Compass,
  Code2,
  Box
} from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedFramework: string;
  setSelectedFramework: (fw: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalComponents: number;
  categoryCounts: Record<string, number>;
}

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  selectedFramework,
  setSelectedFramework,
  searchQuery,
  setSearchQuery,
  totalComponents,
  categoryCounts
}: SidebarProps) {
  const categories: { id: string; name: string; icon: React.ReactNode; countKey: string }[] = [
    { id: 'All', name: 'All Components', icon: <Compass className="w-4 h-4" />, countKey: 'All' },
    { id: 'Interactive Elements', name: 'Interactive Elements', icon: <Globe className="w-4 h-4 text-purple-400" />, countKey: 'Interactive Elements' },
    { id: 'Image Gallery', name: 'Image Gallery', icon: <ImageIcon className="w-4 h-4 text-cyan-400" />, countKey: 'Image Gallery' },
    { id: 'Text Animations', name: 'Text Animations', icon: <Type className="w-4 h-4 text-emerald-400" />, countKey: 'Text Animations' },
    { id: 'Cursor Effects', name: 'Cursor Effects', icon: <MousePointer className="w-4 h-4 text-amber-400" />, countKey: 'Cursor Effects' },
    { id: 'Background Animations', name: 'Background Animations', icon: <Sparkles className="w-4 h-4 text-pink-400" />, countKey: 'Background Animations' },
    { id: 'Buttons', name: 'Buttons & Controls', icon: <Zap className="w-4 h-4 text-indigo-400" />, countKey: 'Buttons' },
    { id: 'Cards', name: 'Cards & Pricing', icon: <CreditCard className="w-4 h-4 text-teal-400" />, countKey: 'Cards' },
    { id: 'Forms & Inputs', name: 'Forms & Inputs', icon: <SquareCheck className="w-4 h-4 text-blue-400" />, countKey: 'Forms & Inputs' },
    { id: 'Animations', name: 'Micro-Animations', icon: <Layers className="w-4 h-4 text-rose-400" />, countKey: 'Animations' }
  ];

  const variantFilters = [
    { id: 'All', label: 'All' },
    { id: 'React', label: 'React' },
    { id: 'Framer Motion', label: 'Framer' },
    { id: 'Tailwind CSS', label: 'Tailwind' },
    { id: 'HTML', label: 'HTML' }
  ];

  return (
    <aside className="w-[280px] shrink-0 border-r border-[#26262a] bg-[#0d0d0e] flex flex-col h-screen sticky top-0 text-slate-200 select-none z-40 hidden lg:flex">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#26262a] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center font-extrabold text-white text-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            O
          </div>
          <div>
            <h1 className="font-extrabold text-sm text-white tracking-tight flex items-center gap-1.5">
              OriginKit <span className="text-[10px] font-mono font-normal text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">Beta</span>
            </h1>
            <p className="text-[10px] font-mono text-slate-400">Animated Component Hub</p>
          </div>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="p-3 border-b border-[#26262a]">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-3 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161618] text-xs text-white placeholder-slate-500 pl-8 pr-7 py-2 rounded-lg border border-[#26262a] focus:border-purple-500 focus:outline-none transition-colors font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 text-xs text-slate-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Variant / Framework Selector Chips */}
      <div className="p-3 border-b border-[#26262a]">
        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-2">
          <SlidersHorizontal className="w-3 h-3 text-purple-400" />
          <span>FORMAT VARIANT</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {variantFilters.map((vf) => (
            <button
              key={vf.id}
              onClick={() => setSelectedFramework(vf.id)}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-md border transition-all cursor-pointer ${
                selectedFramework === vf.id
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/40 font-bold'
                  : 'bg-[#161618] text-slate-400 border-[#26262a] hover:text-white hover:border-slate-700'
              }`}
            >
              {vf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Categories ({totalComponents})
        </div>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'All' ? totalComponents : (categoryCounts[cat.id] || 0);

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer group ${
                isSelected
                  ? 'bg-purple-600/15 text-purple-300 border border-purple-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-[#161618]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="shrink-0">{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </div>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                isSelected ? 'bg-purple-500/20 text-purple-300 font-bold' : 'bg-[#1a1a1d] text-slate-400 group-hover:text-slate-300'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Integration Footer */}
      <div className="p-3 border-t border-[#26262a] bg-[#0d0d0e]">
        <div className="p-2.5 bg-[#141416] rounded-xl border border-[#26262a] space-y-2">
          <div className="flex items-center justify-between text-xs text-white font-semibold">
            <span className="flex items-center gap-1.5 text-purple-400">
              <Box className="w-3.5 h-3.5" /> Framer & MCP Ready
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">LIVE</span>
          </div>
          <p className="text-[10px] text-slate-400">
            Copy code directly into Framer canvas or use through MCP server.
          </p>
        </div>
      </div>
    </aside>
  );
}
