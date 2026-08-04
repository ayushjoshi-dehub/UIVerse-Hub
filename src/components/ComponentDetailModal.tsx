import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, Copy, Check, Download, Code, Heart, Bookmark, Eye, Sparkles, 
  ShieldCheck, MessageSquare, History, Star, ArrowRight, Activity 
} from 'lucide-react';
import { UIComponent, Comment, AiAuditReport } from '../types';
import LiveSandbox from './LiveSandbox';
import { downloadComponentZip } from '../lib/zipHelper';

interface ComponentDetailModalProps {
  component: UIComponent | null;
  onClose: () => void;
  onFork: (comp: UIComponent) => void;
  onLike: (id: string) => void;
}

export default function ComponentDetailModal({ component, onClose, onFork, onLike }: ComponentDetailModalProps) {
  if (!component) return null;

  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'comments' | 'ai-audit' | 'versions'>('preview');
  const [codeLang, setCodeLang] = useState<'tsx' | 'html' | 'css' | 'js'>(
    component.code.tsx ? 'tsx' : 'html'
  );
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [auditReport, setAuditReport] = useState<AiAuditReport | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  // Fetch comments
  useEffect(() => {
    if (!component) return;
    fetch(`/api/components/${component.id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, [component]);

  const handleCopyCode = () => {
    const textToCopy = component.code[codeLang] || component.code.tsx || component.code.html || '';
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.7 }
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = () => {
    downloadComponentZip(component);
    fetch(`/api/components/${component.id}/download`, { method: 'POST' });
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    try {
      const res = await fetch(`/api/components/${component.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: newCommentText,
          authorName: 'Alex Dev',
          authorHandle: 'alexdev',
          rating
        })
      });
      const created = await res.json();
      setComments([created, ...comments]);
      setNewCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleRunAiAudit = async () => {
    setIsAuditing(true);
    try {
      const res = await fetch('/api/ai/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: component.code })
      });
      const report = await res.json();
      setAuditReport(report);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <img 
              src={component.author.avatar} 
              alt={component.author.name} 
              className="w-10 h-10 rounded-full object-cover border border-slate-700"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-white">{component.title}</h2>
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  {component.framework}
                </span>
              </div>
              <p className="text-xs text-slate-400">By @{component.author.handle} • Version {component.version}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Copy */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            {/* ZIP Download */}
            <button
              onClick={handleDownloadZip}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl transition-colors cursor-pointer ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'preview' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'code' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Source Code
          </button>
          <button
            onClick={() => setActiveTab('ai-audit')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'ai-audit' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            AI Audit & Fix
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'comments' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Comments ({comments.length})
          </button>
          <button
            onClick={() => setActiveTab('versions')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'versions' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            Changelog
          </button>

          {/* Fork to Playground Shortcut */}
          <button
            onClick={() => { onClose(); onFork(component); }}
            className="ml-auto flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Open in Playground →</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: LIVE PREVIEW */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              <LiveSandbox code={component.code} title={component.title} minHeight="360px" />
              
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">Description & Usage</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{component.description}</p>
                
                <div className="flex flex-wrap gap-2 text-xs">
                  {component.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CODE VIEW */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-950 p-2 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  {component.code.tsx && (
                    <button
                      onClick={() => setCodeLang('tsx')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                        codeLang === 'tsx' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      TSX / React
                    </button>
                  )}
                  {component.code.html && (
                    <button
                      onClick={() => setCodeLang('html')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                        codeLang === 'html' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      HTML
                    </button>
                  )}
                  {component.code.css && (
                    <button
                      onClick={() => setCodeLang('css')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                        codeLang === 'css' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      CSS
                    </button>
                  )}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer px-3 py-1 bg-slate-900 rounded-lg border border-slate-800"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Source</span>
                </button>
              </div>

              <pre className="p-5 bg-slate-950 text-cyan-300 font-mono text-xs rounded-2xl border border-slate-800 overflow-x-auto leading-relaxed max-h-[400px]">
                <code>{component.code[codeLang] || component.code.tsx || component.code.html}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: AI AUDIT */}
          {activeTab === 'ai-audit' && (
            <div className="space-y-6">
              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Gemini AI Code & Accessibility Inspector</h3>
                <p className="text-xs text-slate-400 max-w-md mb-4">
                  Runs an automated analysis on component contrast ratios, keyboard traps, ARIA markup, and render performance.
                </p>
                
                <button
                  onClick={handleRunAiAudit}
                  disabled={isAuditing}
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isAuditing ? 'Analyzing Code...' : 'Run Audit Now'}
                </button>
              </div>

              {auditReport && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center">
                    <span className="text-2xl font-extrabold text-emerald-400">{auditReport.accessibilityScore}/100</span>
                    <p className="text-xs text-slate-400 uppercase mt-1">Accessibility Score</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center">
                    <span className="text-2xl font-extrabold text-cyan-400">{auditReport.performanceScore}/100</span>
                    <p className="text-xs text-slate-400 uppercase mt-1">Performance Score</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center">
                    <span className="text-2xl font-extrabold text-purple-400">{auditReport.bestPracticesScore}/100</span>
                    <p className="text-xs text-slate-400 uppercase mt-1">Best Practices</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: COMMENTS */}
          {activeTab === 'comments' && (
            <div className="space-y-6">
              {/* Comment Input */}
              <form onSubmit={handleAddComment} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Leave a Review</h4>
                <textarea
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Share feedback, questions, or improvements..."
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs outline-none focus:border-cyan-500 min-h-[80px]"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="cursor-pointer"
                      >
                        <Star className={`w-4 h-4 ${star <= rating ? 'fill-amber-400' : 'text-slate-700'}`} />
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>
              </form>

              {/* Comment List */}
              <div className="space-y-3">
                {comments.map((comm) => (
                  <div key={comm.id} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={comm.authorAvatar} alt={comm.authorName} className="w-6 h-6 rounded-full object-cover" />
                        <span className="text-xs font-bold text-white">{comm.authorName}</span>
                        <span className="text-[10px] text-slate-500">@{comm.authorHandle}</span>
                      </div>
                      <div className="flex text-amber-400">
                        {Array.from({ length: comm.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">{comm.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: VERSIONS */}
          {activeTab === 'versions' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-cyan-400">v{component.version} (Current)</span>
                  <p className="text-xs text-slate-400 mt-1">Released {new Date(component.createdAt).toLocaleDateString()}</p>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 rounded-full">
                  Stable
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
