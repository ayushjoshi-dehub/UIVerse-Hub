import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "card-border-beam",
  "title": "Origin Shimmering Border Beam Card",
  "description": "A futuristic card component featuring an orbiting laser light beam traveling around the perimeter border.",
  "category": "Cards",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full max-w-sm p-6 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group\">\n  <div class=\"relative z-10\">\n    <div class=\"w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4\">\n      ⚡\n    </div>\n    <h3 class=\"text-xl font-bold text-white mb-2\">Border Beam Animation</h3>\n    <p class=\"text-slate-400 text-sm leading-relaxed\">\n      Continuous glowing light trail flowing smoothly around card borders.\n    </p>\n  </div>\n</div>",
    "tsx": "import React from 'react';\n\nexport default function BorderBeamCard() {\n  return (\n    <div className=\"relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl\">\n      {/* Rotating beam, clipped to a 1px ring via mask-composite exclude */}\n      <div\n        className=\"absolute inset-0 rounded-3xl overflow-hidden pointer-events-none\"\n        style={{\n          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',\n          WebkitMaskComposite: 'xor',\n          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',\n          maskComposite: 'exclude',\n          padding: 1\n        }}\n      >\n        <div className=\"absolute inset-[-150%] animate-spin [animation-duration:3s] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_260deg,#22d3ee_300deg,#a855f7_335deg,transparent_360deg)]\" />\n      </div>\n\n      <div className=\"relative z-10 p-6 bg-slate-950 border border-slate-800/60 rounded-3xl\">\n        <div className=\"w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xl mb-4 shadow-lg\">\n          ✦\n        </div>\n        <h3 className=\"text-xl font-extrabold text-white mb-2 tracking-tight\">Border Beam Effect</h3>\n        <p className=\"text-slate-400 text-sm leading-relaxed mb-4\">\n          A light trail continuously orbits the card perimeter, built from a spinning conic gradient clipped to a 1px ring.\n        </p>\n        <button className=\"px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-cyan-300 transition-colors\">\n          Explore Component →\n        </button>\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Card",
    "Border Beam",
    "Glow",
    "Shimmer",
    "OriginKit",
    "React"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "bio": "Creators of free animated component library.",
    "isVerified": true
  },
  "stats": {
    "views": 7420,
    "downloads": 2190,
    "likes": 1140,
    "bookmarks": 620,
    "rating": 5,
    "commentsCount": 38
  },
  "license": "MIT",
  "version": "1.2.0",
  "dependencies": [
    "react",
    "tailwindcss"
  ],
  "isFeatured": true,
  "isTrending": true,
  "isNew": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-08-02T10:00:00Z",
  "updatedAt": "2026-08-05T12:00:00Z"
};

export default component;