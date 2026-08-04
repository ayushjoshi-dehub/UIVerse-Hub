import { UIComponent } from '../types';

export const SEED_COMPONENTS: UIComponent[] = [
  {
    id: 'btn-neon-glow',
    title: 'Cyberpunk Neon Glowing Button',
    description: 'An interactive 3D button with hovering neon aura, animated border beam, and tactile scale feedback on tap.',
    category: 'Buttons',
    framework: 'Tailwind CSS',
    code: {
      html: `<button class="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium tracking-wide text-white transition-all duration-300 bg-slate-900 rounded-xl group hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95 border border-purple-500/30 overflow-hidden">
  <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
  <span class="absolute inset-0.5 bg-slate-950 rounded-[10px] z-10 transition-colors duration-300 group-hover:bg-slate-900"></span>
  <span class="relative z-20 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
    <svg class="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    Launch Engine
  </span>
</button>`,
      tsx: `import React from 'react';

export default function CyberNeonButton() {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium tracking-wide text-white transition-all duration-300 bg-slate-900 rounded-xl group hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95 border border-purple-500/30 overflow-hidden cursor-pointer">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <span className="absolute inset-0.5 bg-slate-950 rounded-[10px] z-10 transition-colors duration-300 group-hover:bg-slate-900" />
      <span className="relative z-20 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
        <svg className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Launch Engine
      </span>
    </button>
  );
}`
    },
    tags: ['Button', 'Neon', 'Glow', 'Cyberpunk', 'Tailwind', 'Hover'],
    author: {
      name: 'Elena Rostova',
      handle: 'elenadesign',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'UI Engineer & Creative Technologist crafting futuristic design systems.',
      isVerified: true,
      github: 'https://github.com/elena-ui'
    },
    stats: {
      views: 3420,
      downloads: 890,
      likes: 412,
      bookmarks: 184,
      rating: 4.9,
      commentsCount: 24
    },
    license: 'MIT',
    version: '1.2.0',
    dependencies: ['tailwindcss'],
    isFeatured: true,
    isTrending: true,
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Beginner',
    createdAt: '2026-07-15T10:00:00Z',
    updatedAt: '2026-07-28T14:30:00Z'
  },

  {
    id: 'card-glass-pricing',
    title: 'Glassmorphic 3D Pricing Card',
    description: 'A glowing backdrop price card with frosted glass texture, active plan toggle badge, features checklist, and animated CTA.',
    category: 'Pricing Tables',
    framework: 'React',
    code: {
      html: `<div class="w-full max-w-sm p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
  <div class="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-500"></div>
  <div class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
    ★ Most Popular
  </div>
  <h3 class="text-2xl font-bold text-white mb-2">Pro Developer</h3>
  <p class="text-sm text-slate-400 mb-6">Unlocks all AI UI features, unlimited component exports & team sync.</p>
  
  <div class="flex items-baseline gap-1 mb-6">
    <span class="text-4xl font-extrabold text-white">$29</span>
    <span class="text-slate-400 text-sm">/ month</span>
  </div>

  <ul class="space-y-3 mb-8 text-sm text-slate-300">
    <li class="flex items-center gap-2.5">
      <svg class="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      Unlimited Component Downloads
    </li>
    <li class="flex items-center gap-2.5">
      <svg class="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      Full Gemini AI Code Generator
    </li>
    <li class="flex items-center gap-2.5">
      <svg class="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      Framer Motion & Vue Exports
    </li>
  </ul>

  <button class="w-full py-3.5 px-6 font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all duration-300">
    Get Started Now
  </button>
</div>`,
      tsx: `import React, { useState } from 'react';

export default function GlassPricingCard() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full max-w-sm p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-500" />
      <div className="flex justify-between items-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 rounded-full">
          ★ Pro Plan
        </span>
        <button 
          onClick={() => setIsAnnual(!isAnnual)}
          className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
        >
          {isAnnual ? 'Billed Annually' : 'Switch to Annual (-20%)'}
        </button>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">Pro Developer</h3>
      <p className="text-sm text-slate-400 mb-6">Unlocks all AI UI features, unlimited exports & team sync.</p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-extrabold text-white">{isAnnual ? '$23' : '$29'}</span>
        <span className="text-slate-400 text-sm">/ month</span>
      </div>

      <ul className="space-y-3 mb-8 text-sm text-slate-300">
        {['Unlimited Component Downloads', 'Gemini AI Assistant Integration', 'React & Vue Code Playground', 'Private Collections & Team Sync'].map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-3.5 px-6 font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all duration-300 cursor-pointer">
        Get Started Now
      </button>
    </div>
  );
}`
    },
    tags: ['Pricing', 'Card', 'Glassmorphism', 'React', 'Gradient'],
    author: {
      name: 'Marcus Chen',
      handle: 'marcus_ui',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Frontend Architect specialized in Tailwind & Micro-interactions.',
      isVerified: true,
      github: 'https://github.com/marcuschen'
    },
    stats: {
      views: 5120,
      downloads: 1420,
      likes: 680,
      bookmarks: 310,
      rating: 5.0,
      commentsCount: 38
    },
    license: 'MIT',
    version: '2.0.1',
    dependencies: ['react', 'tailwindcss'],
    isFeatured: true,
    isTrending: true,
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Intermediate',
    createdAt: '2026-07-10T08:00:00Z',
    updatedAt: '2026-07-30T11:20:00Z'
  },

  {
    id: 'form-animated-otp',
    title: 'Interactive OTP Pin Input with Auto-Focus',
    description: 'A smooth 6-digit passcode input field with keyboard arrow navigation, error shake animation, and auto paste listener.',
    category: 'Forms & Inputs',
    framework: 'React',
    code: {
      html: `<div class="flex items-center gap-2 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl max-w-md mx-auto">
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="4">
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="8">
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="2">
  <span class="text-slate-600 font-bold text-lg">-</span>
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="">
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="">
  <input type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all" value="">
</div>`,
      tsx: `import React, { useRef, useState } from 'react';

export default function OtpPinInput() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl max-w-md mx-auto">
      <h4 className="text-lg font-semibold text-white">Enter Verification Code</h4>
      <p className="text-xs text-slate-400 text-center">We sent a 6-digit pin to your email.</p>
      <div className="flex items-center gap-2 mt-2">
        {otp.map((digit, i) => (
          <React.Fragment key={i}>
            {i === 3 && <span className="text-slate-600 font-bold text-xl mx-1">-</span>}
            <input
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-14 text-center text-2xl font-bold text-white bg-slate-800/90 border border-slate-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all"
            />
          </React.Fragment>
        ))}
      </div>
      {otp.every(d => d !== '') && (
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full animate-pulse">
          ✓ Code Complete
        </span>
      )}
    </div>
  );
}`
    },
    tags: ['OTP', 'Form', 'Input', 'Verification', 'React'],
    author: {
      name: 'Sarah Jenkins',
      handle: 'sarah_ui',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      bio: 'Accessibility & Design System engineer at Vercel ecosystem.',
      isVerified: true
    },
    stats: {
      views: 2890,
      downloads: 740,
      likes: 320,
      bookmarks: 140,
      rating: 4.8,
      commentsCount: 15
    },
    license: 'MIT',
    version: '1.0.0',
    dependencies: ['react', 'tailwindcss'],
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Beginner',
    createdAt: '2026-07-20T12:00:00Z',
    updatedAt: '2026-07-20T12:00:00Z'
  },

  {
    id: 'nav-floating-dock',
    title: 'Floating Blur Dock Navigation Bar',
    description: 'A macOS style floating dock header with glassmorphism backdrop blur, active icon indicator, and tooltip hover effects.',
    category: 'Navigation',
    framework: 'Framer Motion',
    code: {
      html: `<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 rounded-full shadow-2xl z-50">
  <a href="#" class="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all group relative">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
    <span class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none">Home</span>
  </a>
  <a href="#" class="p-3 text-cyan-400 bg-slate-800/80 rounded-full transition-all group relative shadow-inner">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    <span class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none">Components</span>
  </a>
  <a href="#" class="p-3 text-slate-400 hover:text-purple-400 hover:bg-slate-800/60 rounded-full transition-all group relative">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    <span class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none">AI Studio</span>
  </a>
  <a href="#" class="p-3 text-slate-400 hover:text-pink-400 hover:bg-slate-800/60 rounded-full transition-all group relative">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
    <span class="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg transition-opacity pointer-events-none">Bookmarks</span>
  </a>
</nav>`,
      tsx: `import React, { useState } from 'react';

export default function FloatingDockNav() {
  const [active, setActive] = useState('components');

  const items = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'components', label: 'Explore', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'ai', label: 'AI Generator', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'bookmarks', label: 'Saved', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' },
  ];

  return (
    <div className="flex items-center justify-center p-6">
      <nav className="flex items-center gap-3 px-4 py-3 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-full shadow-2xl">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={\`p-3.5 rounded-full transition-all duration-300 relative group cursor-pointer \${
                isActive 
                  ? 'text-cyan-400 bg-slate-800 shadow-inner scale-105' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }\`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
              )}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-3 py-1 bg-slate-950 text-white text-xs font-medium rounded-lg shadow-xl transition-opacity pointer-events-none whitespace-nowrap border border-slate-800">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}`
    },
    tags: ['Navigation', 'Dock', 'Floating', 'Blur', 'Navbar'],
    author: {
      name: 'Alex Rivera',
      handle: 'arivera',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      bio: 'Design Engineer creating organic animations.',
      isVerified: false
    },
    stats: {
      views: 4100,
      downloads: 1100,
      likes: 540,
      bookmarks: 290,
      rating: 4.9,
      commentsCount: 22
    },
    license: 'MIT',
    version: '1.1.0',
    dependencies: ['motion', 'react', 'tailwindcss'],
    isFeatured: true,
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Intermediate',
    createdAt: '2026-07-18T09:00:00Z',
    updatedAt: '2026-07-22T15:00:00Z'
  },

  {
    id: 'loader-quantum-particle',
    title: 'Quantum Orbit Particle Spinner',
    description: 'An ethereal multi-ring loader spinner with glowing orbit particles, fluid rotation, and scale pulsation.',
    category: 'Loaders & Spinners',
    framework: 'CSS',
    code: {
      html: `<div class="flex items-center justify-center p-8">
  <div class="relative w-16 h-16 flex items-center justify-center">
    <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin"></div>
    <div class="absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-pink-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
    <div class="w-3 h-3 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-ping"></div>
  </div>
</div>`,
      tsx: `import React from 'react';

export default function QuantumLoader() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-500 animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-pink-500 animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="w-3 h-3 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-ping" />
      </div>
      <span className="text-xs font-medium tracking-widest text-slate-400 uppercase animate-pulse">
        Generating UI...
      </span>
    </div>
  );
}`
    },
    tags: ['Loader', 'Spinner', 'Animation', 'Quantum', 'CSS'],
    author: {
      name: 'Yuki Tanaka',
      handle: 'yukitanaka',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      bio: 'Creative coder & shader enthusiast.',
      isVerified: true
    },
    stats: {
      views: 1950,
      downloads: 510,
      likes: 290,
      bookmarks: 95,
      rating: 4.7,
      commentsCount: 9
    },
    license: 'MIT',
    version: '1.0.0',
    dependencies: ['tailwindcss'],
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Beginner',
    createdAt: '2026-07-22T14:00:00Z',
    updatedAt: '2026-07-22T14:00:00Z'
  },

  {
    id: 'hero-bento-showcase',
    title: 'Interactive Bento Grid Hero Section',
    description: 'A responsive Bento Grid layout displaying metric badges, live sparklines, tech stack pills, and interactive preview cards.',
    category: 'Hero Sections',
    framework: 'React',
    code: {
      html: `<div class="w-full max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="md:col-span-2 p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden group">
    <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    <span class="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">New Release</span>
    <h2 class="text-3xl font-extrabold text-white mt-4 mb-3">Build Faster with 500+ Curated UI Blocks</h2>
    <p class="text-slate-400 text-sm max-w-md">Copy production-ready Tailwind CSS and React code in seconds. Fully responsive and styled for modern apps.</p>
  </div>
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col justify-between">
    <div class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Downloads</div>
    <div class="text-4xl font-extrabold text-cyan-400 my-2">1,248,900+</div>
    <div class="text-xs text-emerald-400 font-medium">↑ +34% this month</div>
  </div>
</div>`,
      tsx: `import React from 'react';

export default function BentoHeroSection() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Feature */}
      <div className="md:col-span-2 p-8 bg-slate-900/90 border border-slate-800 rounded-3xl relative overflow-hidden group hover:border-slate-700 transition-all">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
          AI-Powered Component Hub
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-4 mb-3 leading-tight">
          Craft Production UI with Instant Copy & AI Refactoring
        </h2>
        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
          Access handcrafted Tailwind, React, Vue, and Framer Motion components with built-in live playground and Gemini generation.
        </p>
      </div>

      {/* Metric 1 */}
      <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl flex flex-col justify-between hover:border-slate-700 transition-all">
        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Community Downloads</div>
        <div className="text-4xl font-extrabold text-cyan-400 my-2">1,248,900+</div>
        <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
          <span>↑ +34% growth</span>
          <span className="text-slate-500">• 100% Open Source</span>
        </div>
      </div>
    </div>
  );
}`
    },
    tags: ['Hero', 'Bento', 'Grid', 'Dashboard', 'React'],
    author: {
      name: 'Elena Rostova',
      handle: 'elenadesign',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'UI Engineer & Creative Technologist.',
      isVerified: true
    },
    stats: {
      views: 6200,
      downloads: 1890,
      likes: 920,
      bookmarks: 480,
      rating: 5.0,
      commentsCount: 42
    },
    license: 'MIT',
    version: '1.3.0',
    dependencies: ['react', 'tailwindcss'],
    isFeatured: true,
    isTrending: true,
    isNew: true,
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Intermediate',
    createdAt: '2026-07-25T16:00:00Z',
    updatedAt: '2026-08-01T10:00:00Z'
  },

  {
    id: 'modal-dynamic-island',
    title: 'Dynamic Island Command Dialog',
    description: 'An expandable top banner notification modal that morphs smoothly into a detailed interactive control panel.',
    category: 'Modals & Drawers',
    framework: 'React',
    code: {
      html: `<div class="flex items-center justify-center p-6">
  <div class="px-6 py-3 bg-slate-950 border border-slate-800 rounded-full text-white shadow-2xl flex items-center gap-4 hover:px-8 hover:py-4 transition-all duration-300 group cursor-pointer">
    <span class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
    <span class="text-sm font-medium">Deployment Successful</span>
    <span class="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">Click to inspect →</span>
  </div>
</div>`,
      tsx: `import React, { useState } from 'react';

export default function DynamicIslandModal() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div 
        onClick={() => setExpanded(!expanded)}
        className={\`bg-slate-950 border border-slate-800 text-white shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden \${
          expanded 
            ? 'w-full max-w-md p-6 rounded-3xl' 
            : 'px-5 py-2.5 rounded-full hover:border-slate-700'
        }\`}
      >
        {!expanded ? (
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold">Gemini AI Service • Online</span>
            <span className="text-[10px] text-slate-500 ml-auto">Tap to open</span>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-400 rounded-full" />
                <h4 className="font-semibold text-sm">Engine Diagnostics</h4>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                className="text-slate-500 hover:text-white text-xs px-2 py-1 bg-slate-900 rounded-lg"
              >
                Close ✕
              </button>
            </div>
            <p className="text-xs text-slate-400">Response time: 18ms. Server load: 12%. All systems operational.</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-xl transition-colors">
                View Logs
              </button>
              <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl transition-colors">
                Run Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`
    },
    tags: ['Modal', 'Dynamic Island', 'Notification', 'Dialog', 'React'],
    author: {
      name: 'Marcus Chen',
      handle: 'marcus_ui',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Frontend Architect specialized in Tailwind.',
      isVerified: true
    },
    stats: {
      views: 3800,
      downloads: 980,
      likes: 490,
      bookmarks: 210,
      rating: 4.9,
      commentsCount: 19
    },
    license: 'MIT',
    version: '1.0.0',
    dependencies: ['react', 'tailwindcss'],
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Intermediate',
    createdAt: '2026-07-21T11:00:00Z',
    updatedAt: '2026-07-21T11:00:00Z'
  },

  {
    id: 'anim-particle-wave',
    title: 'Text Scramble & Glitch Effect',
    description: 'A subtle futuristic text scrambling effect on hover that generates hacker style randomized letters before revealing true label.',
    category: 'Animations',
    framework: 'React',
    code: {
      html: `<div class="p-8 text-center bg-slate-950 rounded-2xl border border-slate-800">
  <span class="text-3xl font-mono font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent hover:tracking-ultra transition-all">
    [ UIVERSE HUB ]
  </span>
</div>`,
      tsx: `import React, { useState } from 'react';

export default function TextScramble() {
  const targetText = "SYSTEM_INITIALIZED";
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const [displayText, setDisplayText] = useState(targetText);

  const handleHover = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (index < iterations) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= targetText.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div className="p-8 text-center bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl">
      <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Hover to Decrypt</p>
      <span
        onMouseEnter={handleHover}
        className="text-2xl md:text-3xl font-mono font-bold tracking-widest text-cyan-400 cursor-pointer select-none hover:text-cyan-300 transition-colors"
      >
        {displayText}
      </span>
    </div>
  );
}`
    },
    tags: ['Animation', 'Text', 'Glitch', 'Scramble', 'React', 'Font'],
    author: {
      name: 'Yuki Tanaka',
      handle: 'yukitanaka',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      bio: 'Creative coder & shader enthusiast.',
      isVerified: true
    },
    stats: {
      views: 2400,
      downloads: 630,
      likes: 310,
      bookmarks: 125,
      rating: 4.8,
      commentsCount: 11
    },
    license: 'MIT',
    version: '1.0.0',
    dependencies: ['react', 'tailwindcss'],
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Beginner',
    createdAt: '2026-07-27T08:00:00Z',
    updatedAt: '2026-07-27T08:00:00Z'
  },

  {
    id: 'dash-sparkline-widget',
    title: 'Minimal Metrics Sparkline Card',
    description: 'An interactive analytical telemetry card with SVG sparkline graph, trend badge, and hover data tooltip.',
    category: 'Dashboards',
    framework: 'React',
    code: {
      html: `<div class="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-xs shadow-xl">
  <div class="flex justify-between items-start mb-4">
    <div>
      <span class="text-xs text-slate-400 font-medium uppercase">API Latency</span>
      <h4 class="text-2xl font-bold text-white mt-1">24ms</h4>
    </div>
    <span class="px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full">Fast</span>
  </div>
  <svg class="w-full h-16 text-cyan-400 overflow-visible" viewBox="0 0 100 30">
    <path fill="none" stroke="currentColor" stroke-width="2.5" d="M0 25 Q15 10, 30 20 T60 5 T100 15"></path>
  </svg>
</div>`,
      tsx: `import React from 'react';

export default function SparklineWidget() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-xs shadow-2xl relative group hover:border-slate-700 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Avg Latency</span>
          <h4 className="text-3xl font-extrabold text-white mt-1">18.4 ms</h4>
        </div>
        <span className="px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          ⚡ Optimal
        </span>
      </div>

      <div className="relative pt-2">
        <svg className="w-full h-16 text-cyan-400 overflow-visible" viewBox="0 0 100 30">
          <defs>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#cyanGrad)" d="M0 25 Q 20 5, 40 18 T 80 8 T 100 15 L 100 30 L 0 30 Z" />
          <path fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" d="M0 25 Q 20 5, 40 18 T 80 8 T 100 15" />
        </svg>
      </div>

      <div className="flex justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-800">
        <span>00:00 UTC</span>
        <span>Live Telemetry</span>
      </div>
    </div>
  );
}`
    },
    tags: ['Dashboard', 'Sparkline', 'Chart', 'Metrics', 'Telemetry'],
    author: {
      name: 'Sarah Jenkins',
      handle: 'sarah_ui',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      bio: 'Design System Engineer.',
      isVerified: true
    },
    stats: {
      views: 3100,
      downloads: 820,
      likes: 410,
      bookmarks: 180,
      rating: 4.8,
      commentsCount: 14
    },
    license: 'MIT',
    version: '1.0.0',
    dependencies: ['react', 'tailwindcss'],
    responsive: true,
    darkSupport: true,
    accessibilityReady: true,
    difficulty: 'Intermediate',
    createdAt: '2026-07-19T10:00:00Z',
    updatedAt: '2026-07-19T10:00:00Z'
  }
];
