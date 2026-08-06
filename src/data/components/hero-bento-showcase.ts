import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "hero-bento-showcase",
  "title": "Interactive Bento Grid Hero Section",
  "description": "A responsive Bento Grid layout displaying metric badges, live sparklines, tech stack pills, and interactive preview cards.",
  "category": "Hero Sections",
  "framework": "React",
  "code": {
    "html": "<div class=\"w-full max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4\">\n  <div class=\"md:col-span-2 p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden group\">\n    <div class=\"absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl\"></div>\n    <span class=\"px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full\">New Release</span>\n    <h2 class=\"text-3xl font-extrabold text-white mt-4 mb-3\">Build Faster with 500+ Curated UI Blocks</h2>\n    <p class=\"text-slate-400 text-sm max-w-md\">Copy production-ready Tailwind CSS and React code in seconds. Fully responsive and styled for modern apps.</p>\n  </div>\n  <div class=\"p-6 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col justify-between\">\n    <div class=\"text-xs text-slate-400 uppercase tracking-wider font-semibold\">Total Downloads</div>\n    <div class=\"text-4xl font-extrabold text-cyan-400 my-2\">1,248,900+</div>\n    <div class=\"text-xs text-emerald-400 font-medium\">↑ +34% this month</div>\n  </div>\n</div>",
    "tsx": "import React from 'react';\n\nexport default function BentoHeroSection() {\n  return (\n    <div className=\"w-full max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4\">\n      {/* Main Feature */}\n      <div className=\"md:col-span-2 p-8 bg-slate-900/90 border border-slate-800 rounded-3xl relative overflow-hidden group hover:border-slate-700 transition-all\">\n        <div className=\"absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl\" />\n        <span className=\"px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full\">\n          AI-Powered Component Hub\n        </span>\n        <h2 className=\"text-3xl font-extrabold text-white mt-4 mb-3 leading-tight\">\n          Craft Production UI with Instant Copy & AI Refactoring\n        </h2>\n        <p className=\"text-slate-400 text-sm max-w-md leading-relaxed\">\n          Access handcrafted Tailwind, React, Vue, and Framer Motion components with built-in live playground and Gemini generation.\n        </p>\n      </div>\n\n      {/* Metric 1 */}\n      <div className=\"p-6 bg-slate-900/90 border border-slate-800 rounded-3xl flex flex-col justify-between hover:border-slate-700 transition-all\">\n        <div className=\"text-xs text-slate-400 uppercase tracking-wider font-semibold\">Community Downloads</div>\n        <div className=\"text-4xl font-extrabold text-cyan-400 my-2\">1,248,900+</div>\n        <div className=\"text-xs text-emerald-400 font-medium flex items-center gap-1\">\n          <span>↑ +34% growth</span>\n          <span className=\"text-slate-500\">• 100% Open Source</span>\n        </div>\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Hero",
    "Bento",
    "Grid",
    "Dashboard",
    "React"
  ],
  "author": {
    "name": "Elena Rostova",
    "handle": "elenadesign",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "bio": "UI Engineer & Creative Technologist.",
    "isVerified": true
  },
  "stats": {
    "views": 6200,
    "downloads": 1890,
    "likes": 920,
    "bookmarks": 480,
    "rating": 5,
    "commentsCount": 42
  },
  "license": "MIT",
  "version": "1.3.0",
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
  "createdAt": "2026-07-25T16:00:00Z",
  "updatedAt": "2026-08-01T10:00:00Z"
};

export default component;
