import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfessionalPathways } from './components/ProfessionalPathways';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectCatalog } from './components/ProjectCatalog';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ResearchLibrarySection } from './components/ResearchLibrarySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { Dimension, Project } from './types';
import { PROJECTS } from './data/portfolioData';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  const [activeDimension, setActiveDimension] = useState<Dimension | 'all'>('all');
  const [activePathway, setActivePathway] = useState<'tech' | 'marketing' | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // GSAP Reveal Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Find all reveal items and animate smoothly
      const elements = gsap.utils.toArray<HTMLElement>('.reveal-on-scroll');
      elements.forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSelectPathway = (pathway: 'tech' | 'marketing') => {
    setActivePathway(pathway);
    if (pathway === 'tech') {
      setActiveDimension('engineer');
    } else {
      setActiveDimension('marketer');
    }
  };

  const handleOpenProjectById = (projectId: string) => {
    const target = PROJECTS.find((p) => p.id === projectId);
    if (target) {
      setSelectedProject(target);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[var(--saffron)] selection:text-black">
      {/* Three.js Interactive Liquid Wave Canvas */}
      <ParticleBackground />

      {/* Global Navigation Bar */}
      <Navbar
        activeDimension={activeDimension}
        onSelectDimension={setActiveDimension}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 01 HERO SECTION */}
        <HeroSection onSelectPathway={handleSelectPathway} />

        {/* 02 TWO PRIMARY PROFESSIONAL PATHWAYS */}
        <div className="reveal-on-scroll">
          <ProfessionalPathways
            activePathway={activePathway}
            onSelectPathway={handleSelectPathway}
            onFilterDimension={setActiveDimension}
          />
        </div>

        {/* 03 ABOUT ME & ARCHITECTURAL PHILOSOPHY */}
        <div className="reveal-on-scroll">
          <AboutSection />
        </div>

        {/* 04 PROFESSIONAL EXPERIENCE (VCX Mart, Fugen WebTech, AOTMS Global) */}
        <div className="reveal-on-scroll">
          <ExperienceSection onOpenProjectDetail={handleOpenProjectById} />
        </div>

        {/* 05-08 PROJECT CATALOG (Active, Deeply Planned, Proposals, Employer, Experiments) */}
        <div className="reveal-on-scroll">
          <ProjectCatalog
            onSelectProject={setSelectedProject}
            activeDimension={activeDimension}
          />
        </div>

        {/* 09 CERTIFICATIONS (Google Ads, HubSpot, Semrush AI OS, Semrush SEO) */}
        <div className="reveal-on-scroll">
          <CertificationsSection />
        </div>

        {/* 10 EDUCATION (Dhanekula Institute - B.Tech CSE AI & ML 2023–2027) */}
        <div className="reveal-on-scroll">
          <EducationSection />
        </div>

        {/* 11 SKILLS & TECHNOLOGIES */}
        <div className="reveal-on-scroll">
          <SkillsSection />
        </div>

        {/* 12 CHRONOLOGICAL TIMELINE / JOURNEY */}
        <div className="reveal-on-scroll">
          <TimelineSection />
        </div>

        {/* 13 RESEARCH & DOCUMENTATION LIBRARY */}
        <div className="reveal-on-scroll">
          <ResearchLibrarySection />
        </div>

        {/* 14 CONTACT & SYNC */}
        <div className="reveal-on-scroll">
          <ContactSection />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* A-to-Z Project Detail Documentation Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
