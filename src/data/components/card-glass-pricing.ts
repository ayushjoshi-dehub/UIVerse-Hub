import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "card-glass-pricing",
  "title": "Glassmorphic 3D Pricing Card",
  "description": "A glowing backdrop price card with frosted glass texture, active plan toggle badge, features checklist, and animated CTA.",
  "category": "Pricing Tables",
  "framework": "React",
  "code": {
    "html": "<div class=\"w-full max-w-sm p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500\">\n  <div class=\"absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-500\"></div>\n  <div class=\"inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4\">\n    ★ Most Popular\n  </div>\n  <h3 class=\"text-2xl font-bold text-white mb-2\">Pro Developer</h3>\n  <p class=\"text-sm text-slate-400 mb-6\">Unlocks all AI UI features, unlimited component exports & team sync.</p>\n  \n  <div class=\"flex items-baseline gap-1 mb-6\">\n    <span class=\"text-4xl font-extrabold text-white\">$29</span>\n    <span class=\"text-slate-400 text-sm\">/ month</span>\n  </div>\n\n  <ul class=\"space-y-3 mb-8 text-sm text-slate-300\">\n    <li class=\"flex items-center gap-2.5\">\n      <svg class=\"w-5 h-5 text-cyan-400 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>\n      Unlimited Component Downloads\n    </li>\n    <li class=\"flex items-center gap-2.5\">\n      <svg class=\"w-5 h-5 text-cyan-400 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>\n      Full Gemini AI Code Generator\n    </li>\n    <li class=\"flex items-center gap-2.5\">\n      <svg class=\"w-5 h-5 text-cyan-400 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path></svg>\n      Framer Motion & Vue Exports\n    </li>\n  </ul>\n\n  <button class=\"w-full py-3.5 px-6 font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all duration-300\">\n    Get Started Now\n  </button>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function GlassPricingCard() {\n  const [isAnnual, setIsAnnual] = useState(false);\n\n  return (\n    <div className=\"w-full max-w-sm p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500\">\n      <div className=\"absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-500\" />\n      <div className=\"flex justify-between items-center mb-4\">\n        <span className=\"inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 rounded-full\">\n          ★ Pro Plan\n        </span>\n        <button \n          onClick={() => setIsAnnual(!isAnnual)}\n          className=\"text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer\"\n        >\n          {isAnnual ? 'Billed Annually' : 'Switch to Annual (-20%)'}\n        </button>\n      </div>\n\n      <h3 className=\"text-2xl font-bold text-white mb-2\">Pro Developer</h3>\n      <p className=\"text-sm text-slate-400 mb-6\">Unlocks all AI UI features, unlimited exports & team sync.</p>\n      \n      <div className=\"flex items-baseline gap-1 mb-6\">\n        <span className=\"text-4xl font-extrabold text-white\">{isAnnual ? '$23' : '$29'}</span>\n        <span className=\"text-slate-400 text-sm\">/ month</span>\n      </div>\n\n      <ul className=\"space-y-3 mb-8 text-sm text-slate-300\">\n        {['Unlimited Component Downloads', 'Gemini AI Assistant Integration', 'React & Vue Code Playground', 'Private Collections & Team Sync'].map((feature, i) => (\n          <li key={i} className=\"flex items-center gap-2.5\">\n            <svg className=\"w-5 h-5 text-cyan-400 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M5 13l4 4L19 7\" />\n            </svg>\n            {feature}\n          </li>\n        ))}\n      </ul>\n\n      <button className=\"w-full py-3.5 px-6 font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all duration-300 cursor-pointer\">\n        Get Started Now\n      </button>\n    </div>\n  );\n}"
  },
  "tags": [
    "Pricing",
    "Card",
    "Glassmorphism",
    "React",
    "Gradient"
  ],
  "author": {
    "name": "Marcus Chen",
    "handle": "marcus_ui",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "bio": "Frontend Architect specialized in Tailwind & Micro-interactions.",
    "isVerified": true,
    "github": "https://github.com/marcuschen"
  },
  "stats": {
    "views": 5120,
    "downloads": 1420,
    "likes": 680,
    "bookmarks": 310,
    "rating": 5,
    "commentsCount": 38
  },
  "license": "MIT",
  "version": "2.0.1",
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
  "createdAt": "2026-07-10T08:00:00Z",
  "updatedAt": "2026-07-30T11:20:00Z"
};

export default component;
