import React from 'react';
import { Users, Trophy, MessageSquare, Flame, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export default function CommunitySection() {
  const leaderboards = [
    { rank: 1, name: 'Elena Rostova', handle: 'elenadesign', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', downloads: '142,500', likes: '12,400', badge: '🥇 #1 Creator' },
    { rank: 2, name: 'Marcus Chen', handle: 'marcus_ui', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', downloads: '98,200', likes: '8,900', badge: '🥈 Master Engineer' },
    { rank: 3, name: 'Sarah Jenkins', handle: 'sarah_ui', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', downloads: '76,100', likes: '6,300', badge: '🥉 Design Architect' }
  ];

  const discussions = [
    { title: 'Best practices for Framer Motion micro-interactions in React 19', author: 'elenadesign', comments: 34, views: 1200, time: '2h ago' },
    { title: 'Tailwind v4 Browser Compiler vs PostCSS: Performance Benchmarks', author: 'marcus_ui', comments: 19, views: 890, time: '5h ago' },
    { title: 'How to make accessible glassmorphic cards with WCAG 2.1 AA contrast', author: 'sarah_ui', comments: 42, views: 2300, time: '1d ago' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
      
      {/* Weekly Challenge Hero Banner */}
      <div className="relative p-8 bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold text-xs rounded-full uppercase tracking-wider">
            🔥 Weekly Challenge #14
          </span>
          <h2 className="text-3xl font-extrabold text-white">Design a Cyberpunk Floating Header</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Submit your best React or Tailwind floating header before Sunday. Top 3 entries get featured on the UIVerse Hub homepage & earn exclusive creator badges!
          </p>
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg cursor-pointer">
            Submit Entry
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Leaderboard Column */}
        <div className="lg:col-span-1 p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-extrabold text-white">Top Creator Leaderboard</h3>
          </div>

          <div className="space-y-4">
            {leaderboards.map((user) => (
              <div key={user.rank} className="flex items-center justify-between p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-500 w-4">#{user.rank}</span>
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{user.name}</h4>
                    <span className="text-[10px] text-amber-400 font-semibold">{user.badge}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-cyan-400">{user.downloads}</span>
                  <p className="text-[10px] text-slate-500">downloads</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussions Column */}
        <div className="lg:col-span-2 p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-extrabold text-white">Community Discussions & Tutorials</h3>
            </div>
            <button className="text-xs text-cyan-400 hover:underline font-semibold cursor-pointer">
              Start Topic +
            </button>
          </div>

          <div className="space-y-3">
            {discussions.map((disc, i) => (
              <div key={i} className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer space-y-2">
                <h4 className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">{disc.title}</h4>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>By @{disc.author} • {disc.time}</span>
                  <span>{disc.comments} replies • {disc.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
