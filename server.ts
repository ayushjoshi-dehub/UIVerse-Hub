import express from 'express';
import path from 'path';
import { GoogleGenAI, Type } from '@google/genai';
import { SEED_COMPONENTS } from './src/data/seedComponents';
import { UIComponent, Comment, UserProfile, Collection } from './src/types';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// In-memory data store initialized with SEED_COMPONENTS
let componentsStore: UIComponent[] = [...SEED_COMPONENTS];
let commentsStore: Comment[] = [
  {
    id: 'c1',
    componentId: 'btn-neon-glow',
    authorName: 'David K.',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    authorHandle: 'davidk',
    text: 'Extremely sleek button effect! The blur aura renders super smoothly in Safari too.',
    rating: 5,
    createdAt: '2026-07-29T10:15:00Z',
    likes: 12
  },
  {
    id: 'c2',
    componentId: 'card-glass-pricing',
    authorName: 'Aria Stark',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    authorHandle: 'aria_ui',
    text: 'Used this directly in my SaaS landing page redesign. Saved me hours of styling!',
    rating: 5,
    createdAt: '2026-07-31T14:20:00Z',
    likes: 19
  }
];

let collectionsStore: Collection[] = [
  {
    id: 'col-1',
    title: 'Cyberpunk & Glassmorphism Essentials',
    description: 'A curated mix of neon glows, glass card borders, and futuristic micro-interactions.',
    authorHandle: 'elenadesign',
    authorName: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    componentIds: ['btn-neon-glow', 'card-glass-pricing', 'hero-bento-showcase'],
    createdAt: '2026-07-28T00:00:00Z',
    coverGradient: 'from-purple-900/60 via-slate-900 to-indigo-900/60'
  },
  {
    id: 'col-2',
    title: 'Minimalist Micro-Inputs',
    description: 'Clean OTP verification, search toggles, and animated metric cards.',
    authorHandle: 'sarah_ui',
    authorName: 'Sarah Jenkins',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    componentIds: ['form-animated-otp', 'dash-sparkline-widget', 'nav-floating-dock'],
    createdAt: '2026-07-29T00:00:00Z',
    coverGradient: 'from-cyan-900/60 via-slate-900 to-teal-900/60'
  }
];

let userProfilesStore: Record<string, UserProfile> = {
  elenadesign: {
    name: 'Elena Rostova',
    handle: 'elenadesign',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80',
    bio: 'UI Engineer & Creative Technologist crafting futuristic design systems and Tailwind motion components.',
    skills: ['React', 'Tailwind CSS', 'Framer Motion', 'Design Systems', 'TypeScript'],
    github: 'https://github.com/elena-ui',
    website: 'https://elena.design',
    followersCount: 1420,
    followingCount: 190,
    uploadsCount: 12,
    verified: true,
    achievements: [
      { id: 'a1', title: 'Top Contributor 2026', icon: '🏆', description: 'Over 10,000 component downloads' },
      { id: 'a2', title: 'Master of Motion', icon: '✨', description: 'Published 5+ featured animation components' }
    ]
  },
  marcus_ui: {
    name: 'Marcus Chen',
    handle: 'marcus_ui',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'Frontend Architect specialized in Tailwind & Micro-interactions.',
    skills: ['Tailwind CSS', 'React', 'CSS Shaders', 'HeroUI'],
    github: 'https://github.com/marcuschen',
    followersCount: 890,
    followingCount: 120,
    uploadsCount: 8,
    verified: true,
    achievements: [
      { id: 'a3', title: 'Glassmorphic Pioneer', icon: '💎', description: 'Created #1 ranked pricing card' }
    ]
  }
};

// Helper to initialize Gemini SDK
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is required for AI capabilities.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// --- API ENDPOINTS ---

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', componentCount: componentsStore.length });
});

// GET /api/components
app.get('/api/components', (req, res) => {
  const { category, framework, search, difficulty, sortBy, tag } = req.query;

  let result = [...componentsStore];

  if (category && category !== 'All') {
    result = result.filter((c) => c.category.toLowerCase() === String(category).toLowerCase());
  }

  if (framework && framework !== 'All') {
    result = result.filter((c) => c.framework.toLowerCase() === String(framework).toLowerCase());
  }

  if (difficulty && difficulty !== 'All') {
    result = result.filter((c) => c.difficulty.toLowerCase() === String(difficulty).toLowerCase());
  }

  if (tag) {
    result = result.filter((c) => c.tags.some((t) => t.toLowerCase() === String(tag).toLowerCase()));
  }

  if (search) {
    const q = String(search).toLowerCase();
    result = result.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q)) ||
        c.author.name.toLowerCase().includes(q)
    );
  }

  // Sort
  if (sortBy === 'trending') {
    result.sort((a, b) => b.stats.likes + b.stats.views * 0.1 - (a.stats.likes + a.stats.views * 0.1));
  } else if (sortBy === 'downloads') {
    result.sort((a, b) => b.stats.downloads - a.stats.downloads);
  } else if (sortBy === 'likes') {
    result.sort((a, b) => b.stats.likes - a.stats.likes);
  } else if (sortBy === 'newest') {
    result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else {
    // Default popular
    result.sort((a, b) => b.stats.views - a.stats.views);
  }

  res.json(result);
});

