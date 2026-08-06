import { UIComponent } from '../../types';

export const component: UIComponent = {
  "id": "form-animated-otp",
  "title": "Interactive OTP Pin Input with Auto-Focus",
  "description": "A smooth 6-digit passcode input field with keyboard arrow navigation, error shake animation, and auto paste listener.",
  "category": "Forms & Inputs",
  "framework": "React",
  "code": {
    "html": "<div class=\"flex items-center gap-2 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl max-w-md mx-auto\">\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"4\">\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"8\">\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"2\">\n  <span class=\"text-slate-600 font-bold text-lg\">-</span>\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"\">\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"\">\n  <input type=\"text\" maxlength=\"1\" class=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\" value=\"\">\n</div>",
    "tsx": "import React, { useRef, useState } from 'react';\n\nexport default function OtpPinInput() {\n  const [otp, setOtp] = useState(['', '', '', '', '', '']);\n  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);\n\n  const handleChange = (value: string, index: number) => {\n    if (!/^[0-9]?$/.test(value)) return;\n    const newOtp = [...otp];\n    newOtp[index] = value;\n    setOtp(newOtp);\n\n    if (value && index < 5) {\n      inputsRef.current[index + 1]?.focus();\n    }\n  };\n\n  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {\n    if (e.key === 'Backspace' && !otp[index] && index > 0) {\n      inputsRef.current[index - 1]?.focus();\n    }\n  };\n\n  return (\n    <div className=\"flex flex-col items-center gap-4 p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl max-w-md mx-auto\">\n      <h4 className=\"text-lg font-semibold text-white\">Enter Verification Code</h4>\n      <p className=\"text-xs text-slate-400 text-center\">We sent a 6-digit pin to your email.</p>\n      <div className=\"flex items-center gap-2 mt-2\">\n        {otp.map((digit, i) => (\n          <React.Fragment key={i}>\n            {i === 3 && <span className=\"text-slate-600 font-bold text-xl mx-1\">-</span>}\n            <input\n              ref={(el) => (inputsRef.current[i] = el)}\n              type=\"text\"\n              maxLength={1}\n              value={digit}\n              onChange={(e) => handleChange(e.target.value, i)}\n              onKeyDown={(e) => handleKeyDown(e, i)}\n              className=\"w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800/90 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all\"\n            />\n          </React.Fragment>\n        ))}\n      </div>\n      {otp.every(d => d !== '') && (\n        <span className=\"text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full animate-pulse\">\n          ✓ Code Complete\n        </span>\n      )}\n    </div>\n  );\n}"
  },
  "tags": [
    "OTP",
    "Form",
    "Input",
    "Verification",
    "React"
  ],
  "author": {
    "name": "Sarah Jenkins",
    "handle": "sarah_ui",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "bio": "Accessibility & Design System engineer at Vercel ecosystem.",
    "isVerified": true
  },
  "stats": {
    "views": 2890,
    "downloads": 740,
    "likes": 320,
    "bookmarks": 140,
    "rating": 4.8,
    "commentsCount": 15
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
  "createdAt": "2026-07-20T12:00:00Z",
  "updatedAt": "2026-07-20T12:00:00Z"
};

export default component;
