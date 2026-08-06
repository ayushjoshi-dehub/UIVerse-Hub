import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "dash-sparkline-widget",
  "title": "Minimal Metrics Sparkline Card",
  "description": "An interactive analytical telemetry card with SVG sparkline graph, trend badge, and hover data tooltip.",
  "category": "Dashboards",
  "framework": "React",
  "code": {
    "html": "<div class=\"p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-xs shadow-xl\">\n  <div class=\"flex justify-between items-start mb-4\">\n    <div>\n      <span class=\"text-xs text-slate-400 font-medium uppercase\">API Latency</span>\n      <h4 class=\"text-2xl font-bold text-white mt-1\">24ms</h4>\n    </div>\n    <span class=\"px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full\">Fast</span>\n  </div>\n  <svg class=\"w-full h-16 text-cyan-400 overflow-visible\" viewBox=\"0 0 100 30\">\n    <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" d=\"M0 25 Q15 10, 30 20 T60 5 T100 15\"></path>\n  </svg>\n</div>",
    "tsx": "import React, { useId } from 'react';\n\nexport default function SparklineWidget() {\n  const gradientId = 'sparkline-' + useId().replace(/:/g, '');\n\n  return (\n    <div className=\"p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-xs shadow-2xl relative group hover:border-slate-700 transition-all\">\n      <div className=\"flex justify-between items-start mb-4\">\n        <div>\n          <span className=\"text-xs text-slate-400 font-medium uppercase tracking-wider\">Avg Latency</span>\n          <h4 className=\"text-3xl font-extrabold text-white mt-1\">18.4 ms</h4>\n        </div>\n        <span className=\"px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full\">\n          ⚡ Optimal\n        </span>\n      </div>\n\n      <div className=\"relative pt-2\">\n        <svg className=\"w-full h-16 text-cyan-400 overflow-visible\" viewBox=\"0 0 100 30\">\n          <defs>\n            <linearGradient id={gradientId} x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stopColor=\"#22d3ee\" stopOpacity=\"0.4\" />\n              <stop offset=\"100%\" stopColor=\"#22d3ee\" stopOpacity=\"0\" />\n            </linearGradient>\n          </defs>\n          <path fill={'url(#' + gradientId + ')'} d=\"M0 25 Q 20 5, 40 18 T 80 8 T 100 15 L 100 30 L 0 30 Z\" />\n          <path fill=\"none\" stroke=\"#22d3ee\" strokeWidth=\"2.5\" strokeLinecap=\"round\" d=\"M0 25 Q 20 5, 40 18 T 80 8 T 100 15\" />\n        </svg>\n      </div>\n\n      <div className=\"flex justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-800\">\n        <span>00:00 UTC</span>\n        <span>Live Telemetry</span>\n      </div>\n    </div>\n  );\n}"
  },
  "tags": [
    "Dashboard",
    "Sparkline",
    "Chart",
    "Metrics",
    "Telemetry"
  ],
  "author": {
    "name": "Sarah Jenkins",
    "handle": "sarah_ui",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "bio": "Design System Engineer.",
    "isVerified": true
  },
  "stats": {
    "views": 3100,
    "downloads": 820,
    "likes": 410,
    "bookmarks": 180,
    "rating": 4.8,
    "commentsCount": 14
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
  "createdAt": "2026-07-19T10:00:00Z",
  "updatedAt": "2026-07-19T10:00:00Z"
};

export default component;