// GET /api/components/:id
app.get('/api/components/:id', (req, res) => {
  const comp = componentsStore.find((c) => c.id === req.params.id);
  if (!comp) {
    res.status(404).json({ error: 'Component not found' });
    return;
  }
  // increment views
  comp.stats.views += 1;
  res.json(comp);
});

// POST /api/components (Upload new component)
app.post('/api/components', (req, res) => {
  const body = req.body;
  if (!body.title || !body.code || !body.category || !body.framework) {
    res.status(400).json({ error: 'Missing required component fields' });
    return;
  }

  const id = `comp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const newComp: UIComponent = {
    id,
    title: body.title,
    description: body.description || 'A custom community-uploaded UI component.',
    category: body.category,
    framework: body.framework,
    code: body.code,
    tags: Array.isArray(body.tags) ? body.tags : ['Custom', 'Community'],
    author: body.author || {
      name: 'Community Creator',
      handle: 'creator',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      isVerified: false
    },
    stats: {
      views: 1,
      downloads: 0,
      likes: 0,
      bookmarks: 0,
      rating: 5.0,
      commentsCount: 0
    },
    license: body.license || 'MIT',
    version: '1.0.0',
    dependencies: body.dependencies || ['tailwindcss'],
    isNew: true,
    responsive: body.responsive ?? true,
    darkSupport: body.darkSupport ?? true,
    accessibilityReady: body.accessibilityReady ?? true,
    difficulty: body.difficulty || 'Intermediate',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    versions: [
      {
        version: '1.0.0',
        changelog: 'Initial component release',
        createdAt: new Date().toISOString(),
        code: body.code
      }
    ]
  };

  componentsStore.unshift(newComp);
  res.status(201).json(newComp);
});

// POST /api/components/:id/like
app.post('/api/components/:id/like', (req, res) => {
  const comp = componentsStore.find((c) => c.id === req.params.id);
  if (!comp) {
    res.status(404).json({ error: 'Component not found' });
    return;
  }
  comp.stats.likes += 1;
  res.json({ likes: comp.stats.likes });
});

// POST /api/components/:id/bookmark
app.post('/api/components/:id/bookmark', (req, res) => {
  const comp = componentsStore.find((c) => c.id === req.params.id);
  if (!comp) {
    res.status(404).json({ error: 'Component not found' });
    return;
  }
  comp.stats.bookmarks += 1;
  res.json({ bookmarks: comp.stats.bookmarks });
});

// POST /api/components/:id/download
app.post('/api/components/:id/download', (req, res) => {
  const comp = componentsStore.find((c) => c.id === req.params.id);
  if (!comp) {
    res.status(404).json({ error: 'Component not found' });
    return;
  }
  comp.stats.downloads += 1;
  res.json({ success: true, downloads: comp.stats.downloads });
});

// GET & POST Comments
app.get('/api/components/:id/comments', (req, res) => {
  const itemComments = commentsStore.filter((c) => c.componentId === req.params.id);
  res.json(itemComments);
});

app.post('/api/components/:id/comments', (req, res) => {
  const { text, authorName, authorHandle, authorAvatar, rating } = req.body;
  if (!text) {
    res.status(400).json({ error: 'Text is required' });
    return;
  }

  const comp = componentsStore.find((c) => c.id === req.params.id);
  if (comp) {
    comp.stats.commentsCount += 1;
  }

  const newComment: Comment = {
    id: `comm-${Date.now()}`,
    componentId: req.params.id,
    authorName: authorName || 'Dev Guest',
    authorHandle: authorHandle || 'devguest',
    authorAvatar:
      authorAvatar ||
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    text,
    rating: rating || 5,
    createdAt: new Date().toISOString(),
    likes: 0
  };

  commentsStore.unshift(newComment);
  res.status(201).json(newComment);
});

// User profile endpoints
app.get('/api/users/:handle', (req, res) => {
  const profile = userProfilesStore[req.params.handle] || {
    name: req.params.handle,
    handle: req.params.handle,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    bio: 'UI enthusiast & developer.',
    skills: ['React', 'Tailwind CSS'],
    followersCount: 42,
    followingCount: 10,
    uploadsCount: componentsStore.filter((c) => c.author.handle === req.params.handle).length,
    verified: false,
    achievements: []
  };

  const userUploads = componentsStore.filter((c) => c.author.handle === req.params.handle);
  res.json({ profile, uploads: userUploads });
});

// Collections
app.get('/api/collections', (req, res) => {
  res.json(collectionsStore);
});

app.post('/api/collections', (req, res) => {
  const { title, description, componentIds, authorHandle, authorName } = req.body;
  const newCol: Collection = {
    id: `col-${Date.now()}`,
    title: title || 'My New UI Collection',
    description: description || 'Handpicked components for modern web apps.',
    authorHandle: authorHandle || 'elenadesign',
    authorName: authorName || 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    componentIds: componentIds || [],
    createdAt: new Date().toISOString(),
    coverGradient: 'from-purple-900/60 via-slate-900 to-cyan-900/60'
  };
  collectionsStore.unshift(newCol);
  res.status(201).json(newCol);
});

// --- AI ENDPOINTS (using Gemini API `gemini-3.6-flash`) ---

// POST /api/ai/generate
app.post('/api/ai/generate', async (req, res) => {
  try {
    const { prompt, framework, category, style } = req.body;
    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are a master frontend architect for UIVerse Hub.
Your task is to generate clean, highly responsive, production-ready, beautiful UI code based on the user request.
Respond ONLY with valid JSON matching this schema:
{
  "title": "Short descriptive title of component",
  "description": "Clear 1-2 sentence overview",
  "category": "${category || 'Buttons'}",
  "framework": "${framework || 'React'}",
  "code": {
    "html": "Raw HTML/Tailwind markup if applicable",
    "tsx": "Complete React component TSX using Tailwind CSS",
    "css": "Custom CSS rules if needed"
  },
  "tags": ["Tag1", "Tag2", "Tag3"],
  "dependencies": ["tailwindcss", "react"]
}
Ensure the React code imports React and uses modern Tailwind CSS v4 styling with crisp typography, subtle micro-interactions, dark mode readiness, and sleek aesthetic.
Do NOT wrap output in markdown code blocks outside JSON. Return strict JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Generate a ${style || 'modern'} ${category || 'component'} for framework ${
        framework || 'React'
      }. Request: "${prompt}"`,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.7
      }
    });

    const jsonText = response.text || '{}';
    const parsed = JSON.parse(jsonText);

    res.json(parsed);
  } catch (err: any) {
    console.error('AI Generation error:', err);
    res.status(500).json({ error: err.message || 'Failed to generate AI component' });
  }
});

