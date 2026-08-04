import React, { useState, useEffect } from 'react';
import { Layers, Plus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Collection, UIComponent } from '../types';
import ComponentCard from './ComponentCard';

interface CollectionsViewProps {
  allComponents: UIComponent[];
  onSelectComponent: (comp: UIComponent) => void;
  onForkComponent: (comp: UIComponent) => void;
  onLikeComponent: (id: string) => void;
  onBookmarkComponent: (id: string) => void;
}

export default function CollectionsView({
  allComponents,
  onSelectComponent,
  onForkComponent,
  onLikeComponent,
  onBookmarkComponent
}: CollectionsViewProps) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  useEffect(() => {
    fetch('/api/collections')
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error(err));
  }, []);

  const collectionComponents = selectedCollection
    ? allComponents.filter((c) => selectedCollection.componentIds.includes(c.id))
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h1 className="text-xl font-extrabold text-white">Curated Collections</h1>
          </div>
          <p className="text-xs text-slate-400">Handpicked component packs for landing pages, dashboards, and design systems.</p>
        </div>

        {selectedCollection && (
          <button
            onClick={() => setSelectedCollection(null)}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl cursor-pointer"
          >
            ← Back to Collections
          </button>
        )}
      </div>

      {/* Grid of Collections OR Collection Detail */}
      {!selectedCollection ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-slate-700 hover:shadow-cyan-500/10 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Cover Banner */}
              <div className={`h-36 bg-gradient-to-r ${col.coverGradient || 'from-indigo-900 to-purple-900'} p-6 relative flex flex-col justify-between`}>
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-400 font-bold text-[10px] uppercase rounded-full w-fit border border-cyan-500/30">
                  {col.componentIds.length} Components
                </span>
                <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {col.title}
                </h3>
              </div>

              {/* Author & Description */}
              <div className="p-6 bg-slate-950/60 flex flex-col justify-between flex-1 gap-4">
                <p className="text-xs text-slate-400 leading-relaxed">{col.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <img src={col.authorAvatar} alt={col.authorName} className="w-6 h-6 rounded-full object-cover" />
                    <span className="font-semibold text-slate-300">{col.authorName}</span>
                  </div>

                  <span className="flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
            <h2 className="text-2xl font-extrabold text-white mb-2">{selectedCollection.title}</h2>
            <p className="text-xs text-slate-400 mb-4">{selectedCollection.description}</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Curated by @{selectedCollection.authorHandle}</span>
              <span>•</span>
              <span>{collectionComponents.length} components found</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionComponents.map((comp) => (
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
        </div>
      )}

    </div>
  );
}
