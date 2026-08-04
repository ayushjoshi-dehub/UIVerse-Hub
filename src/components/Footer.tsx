import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#22c55e', '#4ade80', '#86efac']
    });

    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-12 pb-8 px-4 lg:px-8 text-white/50 text-xs font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center font-black text-black text-sm">
              U
            </div>
            <span className="font-bold text-white text-base tracking-tighter uppercase font-sans">
              UIVerse<span className="text-green-500">Hub</span>
            </span>
          </div>
          <p className="text-white/60 leading-relaxed font-sans text-xs">
            The open component platform where creators upload, discover, preview, download, and bookmark reusable frontend UI resources.
          </p>
          <p className="text-green-400/80 text-[11px] font-mono">Powered by Google Gemini AI & React 19.</p>
        </div>

        {/* Frameworks Column */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-widest font-mono">Frameworks</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition-colors">React TSX Components</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Tailwind CSS v4 Snippets</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Vue 3 Single File Components</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Svelte UI Blocks</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Framer Motion Animations</a></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-widest font-mono">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition-colors">Buttons & Micro-interactions</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Glassmorphism Pricing Cards</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">OTP Form Inputs & Passcodes</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Floating Blur Navigation Bars</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Bento Grid Hero Sections</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-widest font-mono">Weekly Digest</h4>
          <p className="text-white/60 font-sans text-xs">Get top 5 trending UI components delivered to your inbox every Monday.</p>
          
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex bg-[#111111] border border-white/10 rounded-full p-1 focus-within:border-green-500">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@company.com"
                className="w-full bg-transparent text-white px-3 text-xs outline-none font-mono placeholder-white/30"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full cursor-pointer transition-colors"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
            {subscribed && <p className="text-green-400 text-[11px] font-mono">Subscribed successfully!</p>}
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[11px]">
        <p>© 2026 UIVerse Hub. MIT Licensed. Geometric Balance Theme.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">API Documentation</a>
        </div>
      </div>
    </footer>
  );
}

