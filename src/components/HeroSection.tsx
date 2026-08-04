import React from 'react';
import { Search, Sparkles, TrendingUp, Code2, Download, Zap } from 'lucide-react';
import { Framework } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFramework: string;
  setSelectedFramework: (fw: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenAiStudio: () => void;
  totalComponents: number;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedFramework,
  setSelectedFramework,
  selectedCategory,
  setSelectedCategory,
  onOpenAiStudio,
  totalComponents
}: HeroSectionProps) {
  const frameworks: (Framework | 'All')[] = [
    'All',
    'React',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'Vue',
    'Svelte',
    'HeroUI',
    'shadcn/ui',
    'Framer Motion'
  ];

  const categories = [
    'All',
    'Buttons',
    'Cards',
    'Forms & Inputs',
    'Loaders & Spinners',
    'Modals & Drawers',
    'Navigation',
    'Hero Sections',
    'Pricing Tables',
    'Animations',
    'Dashboards'
  ];

  return (
    <div className="relative overflow-hidden bg-[#050505] pt-12 pb-10 px-4 lg:px-8 border-b border-white/10 bg-dot-grid-subtle">
      {/* Background Neon Green Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs font-mono text-green-400 mb-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
          <span className="font-bold tracking-widest uppercase text-[11px]">UIVerse Hub v2.5</span>
          <span className="text-green-500/40">•</span>
          <span className="text-white/80">Geometric Component Engine</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 uppercase">
          DISCOVER, COPY & BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
            REUSABLE UI COMPONENTS
          </span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Open-source frontend component ecosystem for React, Tailwind CSS, Vue, and Framer Motion. Powered by real-time playground & Gemini AI.
        </p>

        {/* Interactive Search Bar */}
        <div className="max-w-2xl mx-auto mb-6 relative">
          <div className="relative flex items-center bg-[#111111] border border-white/10 rounded-full shadow-2xl focus-within:border-green-500/80 focus-within:ring-2 focus-within:ring-green-500/20 transition-all p-1.5">
            <Search className="w-5 h-5 text-white/40 ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components (e.g., 'Neon Button', 'Glass Card', 'OTP Input')..."
              className="w-full bg-transparent text-white placeholder-white/30 text-sm px-3 py-2 outline-none font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-white/40 hover:text-white px-2 py-1 rounded cursor-pointer font-mono"
              >
                CLEAR
              </button>
            )}
            <button
              onClick={onOpenAiStudio}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-xs rounded-full hover:bg-green-500/20 transition-all cursor-pointer shrink-0 ml-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span>AI Generate</span>
            </button>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center justify-center flex-wrap gap-2 max-w-4xl mx-auto mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-green-500 text-black font-bold shadow-[0_0_12px_rgba(34,197,94,0.3)] scale-105'
                    : 'bg-black/60 text-white/60 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Framework Tabs Bar */}
        <div className="flex items-center justify-center flex-wrap gap-1 bg-[#111111] p-1.5 rounded-full border border-white/10 max-w-3xl mx-auto shadow-xl">
          {frameworks.map((fw) => {
            const isSelected = selectedFramework === fw;
            return (
              <button
                key={fw}
                onClick={() => setSelectedFramework(fw)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 text-green-400 border border-green-500/30 shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {fw}
              </button>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10 pt-6 border-t border-white/10 text-center">
          <div className="p-3.5 bg-[#111111] border border-white/10 rounded-xl">
            <div className="flex items-center justify-center gap-1.5 text-green-400 mb-1">
              <Code2 className="w-4 h-4" />
              <span className="text-xl font-bold font-mono text-white">{totalComponents}</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">UI Components</span>
          </div>

          <div className="p-3.5 bg-[#111111] border border-white/10 rounded-xl">
            <div className="flex items-center justify-center gap-1.5 text-green-400 mb-1">
              <Download className="w-4 h-4" />
              <span className="text-xl font-bold font-mono text-white">1.2M+</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Total Downloads</span>
          </div>

          <div className="p-3.5 bg-[#111111] border border-white/10 rounded-xl">
            <div className="flex items-center justify-center gap-1.5 text-green-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xl font-bold font-mono text-white">Gemini 3.6</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">AI Engine</span>
          </div>

          <div className="p-3.5 bg-[#111111] border border-white/10 rounded-xl">
            <div className="flex items-center justify-center gap-1.5 text-green-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xl font-bold font-mono text-white">100%</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Open Source</span>
          </div>
        </div>

      </div>
    </div>
  );
}

