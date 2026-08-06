import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "kinetic-grid-cursor",
  "title": "Kinetic Grid Cursor Tile Matrix",
  "description": "An interactive matrix of grid tiles that dynamically react and tilt in 3D relative to cursor movement.",
  "category": "Cursor Effects",
  "framework": "React",
  "code": {
    "html": "<div class=\"relative w-full h-[320px] bg-[#0a0a0c] rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 p-6\">\n  <div class=\"grid grid-cols-6 gap-2.5 w-full max-w-md\">\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n    <div class=\"h-12 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/30 hover:border-purple-500 transition-all duration-300\"></div>\n  </div>\n</div>",
    "tsx": "import React, { useRef } from 'react';\n\nexport default function KineticGrid() {\n  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    const maxDistance = 150;\n    tileRefs.current.forEach((tile) => {\n      if (!tile) return;\n      const rect = tile.getBoundingClientRect();\n      const tileCx = rect.left + rect.width / 2;\n      const tileCy = rect.top + rect.height / 2;\n      const dx = e.clientX - tileCx;\n      const dy = e.clientY - tileCy;\n      const distance = Math.sqrt(dx * dx + dy * dy);\n      const influence = Math.max(0, 1 - distance / maxDistance);\n\n      const rotateX = (-dy / rect.height) * 26 * influence;\n      const rotateY = (dx / rect.width) * 26 * influence;\n      const lift = influence * 10;\n\n      tile.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(' + lift + 'px)';\n      tile.style.borderColor = influence > 0.12 ? 'rgba(168, 85, 247, ' + (0.25 + influence * 0.55) + ')' : '';\n      tile.style.background = influence > 0.12 ? 'rgba(147, 51, 234, ' + (influence * 0.22) + ')' : '';\n    });\n  };\n\n  const handleMouseLeave = () => {\n    tileRefs.current.forEach((tile) => {\n      if (!tile) return;\n      tile.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';\n      tile.style.borderColor = '';\n      tile.style.background = '';\n    });\n  };\n\n  return (\n    <div\n      onMouseMove={handleMouseMove}\n      onMouseLeave={handleMouseLeave}\n      className=\"relative w-full h-[320px] bg-[#0a0a0c] rounded-2xl flex flex-col items-center justify-center p-6 overflow-hidden border border-white/10 shadow-2xl\"\n    >\n      <div className=\"grid grid-cols-6 gap-2 w-full max-w-sm\" style={{ transformStyle: 'preserve-3d' }}>\n        {Array.from({ length: 24 }).map((_, i) => (\n          <div\n            key={i}\n            ref={(el) => (tileRefs.current[i] = el)}\n            className=\"h-12 rounded-xl bg-white/[0.03] border border-white/10 transition-transform duration-150 ease-out flex items-center justify-center text-[10px] font-mono text-purple-400 select-none cursor-pointer will-change-transform\"\n          >\n            ✦\n          </div>\n        ))}\n      </div>\n      <span className=\"mt-4 text-[11px] font-mono text-slate-500\">Move cursor across matrix</span>\n    </div>\n  );\n}"
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