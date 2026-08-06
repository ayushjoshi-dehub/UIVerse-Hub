import React, { useState } from 'react';
import { Grid, List, Sparkles, Filter, ArrowUpDown, MessageSquarePlus } from 'lucide-react';
import { UIComponent } from '../types';
import ComponentCard from './ComponentCard';

interface ComponentGridProps {
  components: UIComponent[];
  sortBy: string;
  setSortBy: (sort: any) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (diff: string) => void;
  onSelectComponent: (comp: UIComponent) => void;
  onForkComponent: (comp: UIComponent) => void;
  onLikeComponent: (id: string) => void;
  onBookmarkComponent: (id: string) => void;
  onOpenAiStudio: () => void;
}

export default function ComponentGrid({
  components,
  sortBy,
  setSortBy,
  selectedDifficulty,
  setSelectedDifficulty,
  onSelectComponent,
  onForkComponent,
  onLikeComponent,
  onBookmarkComponent,
  onOpenAiStudio
}: ComponentGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  return (
    <div className="w-full px-4 lg:px-6 py-4">
      
      {/* Top Notice Banner matching OriginKit */}
      <div className="flex w-fit max-w-full items-center justify-between gap-3 bg-[#1e1e24] border border-[#2d2d34] px-4 py-2 font-mono rounded-lg mb-5 text-xs text-slate-200">
        <p className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Originkit is in Beta. Think something could be better?</span>
        </p>
        <button 
          onClick={onOpenAiStudio}
          className="text-purple-400 underline underline-offset-2 hover:text-purple-300 font-semibold cursor-pointer flex items-center gap-1"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" />
          Suggest an improvement
        </button>
      </div>

      {/* Grid Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-3 border-b border-[#26262a]">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
          <span className="font-bold text-white uppercase tracking-wider">
            SHOWING <span className="text-purple-400 font-bold">{components.length}</span> ANIMATED COMPONENTS
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-1.5 bg-[#141416] border border-[#26262a] rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] text-slate-400">LEVEL:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-[#141416]">All Levels</option>
              <option value="Beginner" className="bg-[#141416]">Beginner</option>
              <option value="Intermediate" className="bg-[#141416]">Intermediate</option>
              <option value="Advanced" className="bg-[#141416]">Advanced</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 bg-[#141416] border border-[#26262a] rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] text-slate-400">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="trending" className="bg-[#141416]">Trending</option>
              <option value="popular" className="bg-[#141416]">Most Popular</option>
              <option value="downloads" className="bg-[#141416]">Most Exported</option>
              <option value="likes" className="bg-[#141416]">Most Liked</option>
              <option value="newest" className="bg-[#141416]">Newest First</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#141416] border border-[#26262a] rounded-lg p-1 text-xs text-slate-400">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded-md transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : 'hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-1 rounded-md transition-colors cursor-pointer ${
                viewMode === 'compact' ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : 'hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid List or Empty State */}
      {components.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-[#141416] border border-[#26262a] rounded-2xl max-w-xl mx-auto my-8">
          <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            <Sparkles className="w-7 h-7 animate-pulse text-purple-400" />
          </div>
          <h3 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide">No components found</h3>
          <p className="text-slate-400 text-xs max-w-md mb-5 font-mono">
            No components match your query. You can generate a brand new interactive component using the AI Studio engine!
          </p>
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate with AI Studio</span>
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
              : 'grid grid-cols-1 md:grid-cols-2 gap-3'
          }
        >
          {components.map((comp) => (
            <ComponentCard
              key={comp.id}
              component={comp}
              onSelect={onSelectComponent}
              onFork={onForkComponent}
              onLike={onLikeComponent}
              onBookmark={onBookmarkComponent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
