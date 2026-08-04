import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ComponentGrid from './components/ComponentGrid';
import ComponentDetailModal from './components/ComponentDetailModal';
import Playground from './components/Playground';
import UploadModal from './components/UploadModal';
import AiStudioModal from './components/AiStudioModal';
import CommandPalette from './components/CommandPalette';
import UserProfiles from './components/UserProfiles';
import CollectionsView from './components/CollectionsView';
import CommunitySection from './components/CommunitySection';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { UIComponent } from './types';

export default function App() {
  const [components, setComponents] = useState<UIComponent[]>([]);
  const [activeTab, setActiveTab] = useState<string>('explore');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('trending');

  // Modals
  const [selectedComponent, setSelectedComponent] = useState<UIComponent | null>(null);
  const [forkedComponent, setForkedComponent] = useState<UIComponent | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch components
  const fetchComponents = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (selectedFramework !== 'All') params.append('framework', selectedFramework);
    if (selectedCategory !== 'All') params.append('category', selectedCategory);
    if (selectedDifficulty !== 'All') params.append('difficulty', selectedDifficulty);
    if (sortBy) params.append('sortBy', sortBy);

    fetch(`/api/components?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComponents(data);
        }
      })
      .catch((err) => console.error('Error fetching components:', err));
  };

  useEffect(() => {
    fetchComponents();
  }, [searchQuery, selectedFramework, selectedCategory, selectedDifficulty, sortBy]);

  // Fork handler
  const handleFork = (comp: UIComponent) => {
    setForkedComponent(comp);
    setActiveTab('playground');
  };

  // Like & Bookmark handlers
  const handleLike = (id: string) => {
    fetch(`/api/components/${id}/like`, { method: 'POST' })
      .then(() => fetchComponents())
      .catch((err) => console.error(err));
  };

  const handleBookmark = (id: string) => {
    fetch(`/api/components/${id}/bookmark`, { method: 'POST' })
      .then(() => fetchComponents())
      .catch((err) => console.error(err));
  };

  const handlePublishFromPlayground = (data: any) => {
    fetch('/api/components', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title || 'Playground Component',
        category: 'Buttons',
        framework: data.framework || 'React',
        code: data.code
      })
    })
      .then(() => {
        fetchComponents();
        setActiveTab('explore');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenAiStudio={() => setIsAiStudioOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <>
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedFramework={selectedFramework}
              setSelectedFramework={setSelectedFramework}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onOpenAiStudio={() => setIsAiStudioOpen(true)}
              totalComponents={components.length}
            />

            <ComponentGrid
              components={components}
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              onSelectComponent={setSelectedComponent}
              onForkComponent={handleFork}
              onLikeComponent={handleLike}
              onBookmarkComponent={handleBookmark}
              onOpenAiStudio={() => setIsAiStudioOpen(true)}
            />
          </>
        )}

        {activeTab === 'playground' && (
          <Playground
            initialComponent={forkedComponent}
            onPublish={handlePublishFromPlayground}
          />
        )}

        {activeTab === 'collections' && (
          <CollectionsView
            allComponents={components}
            onSelectComponent={setSelectedComponent}
            onForkComponent={handleFork}
            onLikeComponent={handleLike}
            onBookmarkComponent={handleBookmark}
          />
        )}

        {activeTab === 'community' && <CommunitySection />}

        {activeTab === 'profile' && (
          <UserProfiles
            handle="elenadesign"
            onSelectComponent={setSelectedComponent}
            onForkComponent={handleFork}
            onLikeComponent={handleLike}
            onBookmarkComponent={handleBookmark}
          />
        )}

        {activeTab === 'admin' && <AdminDashboard components={components} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ComponentDetailModal
        component={selectedComponent}
        onClose={() => setSelectedComponent(null)}
        onFork={handleFork}
        onLike={handleLike}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onComponentUploaded={() => fetchComponents()}
      />

      <AiStudioModal
        isOpen={isAiStudioOpen}
        onClose={() => setIsAiStudioOpen(false)}
        onComponentGenerated={() => fetchComponents()}
        onOpenPlayground={(comp) => {
          setForkedComponent(comp as any);
          setActiveTab('playground');
        }}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        components={components}
        onSelectComponent={setSelectedComponent}
        onNavigateTab={setActiveTab}
        onOpenAiStudio={() => setIsAiStudioOpen(true)}
      />

    </div>
  );
}