// POST /api/ai/convert (Convert framework e.g. HTML/CSS -> React/Tailwind or Vue)
app.post('/api/ai/convert', async (req, res) => {
  try {
    const { code, sourceFramework, targetFramework } = req.body;
    if (!code) {
      res.status(400).json({ error: 'Code is required' });
      return;
    }

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Convert the following code from ${sourceFramework || 'HTML'} to ${
        targetFramework || 'React TSX'
      } using Tailwind CSS styling. Return JSON with converted code:
${JSON.stringify(code)}`,
      config: {
        systemInstruction: `You are a framework conversion AI. Output JSON strictly with keys "convertedCode" (string) and "notes" (string array).`,
        responseMimeType: 'application/json'
      }
    });

    res.json(JSON.parse(response.text || '{}'));
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to convert code' });
  }
});

// POST /api/ai/audit (Accessibility & Performance audit)
app.post('/api/ai/audit', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      res.status(400).json({ error: 'Code is required' });
      return;
    }

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Perform an automated UX, accessibility (WCAG 2.1 AA), and performance audit on this component code:
${typeof code === 'string' ? code : JSON.stringify(code)}`,
      config: {
        systemInstruction: `You are an expert accessibility and performance auditor. Return JSON strictly:
{
  "accessibilityScore": number (0-100),
  "performanceScore": number (0-100),
  "bestPracticesScore": number (0-100),
  "suggestions": ["suggestion 1", "suggestion 2"],
  "accessibilityFixes": ["fix 1", "fix 2"]
}`,
        responseMimeType: 'application/json'
      }
    });

    res.json(JSON.parse(response.text || '{}'));
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to audit code' });
  }
});

// START SERVER
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`UIVerse Hub server running on http://localhost:${PORT}`);
  });
}

startServer();
