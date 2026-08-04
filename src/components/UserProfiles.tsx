import React, { useState, useEffect } from 'react';
import { ShieldCheck, Github, Globe, Heart, Bookmark, Code, Layers, Trophy } from 'lucide-react';
import { UserProfile, UIComponent } from '../types';
import ComponentCard from './ComponentCard';

interface UserProfilesProps {
  handle?: string;
  onSelectComponent: (comp: UIComponent) => void;
  onForkComponent: (comp: UIComponent) => void;
  onLikeComponent: (id: string) => void;
  onBookmarkComponent: (id: string) => void;
}

export default function UserProfiles({
  handle = 'elenadesign',
  onSelectComponent,
  onForkComponent,
  onLikeComponent,
  onBookmarkComponent
}: UserProfilesProps) {
  const [profileData, setProfileData] = useState<{ profile: UserProfile; uploads: UIComponent[] } | null>(null);
  const [activeTab, setActiveTab] = useState<'uploads' | 'achievements'>('uploads');

  useEffect(() => {
    fetch(`/api/users/${handle}`)
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error(err));
  }, [handle]);

  if (!profileData) {
    return (
      <div className="p-12 text-center text-slate-400">
        Loading creator profile...
      </div>
    );
  }

  const { profile, uploads } = profileData;

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8 space-y-6">
      
      {/* Banner & Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Banner Image */}
        <div className="h-44 w-full bg-gradient-to-r from-cyan-900 via-indigo-900 to-purple-900 relative">
          {profile.banner && (
            <img src={profile.banner} alt="Profile Banner" className="w-full h-full object-cover opacity-60" />
          )}
        </div>

        {/* Profile Avatar & Info */}
        <div className="px-8 pb-8 pt-0 relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16">
          <div className="flex items-end gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-28 h-28 rounded-3xl object-cover border-4 border-slate-950 shadow-2xl shrink-0"
            />
            <div className="mb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-white">{profile.name}</h1>
                {profile.verified && <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />}
              </div>
              <p className="text-xs text-slate-400 font-medium">@{profile.handle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
            <button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer">
              Follow Creator
            </button>
          </div>
        </div>

        {/* Bio & Stats */}
        <div className="px-8 pb-8 border-t border-slate-800/80 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            <p className="text-slate-300 text-sm leading-relaxed">{profile.bio}</p>
            
            <div className="flex flex-wrap gap-1.5 pt-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-around bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
            <div>
              <span className="text-2xl font-extrabold text-white">{uploads.length}</span>
              <p className="text-[11px] text-slate-400 uppercase font-medium">Uploads</p>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-2xl font-extrabold text-white">{profile.followersCount}</span>
              <p className="text-[11px] text-slate-400 uppercase font-medium">Followers</p>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-2xl font-extrabold text-white">{profile.followingCount}</span>
              <p className="text-[11px] text-slate-400 uppercase font-medium">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('uploads')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
            activeTab === 'uploads' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>Uploaded Components ({uploads.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
            activeTab === 'achievements' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-slate-400'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Achievements ({profile.achievements.length})</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'uploads' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploads.map((comp) => (
            <ComponentCard
              key={comp.id}
              component={comp}
              onSelect={onSelectComponent}
              onFork={onForkComponent}
              onLike={onLikeComponent}
              onBookmark={onBookmarkComponent}
            />
          ))}
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.achievements.map((ach) => (
            <div key={ach.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4">
              <span className="text-3xl">{ach.icon}</span>
              <div>
                <h4 className="font-bold text-white text-sm">{ach.title}</h4>
                <p className="text-xs text-slate-400">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
