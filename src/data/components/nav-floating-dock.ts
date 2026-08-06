import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "nav-floating-dock",
  "title": "Floating Blur Dock Navigation Bar",
  "description": "A macOS style floating dock header with glassmorphism backdrop blur, active icon indicator, and tooltip hover effects.",
  "category": "Navigation",
  "framework": "Framer Motion",
  "code": {
    "html": "<nav class=\"fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 rounded-full shadow-2xl z-50\">\n  <a href=\"#\" class=\"p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all group relative\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"></path></svg>\n    <span class=\"absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none\">Home</span>\n  </a>\n  <a href=\"#\" class=\"p-3 text-cyan-400 bg-slate-800/80 rounded-full transition-all group relative shadow-inner\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"></path></svg>\n    <span class=\"absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none\">Components</span>\n  </a>\n  <a href=\"#\" class=\"p-3 text-slate-400 hover:text-purple-400 hover:bg-slate-800/60 rounded-full transition-all group relative\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\"></path></svg>\n    <span class=\"absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none\">AI Studio</span>\n  </a>\n  <a href=\"#\" class=\"p-3 text-slate-400 hover:text-pink-400 hover:bg-slate-800/60 rounded-full transition-all group relative\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z\"></path></svg>\n    <span class=\"absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none\">Bookmarks</span>\n  </a>\n</nav>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function FloatingDockNav() {\n  const [active, setActive] = useState('components');\n\n  const items = [\n    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },\n    { id: 'components', label: 'Explore', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },\n    { id: 'ai', label: 'AI Generator', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },\n    { id: 'bookmarks', label: 'Saved', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' },\n  ];\n\n  return (\n    <div className=\"flex items-center justify-center p-6\">\n      <nav className=\"flex items-center gap-3 px-4 py-3 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-full shadow-2xl\">\n        {items.map((item) => {\n          const isActive = active === item.id;\n          return (\n            <button\n              key={item.id}\n              onClick={() => setActive(item.id)}\n              className={\n                'p-3.5 rounded-full transition-all duration-300 relative group cursor-pointer ' +\n                (isActive \n                  ? 'text-cyan-400 bg-slate-800 shadow-inner scale-105' \n                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50')\n              }\n            >\n              <svg className=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d={item.icon} />\n              </svg>\n              {isActive && (\n                <span className=\"absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]\" />\n              )}\n              <span className=\"absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-3 py-1 bg-slate-950 text-white text-xs font-medium rounded-lg shadow-xl transition-opacity pointer-events-none whitespace-nowrap border border-slate-800\">\n                {item.label}\n              </span>\n            </button>\n          );\n        })}\n      </nav>\n    </div>\n  );\n}"
  },
  "tags": [
    "Navigation",
    "Dock",
    "Floating",
    "Blur",
    "Navbar"
  ],
  "author": {
    "name": "Alex Rivera",
    "handle": "arivera",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "bio": "Design Engineer creating organic animations.",
    "isVerified": false
  },
  "stats": {
    "views": 4100,
    "downloads": 1100,
    "likes": 540,
    "bookmarks": 290,
    "rating": 4.9,
    "commentsCount": 22
  },
  "license": "MIT",
  "version": "1.1.0",
  "dependencies": [
    "motion",
    "react",
    "tailwindcss"
  ],
  "isFeatured": true,
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-07-18T09:00:00Z",
  "updatedAt": "2026-07-22T15:00:00Z"
};

export default component;
