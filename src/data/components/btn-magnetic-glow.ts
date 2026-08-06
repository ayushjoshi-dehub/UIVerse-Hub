import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "btn-magnetic-glow",
  "title": "Magnetic Physics Glow Action Button",
  "description": "An interactive CTA button that magnetically responds to cursor hover position with dynamic glow backdrop.",
  "category": "Buttons",
  "framework": "React",
  "code": {
    "html": "<div class=\"p-8 flex justify-center\">\n  <button class=\"relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300\">\n    Magnetic Glow Action\n  </button>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function MagneticGlowButton() {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {\n    const rect = e.currentTarget.getBoundingClientRect();\n    const x = e.clientX - rect.left - rect.width / 2;\n    const y = e.clientY - rect.top - rect.height / 2;\n    setPos({ x: x * 0.25, y: y * 0.25 });\n  };\n\n  const handleMouseLeave = () => setPos({ x: 0, y: 0 });\n\n  return (\n    <div className=\"p-8 flex flex-col items-center justify-center gap-3\">\n      <button\n        onMouseMove={handleMouseMove}\n        onMouseLeave={handleMouseLeave}\n        style={{ transform: 'translate(' + pos.x + 'px, ' + pos.y + 'px)' }}\n        className=\"relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full font-extrabold text-white text-sm tracking-wide shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:shadow-[0_0_50px_rgba(99,102,241,0.9)] transition-transform duration-150 cursor-pointer active:scale-95 border border-white/20\"\n      >\n        <span className=\"flex items-center gap-2\">\n          <span>⚡ Launch OriginKit UI</span>\n          <span>→</span>\n        </span>\n      </button>\n      <span className=\"text-[11px] font-mono text-slate-500 uppercase tracking-widest\">\n        Hover mouse to trigger magnetic attraction\n      </span>\n    </div>\n  );\n}"
  },
  "tags": [
    "Button",
    "Magnetic",
    "Physics",
    "Glow",
    "Hover",
    "OriginKit"
  ],
  "author": {
    "name": "Originkit Design",
    "handle": "originkit",
    "avatar": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
    "bio": "Creators of free animated component library.",
    "isVerified": true
  },
  "stats": {
    "views": 5310,
    "downloads": 1420,
    "likes": 890,
    "bookmarks": 430,
    "rating": 4.9,
    "commentsCount": 27
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "react",
    "tailwindcss"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-08-03T11:00:00Z",
  "updatedAt": "2026-08-04T15:00:00Z"
};

export default component;
