import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "loader-quantum-particle",
  "title": "Quantum Orbit Particle Spinner",
  "description": "An ethereal multi-ring loader spinner with glowing orbit particles, fluid rotation, and scale pulsation.",
  "category": "Loaders & Spinners",
  "framework": "CSS",
  "code": {
    "html": "<div class=\"flex items-center justify-center p-8\">\n  <div class=\"relative w-16 h-16 flex items-center justify-center\">\n    <div class=\"absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin\"></div>\n    <div class=\"absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-pink-500 animate-[spin_1.5s_linear_infinite_reverse]\"></div>\n    <div class=\"w-3 h-3 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-ping\"></div>\n  </div>\n</div>",
    "tsx": "import React from 'react';\n\nexport default function QuantumLoader() {\n  return (\n    <div className=\"flex flex-col items-center justify-center p-10 gap-4\">\n      <div className=\"relative w-16 h-16 flex items-center justify-center\">\n        <div className=\"absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin\" />\n        <div className=\"absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-pink-500 animate-[spin_1.5s_linear_infinite_reverse]\" />\n        <div className=\"w-3 h-3 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-ping\" />\n      </div>\n      <span className=\"text-xs font-medium tracking-widest text-slate-400 uppercase animate-pulse\">\n        Generating UI...\n      </span>\n    </div>\n  );\n}"
  },
  "tags": [
    "Loader",
    "Spinner",
    "Animation",
    "Quantum",
    "CSS"
  ],
  "author": {
    "name": "Yuki Tanaka",
    "handle": "yukitanaka",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "bio": "Creative coder & shader enthusiast.",
    "isVerified": true
  },
  "stats": {
    "views": 1950,
    "downloads": 510,
    "likes": 290,
    "bookmarks": 95,
    "rating": 4.7,
    "commentsCount": 9
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "tailwindcss"
  ],
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Beginner",
  "createdAt": "2026-07-22T14:00:00Z",
  "updatedAt": "2026-07-22T14:00:00Z"
};

export default component;
