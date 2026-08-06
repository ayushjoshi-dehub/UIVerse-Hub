import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "anim-particle-wave",
  "title": "Text Scramble & Glitch Effect",
  "description": "A subtle futuristic text scrambling effect on hover that generates hacker style randomized letters before revealing true label.",
  "category": "Animations",
  "framework": "React",
  "code": {
    "html": "<div class=\"p-8 text-center bg-slate-950 rounded-2xl border border-slate-800\">\n  <span class=\"text-3xl font-mono font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent hover:tracking-ultra transition-all\">\n    [ UIVERSE HUB ]\n  </span>\n</div>",
    "tsx": "import React, { useState } from 'react';\n\nexport default function TextScramble() {\n  const targetText = \"SYSTEM_INITIALIZED\";\n  const chars = \"!@#$%^&*()_+-=[]{}|;:,.<>?\";\n  const [displayText, setDisplayText] = useState(targetText);\n\n  const handleHover = () => {\n    let iterations = 0;\n    const interval = setInterval(() => {\n      setDisplayText(\n        targetText\n          .split(\"\")\n          .map((char, index) => {\n            if (index < iterations) return targetText[index];\n            return chars[Math.floor(Math.random() * chars.length)];\n          })\n          .join(\"\")\n      );\n\n      if (iterations >= targetText.length) clearInterval(interval);\n      iterations += 1 / 3;\n    }, 30);\n  };\n\n  return (\n    <div className=\"p-8 text-center bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl\">\n      <p className=\"text-xs text-slate-500 uppercase tracking-widest mb-3\">Hover to Decrypt</p>\n      <span\n        onMouseEnter={handleHover}\n        className=\"text-2xl md:text-3xl font-mono font-bold tracking-widest text-cyan-400 cursor-pointer select-none hover:text-cyan-300 transition-colors\"\n      >\n        {displayText}\n      </span>\n    </div>\n  );\n}"
  },
  "tags": [
    "Animation",
    "Text",
    "Glitch",
    "Scramble",
    "React",
    "Font"
  ],
  "author": {
    "name": "Yuki Tanaka",
    "handle": "yukitanaka",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "bio": "Creative coder & shader enthusiast.",
    "isVerified": true
  },
  "stats": {
    "views": 2400,
    "downloads": 630,
    "likes": 310,
    "bookmarks": 125,
    "rating": 4.8,
    "commentsCount": 11
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
  "difficulty": "Beginner",
  "createdAt": "2026-07-27T08:00:00Z",
  "updatedAt": "2026-07-27T08:00:00Z"
};

export default component;
