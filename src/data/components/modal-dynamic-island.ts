import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "modal-dynamic-island",
  "title": "Dynamic Island Command Dialog",
  "description": "An expandable top banner notification modal that morphs smoothly into a detailed interactive control panel.",
  "category": "Modals & Drawers",
  "framework": "React",
  "code": {
    "html": "<div class=\"flex items-center justify-center p-6\">\n  <div class=\"px-6 py-3 bg-slate-950 border border-slate-800 rounded-full text-white shadow-2xl flex items-center gap-4 hover:px-8 hover:py-4 transition-all duration-300 group cursor-pointer\">\n    <span class=\"w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping\"></span>\n    <span class=\"text-sm font-medium\">Deployment Successful</span>\n    <span class=\"text-xs text-slate-500 group-hover:text-cyan-400 transition-colors\">Click to inspect →</span>\n  </div>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function DynamicIslandModal() {\n  const [expanded, setExpanded] = useState(false);\n\n  return (\n    <div className=\"flex flex-col items-center justify-center p-6\">\n      <div \n        onClick={() => setExpanded(!expanded)}\n        className={\n          'bg-slate-950 border border-slate-800 text-white shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ' +\n          (expanded\n            ? 'w-full max-w-md p-6 rounded-3xl'\n            : 'px-5 py-2.5 rounded-full hover:border-slate-700')\n        }\n      >\n        {!expanded ? (\n          <div className=\"flex items-center gap-3\">\n            <span className=\"w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse\" />\n            <span className=\"text-xs font-semibold\">Gemini AI Service • Online</span>\n            <span className=\"text-[10px] text-slate-500 ml-auto\">Tap to open</span>\n          </div>\n        ) : (\n          <div className=\"space-y-4\">\n            <div className=\"flex justify-between items-center\">\n              <div className=\"flex items-center gap-2\">\n                <span className=\"w-3 h-3 bg-emerald-400 rounded-full\" />\n                <h4 className=\"font-semibold text-sm\">Engine Diagnostics</h4>\n              </div>\n              <button \n                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}\n                className=\"text-slate-500 hover:text-white text-xs px-2 py-1 bg-slate-900 rounded-lg\"\n              >\n                Close ✕\n              </button>\n            </div>\n            <p className=\"text-xs text-slate-400\">Response time: 18ms. Server load: 12%. All systems operational.</p>\n            <div className=\"flex gap-2\">\n              <button className=\"flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-xl transition-colors\">\n                View Logs\n              </button>\n              <button className=\"flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl transition-colors\">\n                Run Test\n              </button>\n            </div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Modal",
    "Dynamic Island",
    "Notification",
    "Dialog",
    "React"
  ],
  "author": {
    "name": "Marcus Chen",
    "handle": "marcus_ui",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "bio": "Frontend Architect specialized in Tailwind.",
    "isVerified": true
  },
  "stats": {
    "views": 3800,
    "downloads": 980,
    "likes": 490,
    "bookmarks": 210,
    "rating": 4.9,
    "commentsCount": 19
  },
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": [
    "react",
    "tailwindcss"
  ],
  "responsive": true,
  "darkSupport": true,
  "accessibilityReady": true,
  "difficulty": "Intermediate",
  "createdAt": "2026-07-21T11:00:00Z",
  "updatedAt": "2026-07-21T11:00:00Z"
};

export default component;
