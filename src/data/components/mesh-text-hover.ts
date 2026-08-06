import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "mesh-text-hover",
  "title": "Mesh Gradient Animated Text Glow",
  "description": "A vibrant multi-color animated mesh gradient background masked over bold typography with aura glow effects on cursor hover.",
  "category": "Text Animations",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[320px] bg-[#0a0a0c] rounded-2xl flex items-center justify-center p-8 overflow-hidden border border-white/10\">\n  <h1 class=\"text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 animate-pulse text-center\">\n    FUTURE UI\n  </h1>\n</div>",
    "tsx": "import React from 'react';\n\nexport default function MeshTextHover() {\n  return (\n    <div className=\"relative w-full h-[320px] bg-[#09090b] rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden border border-purple-500/20 shadow-2xl group\">\n      <div className=\"absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 opacity-40 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none\" />\n      <h2 className=\"text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400 transition-transform duration-500 group-hover:scale-105 select-none text-center\">\n        ORIGINKIT UI\n      </h2>\n      <p className=\"mt-3 text-xs font-mono text-slate-400 tracking-widest uppercase\">Hover for Neon Mesh Aura</p>\n    </div>\n  );\n}"
  },
  "tags": [
    "Text",
    "Mesh",
    "Gradient",
    "Hover",
    "Glow",
    "Typography"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 8200,
    "downloads": 2100,
    "likes": 1560,
    "bookmarks": 780,
    "rating": 4.9,
    "commentsCount": 39
  },
  "license": "MIT",
  "version": "1.1.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Beginner",
  "createdAt": "2026-08-01T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
