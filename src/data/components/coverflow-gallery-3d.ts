import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "coverflow-gallery-3d",
  "title": "Coverflow 3D Image Gallery",
  "description": "Interactive 3D perspective card carousel with smooth depth transitions, card scaling, and active glowing outline.",
  "category": "Image Gallery",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[340px] bg-[#0c0c0e] rounded-2xl flex items-center justify-center p-6 overflow-hidden border border-white/10\">\n  <div class=\"flex items-center justify-center gap-4 perspective-1000\">\n    <div class=\"w-40 h-56 rounded-2xl bg-gradient-to-tr from-purple-900 to-[#1e1b4b] border border-purple-500/30 shadow-2xl transform -rotate-y-25 scale-90 opacity-60 transition-all duration-500 flex flex-col justify-end p-4\">\n      <span class=\"text-xs font-mono text-purple-300\">#01 Aurora</span>\n    </div>\n    <div class=\"w-48 h-64 rounded-2xl bg-gradient-to-tr from-cyan-900 via-purple-950 to-indigo-900 border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105 transition-all duration-500 flex flex-col justify-end p-4 z-10\">\n      <span class=\"text-xs font-mono text-purple-200 font-bold\">★ #02 Cyberpunk</span>\n    </div>\n    <div class=\"w-40 h-56 rounded-2xl bg-gradient-to-tr from-blue-900 to-[#0f172a] border border-blue-500/30 shadow-2xl transform rotate-y-25 scale-90 opacity-60 transition-all duration-500 flex flex-col justify-end p-4\">\n      <span class=\"text-xs font-mono text-blue-300\">#03 Cosmos</span>\n    </div>\n  </div>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nconst cards = [\n  { id: 1, title: 'Aurora Mesh', tag: '01 / 05', color: 'from-purple-900 via-indigo-950 to-slate-950' },\n  { id: 2, title: 'Neon Cyberpunk', tag: '02 / 05', color: 'from-cyan-900 via-purple-950 to-slate-950' },\n  { id: 3, title: 'Cosmic Singularity', tag: '03 / 05', color: 'from-blue-900 via-teal-950 to-slate-950' },\n  { id: 4, title: 'Quantum Horizon', tag: '04 / 05', color: 'from-pink-900 via-purple-950 to-slate-950' }\n];\n\nexport default function CoverflowGallery() {\n  const [activeIdx, setActiveIdx] = useState(1);\n\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#0c0c0e] rounded-2xl flex flex-col items-center justify-center p-6 overflow-hidden border border-white/10 shadow-2xl\">\n      <div className=\"flex items-center justify-center gap-3 w-full max-w-lg\" style={{ perspective: '1200px' }}>\n        {cards.map((card, idx) => {\n          const isCenter = idx === activeIdx;\n          const isLeft = idx < activeIdx;\n          return (\n            <div\n              key={card.id}\n              onClick={() => setActiveIdx(idx)}\n              className={\n                'cursor-pointer rounded-2xl p-4 flex flex-col justify-end transition-all duration-500 border ' +\n                (isCenter\n                  ? 'w-44 h-60 bg-gradient-to-br ' + card.color + ' border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] z-20'\n                  : 'w-32 h-48 bg-gradient-to-br ' + card.color + ' border-white/10 opacity-50 hover:opacity-80 z-10')\n              }\n              style={{\n                transform: isCenter\n                  ? 'perspective(900px) rotateY(0deg) scale(1.05)'\n                  : 'perspective(900px) rotateY(' + (isLeft ? '22deg' : '-22deg') + ') scale(0.92)'\n              }}\n            >\n              <span className=\"text-[10px] font-mono text-purple-300 font-bold\">{card.tag}</span>\n              <h4 className=\"text-sm font-bold text-white tracking-tight\">{card.title}</h4>\n            </div>\n          );\n        })}\n      </div>\n\n      <div className=\"flex items-center gap-2 mt-4\">\n        {cards.map((_, i) => (\n          <button\n            key={i}\n            onClick={() => setActiveIdx(i)}\n            className={\n              'w-2 h-2 rounded-full transition-all ' +\n              (i === activeIdx ? 'bg-purple-500 w-6' : 'bg-white/20')\n            }\n          />\n        ))}\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Gallery",
    "Coverflow",
    "3D",
    "Carousel",
    "Perspective",
    "Card"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 9800,
    "downloads": 2700,
    "likes": 1890,
    "bookmarks": 940,
    "rating": 4.9,
    "commentsCount": 51
  },
  "license": "MIT",
  "version": "1.2.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-08-03T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;