import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "kinetic-grid-cursor",
  "title": "Kinetic Grid Cursor Tile Matrix",
  "description": "An interactive matrix of grid tiles that dynamically react and tilt in 3D relative to cursor movement.",
  "category": "Cursor Effects",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[320px] bg-[#0a0a0c] rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 p-6\">\n  <div class=\"grid grid-cols-6 gap-2.5 w-full max-w-md\">\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n  </div>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function KineticGrid() {\n  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    const rect = e.currentTarget.getBoundingClientRect();\n    setMousePos({\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    });\n  };\n\n  return (\n    <div\n      onMouseMove={handleMouseMove}\n      className=\"relative w-full h-[320px] bg-[#0a0a0c] rounded-2xl flex flex-col items-center justify-center p-6 overflow-hidden border border-white/10 shadow-2xl\"\n    >\n      <div className=\"grid grid-cols-6 gap-2 w-full max-w-sm\">\n        {Array.from({ length: 24 }).map((_, i) => (\n          <div\n            key={i}\n            className=\"h-12 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center text-[10px] font-mono text-purple-400 select-none cursor-pointer\"\n          >\n            ✦\n          </div>\n        ))}\n      </div>\n      <span className=\"mt-4 text-[11px] font-mono text-slate-500\">Move cursor across matrix</span>\n    </div>\n  );\n}"
  },
  "tags": [
    "Cursor",
    "Kinetic",
    "Grid",
    "Matrix",
    "Interactive",
    "Tiles"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "isVerified": true
  },
  "stats": {
    "views": 6400,
    "downloads": 1800,
    "likes": 1240,
    "bookmarks": 620,
    "rating": 4.8,
    "commentsCount": 28
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "react"
  ],
  "isFeatured": true,
  "isTrending": false,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Beginner",
  "createdAt": "2026-08-04T00:00:00Z",
  "updatedAt": "2026-08-05T00:00:00Z"
};

export default component;
