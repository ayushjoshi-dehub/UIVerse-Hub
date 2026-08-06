import { UIComponent } from '../../types';

export const component: UIComponent = {
  id: 'btn-glassmorphism-glow',
  title: 'Glassmorphism Hover Aura Button',
  description: 'A frosted glass container button with glowing border and subtle reflection effect on hover.',
  category: 'Buttons',
  framework: 'React',
  code: {
    html: `<button class="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300">Glass Glow Button</button>`,
    tsx: `import React from 'react';

export default function GlassGlowButton() {
  return (
    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300">
      Glass Glow Button
    </button>
  );
}`
  },
  tags: ['Glassmorphism', 'Button', 'Glow', 'Blur', 'React'],
  author: {
    name: 'Originkit Design',
    handle: 'originkit',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    bio: 'Creators of free animated component library.',
    isVerified: true
  },
  stats: { views: 1200, downloads: 450, likes: 320, bookmarks: 110, rating: 5.0, commentsCount: 8 },
  license: 'MIT',
  version: '1.0.0',
  dependencies: ['react', 'tailwindcss'],
  isNew: true,
  responsive: true,
  darkSupport: true,
  accessibilityReady: true,
  difficulty: 'Beginner',
  createdAt: '2026-08-06T12:00:00Z',
  updatedAt: '2026-08-06T12:00:00Z'
};

export default component;
