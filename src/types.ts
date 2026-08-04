export type Framework = 
  | 'React'
  | 'Tailwind CSS'
  | 'HTML'
  | 'CSS'
  | 'Vue'
  | 'Svelte'
  | 'HeroUI'
  | 'shadcn/ui'
  | 'Framer Motion';

export type Category = 
  | 'Buttons'
  | 'Cards'
  | 'Forms & Inputs'
  | 'Loaders & Spinners'
  | 'Modals & Drawers'
  | 'Navigation'
  | 'Hero Sections'
  | 'Pricing Tables'
  | 'Animations'
  | 'Dashboards'
  | 'Tooltips & Alerts'
  | 'Carousels & Tabs';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ComponentVersion {
  version: string;
  changelog: string;
  createdAt: string;
  code: {
    html?: string;
    css?: string;
    js?: string;
    tsx?: string;
  };
}

export interface Comment {
  id: string;
  componentId: string;
  authorName: string;
  authorAvatar: string;
  authorHandle: string;
  text: string;
  rating?: number;
  createdAt: string;
  likes: number;
}

export interface UIComponent {
  id: string;
  title: string;
  description: string;
  category: Category;
  framework: Framework;
  code: {
    html?: string;
    css?: string;
    js?: string;
    tsx?: string;
  };
  tags: string[];
  author: {
    name: string;
    handle: string;
    avatar: string;
    bio?: string;
    isVerified?: boolean;
    github?: string;
  };
  stats: {
    views: number;
    downloads: number;
    likes: number;
    bookmarks: number;
    rating: number;
    commentsCount: number;
  };
  license: 'MIT' | 'Apache-2.0' | 'GPL-3.0' | 'CC0';
  version: string;
  dependencies: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  responsive: boolean;
  darkSupport: boolean;
  accessibilityReady: boolean;
  difficulty: Difficulty;
  createdAt: string;
  updatedAt: string;
  versions?: ComponentVersion[];
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  banner?: string;
  bio: string;
  skills: string[];
  github?: string;
  website?: string;
  followersCount: number;
  followingCount: number;
  uploadsCount: number;
  verified: boolean;
  achievements: { id: string; title: string; icon: string; description: string }[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  authorHandle: string;
  authorName: string;
  authorAvatar: string;
  componentIds: string[];
  isPrivate?: boolean;
  createdAt: string;
  coverGradient?: string;
}

export interface FilterState {
  search: string;
  framework: string;
  category: string;
  difficulty: string;
  tag: string;
  sortBy: 'trending' | 'popular' | 'downloads' | 'likes' | 'newest';
  darkModeOnly: boolean;
  responsiveOnly: boolean;
}

export interface AiGenerateRequest {
  prompt: string;
  framework: Framework;
  category: Category;
  style: 'glassmorphism' | 'minimal' | 'cyberpunk' | 'flat' | 'gradient' | 'neumorphism';
}

export interface AiAuditReport {
  accessibilityScore: number;
  performanceScore: number;
  bestPracticesScore: number;
  suggestions: string[];
  accessibilityFixes: string[];
}
