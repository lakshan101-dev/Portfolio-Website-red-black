/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_PROJECTS } from './data/projects';
import { DesignProject } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { MetricsSection } from './components/MetricsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { VideoBackground, VideoConfig } from './components/VideoBackground';
import { glideDropScroll } from './utils/scroll';
import pinterestVideo from './Pinterest.mp4';
/**
 * ============================================================================
 * 🎬 BACKGROUND MEDIA CONFIGURATION
 * ============================================================================
 * Change the video or GIF location below!
 * - If you have a local file, place it in the `public/` directory:
 *     e.g., place `my-animation.gif` inside `public/my-animation.gif`
 *     and set `url: '/my-animation.gif'`
 * - Or use any online link:
 *     `url: 'https://example.com/my-video.mp4'` or `'https://example.com/my.gif'`
 * ============================================================================
 */
export const BACKGROUND_MEDIA_CONFIG: VideoConfig = {
  // Put your video (.mp4/.webm) or GIF (.gif) file path or URL here:
  url: pinterestVideo,
  
  name: 'Ambient Background',

  // Dark dimmer tint opacity (0.0 to 1.0) - keeps portfolio text razor-sharp:
  overlayOpacity: 0.2,

  // Frosted glass blur amount in pixels (e.g. 0 for sharp, 6-10 for smooth frosted):
  blurAmount: 1,

  // Video playback rate (only applies to video formats):
  playbackRate: 0.85,
};

export default function App() {
  const [projects] = useState<DesignProject[]>(INITIAL_PROJECTS);
  const [activeProject, setActiveProject] = useState<DesignProject | null>(null);

  // Smooth "Glide and Drop" scroll handler
  const scrollToSection = (id: string) => {
    glideDropScroll(id, 80);
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent text-[#FFFFFF] flex flex-col antialiased selection:bg-[#E50914] selection:text-white">
      {/* Background Media Layer with Glassmorphic Overlay */}
      <VideoBackground videoConfig={BACKGROUND_MEDIA_CONFIG} />

      {/* Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-grow w-full relative z-10">
        {/* 1. Hero Introduction */}
        <HeroSection
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Selected Work / Projects Portfolio */}
        <ProjectShowcase
          projects={projects}
          onSelectProject={(proj) => setActiveProject(proj)}
        />

        {/* 3. Core Services & Expertise (Design + Office Support) */}
        <ServicesSection />

        {/* 4. Track Record & Metrics */}
        <MetricsSection />

        {/* 5. Professional Profile & Toolkit */}
        <AboutSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 6. Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

