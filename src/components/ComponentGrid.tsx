import React, { useState } from 'react';
import { Grid, List, Sparkles, Filter, ArrowUpDown } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      {/* Grid Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="font-bold text-white uppercase tracking-wider">
            SHOWING <span className="text-green-400">{components.length}</span> COMPONENTS
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-3">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-1.5 bg-[#111111] border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white/60 font-mono">
            <Filter className="w-3.5 h-3.5 text-white/40" />
            <span>LEVEL:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-[#111]">All Levels</option>
              <option value="Beginner" className="bg-[#111]">Beginner</option>
              <option value="Intermediate" className="bg-[#111]">Intermediate</option>
              <option value="Advanced" className="bg-[#111]">Advanced</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 bg-[#111111] border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white/60 font-mono">
            <ArrowUpDown className="w-3.5 h-3.5 text-white/40" />
            <span>SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="trending" className="bg-[#111]">Trending Today</option>
              <option value="popular" className="bg-[#111]">Most Popular</option>
              <option value="downloads" className="bg-[#111]">Most Downloaded</option>
              <option value="likes" className="bg-[#111]">Most Liked</option>
              <option value="newest" className="bg-[#111]">New Releases</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#111111] border border-white/10 rounded-full p-1 text-xs text-white/60">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white/10 text-green-400 border border-green-500/30' : 'hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                viewMode === 'compact' ? 'bg-white/10 text-green-400 border border-green-500/30' : 'hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid List or Empty State */}
      {components.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-[#111111] border border-white/10 rounded-2xl max-w-2xl mx-auto my-8">
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            <Sparkles className="w-8 h-8 animate-pulse text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">No matching components found</h3>
          <p className="text-white/60 text-sm max-w-md mb-6">
            We couldn't find any component matching your filters. You can generate a brand new one using our Gemini AI engine!
          </p>
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-extrabold text-sm rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate with AI Studio</span>
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 gap-4'
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

