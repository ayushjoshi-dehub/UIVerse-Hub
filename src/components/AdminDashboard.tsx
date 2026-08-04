import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Activity, Users, FileCode, Check, AlertTriangle } from 'lucide-react';
import { UIComponent } from '../types';

interface AdminDashboardProps {
  components: UIComponent[];
}

export default function AdminDashboard({ components }: AdminDashboardProps) {
  const [moderationList, setModerationList] = useState(components);

  const handleApprove = (id: string) => {
    setModerationList(moderationList.map((c) => (c.id === id ? { ...c, isFeatured: true } : c)));
  };

  const handleReject = (id: string) => {
    setModerationList(moderationList.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white">Platform Admin & Moderation Console</h1>
            <p className="text-xs text-slate-400">Manage user uploads, review flags, and monitor platform health.</p>
          </div>
        </div>

        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
          ● Systems Healthy
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 font-semibold uppercase">Total Components</span>
          <h3 className="text-3xl font-extrabold text-white mt-2">{components.length}</h3>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 font-semibold uppercase">Active Creators</span>
          <h3 className="text-3xl font-extrabold text-cyan-400 mt-2">1,240</h3>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 font-semibold uppercase">Pending Moderation</span>
          <h3 className="text-3xl font-extrabold text-amber-400 mt-2">2</h3>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 font-semibold uppercase">Monthly Exports</span>
          <h3 className="text-3xl font-extrabold text-emerald-400 mt-2">489,200</h3>
        </div>
      </div>

      {/* Moderation Queue */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
        <h3 className="text-base font-extrabold text-white">Component Moderation Queue</h3>

        <div className="space-y-3">
          {moderationList.map((comp) => (
            <div key={comp.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-2xl gap-4">
              <div className="flex items-center gap-3">
                <img src={comp.author.avatar} alt={comp.author.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-xs">{comp.title}</h4>
                    <span className="px-2 py-0.5 text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                      {comp.framework}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">By @{comp.author.handle} • {comp.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleApprove(comp.id)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-xl hover:bg-emerald-500/30 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{comp.isFeatured ? 'Featured ✓' : 'Feature'}</span>
                </button>

                <button
                  onClick={() => handleReject(comp.id)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold rounded-xl hover:bg-rose-500/30 cursor-pointer"
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
