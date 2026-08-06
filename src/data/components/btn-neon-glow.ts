import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "btn-neon-glow",
  "title": "Cyberpunk Neon Glowing Button",
  "description": "An interactive 3D button with hovering neon aura, animated border beam, and tactile scale feedback on tap.",
  "category": "Buttons",
  "framework": "Tailwind CSS",
  "code": {
    "html": "<button class=\"relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium tracking-wide text-white transition-all duration-300 bg-slate-900 rounded-xl group hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95 border border-purple-500/30 overflow-hidden\">\n  <span class=\"absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm\"></span>\n  <span class=\"absolute inset-0.5 bg-slate-950 rounded-[10px] z-10 transition-colors duration-300 group-hover:bg-slate-900\"></span>\n  <span class=\"relative z-20 flex items-center gap-2 group-hover:text-purple-300 transition-colors\">\n    <svg class=\"w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\"></path>\n    </svg>\n    Launch Engine\n  </span>\n</button>",
    "tsx": "import React from 'react';\n\nexport default function CyberNeonButton() {\n  return (\n    <button className=\"relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium tracking-wide text-white transition-all duration-300 bg-slate-900 rounded-xl group hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95 border border-purple-500/30 overflow-hidden cursor-pointer\">\n      <span className=\"absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm\" />\n      <span className=\"absolute inset-0.5 bg-slate-950 rounded-[10px] z-10 transition-colors duration-300 group-hover:bg-slate-900\" />\n      <span className=\"relative z-20 flex items-center gap-2 group-hover:text-purple-300 transition-colors\">\n        <svg className=\"w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\" />\n        </svg>\n        Launch Engine\n      </span>\n    </button>\n  );\n}"
  },
  "tags": [
    "Button",
    "Neon",
    "Glow",
    "Cyberpunk",
    "Tailwind",
    "Hover"
  ],
  "author": {
    "name": "Elena Rostova",
    "handle": "elenadesign",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "bio": "UI Engineer & Creative Technologist crafting futuristic design systems.",
    "isVerified": true,
    "github": "https://github.com/elena-ui"
  },
  "stats": {
    "views": 3420,
    "downloads": 890,
    "likes": 412,
    "bookmarks": 184,
    "rating": 4.9,
    "commentsCount": 24
  },
  "license": "MIT",
  "version": "1.2.0",
  "dependencies": [
    "tailwindcss"
  ],
  "isFeatured": true,
  "isTrending": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Beginner",
  "createdAt": "2026-07-15T10:00:00Z",
  "updatedAt": "2026-07-28T14:30:00Z"
};

export default component;
