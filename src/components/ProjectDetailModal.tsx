import { useState } from 'react';
import { 
  X, 
  Layers, 
  Cpu, 
  Server, 
  Database, 
  Globe, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Calendar, 
  FileText, 
  ExternalLink, 
  Github, 
  ChevronRight,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';
import { Project, ProjectStatus } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'business' | 'roadmap' | 'decisions'>('overview');

  if (!project) return null;

  // Status tag styling
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'Launched': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Development': return 'bg-[var(--saffron)]/20 text-[var(--saffron)] border-[var(--saffron)]/30';
      case 'Testing': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Planning': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Prototype': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Proposal': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Research': return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'Idea': return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30';
      default: return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center items-start p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl liquid-glass bg-zinc-950/95 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${getStatusColor(project.status)}`}>
                Status: {project.status}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                {project.classification.toUpperCase()} ARCHIVE
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {project.period}
              </span>
            </div>

            <h2 className="header-title text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-zinc-200"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Ownership Context Alert Banner */}
        <div className="px-6 md:px-8 py-3 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-zinc-400">
            <strong className="text-zinc-300">Ownership & Contribution:</strong> {project.ownershipContext}
          </span>
          <span className="text-[var(--saffron)] font-bold">
            Role: {project.role}
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-white/10 px-6 md:px-8 bg-black/40 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'overview'
                ? 'border-[var(--saffron)] text-[var(--saffron)]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            01. Overview & Vision
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'architecture'
                ? 'border-[var(--saffron)] text-[var(--saffron)]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            02. Architecture & Tech
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'business'
                ? 'border-[var(--saffron)] text-[var(--saffron)]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            03. Strategy & Market
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'roadmap'
                ? 'border-[var(--saffron)] text-[var(--saffron)]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            04. Roadmap & Milestones
          </button>
          <button
            onClick={() => setActiveTab('decisions')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'decisions'
                ? 'border-[var(--saffron)] text-[var(--saffron)]'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            05. Decisions & Risks
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-8 max-h-[68vh] overflow-y-auto space-y-8">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--saffron)] font-bold mb-2">
                  Project Summary
                </h4>
                <p className="text-sm md:text-base text-zinc-200 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                    Inspiration & Origin
                  </span>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                    {project.inspiration}
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-2 border-l-rose-500">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block mb-2 font-bold">
                    Problem Statement
                  </span>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                    Vision & Objectives
                  </span>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                    {project.visionObjectives}
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                    Target Audience
                  </span>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                    {project.targetAudience}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2">
                  Proposed Solution
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.proposedSolution}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3">
                  Key Functionality & Specifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & TECH */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="text-xs font-mono text-zinc-400">
                Detailed technical components and system engineering patterns implemented or specified for this project.
              </div>

              {project.techArchitecture ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {project.techArchitecture.frontend && (
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                        <Globe className="w-4 h-4 text-[var(--saffron)]" />
                        Frontend & Client Runtime
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techArchitecture.frontend.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techArchitecture.backend && (
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                        <Server className="w-4 h-4 text-emerald-400" />
                        Backend & Server Services
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techArchitecture.backend.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techArchitecture.database && (
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                        <Database className="w-4 h-4 text-blue-400" />
                        Database & Persistence
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techArchitecture.database.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techArchitecture.cloudOps && (
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                        <Cpu className="w-4 h-4 text-purple-400" />
                        Cloud, Ops & Deployment
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techArchitecture.cloudOps.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techArchitecture.hardware && (
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl md:col-span-2 border-l-2 border-l-amber-400">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-3">
                        <Cpu className="w-4 h-4 text-amber-400" />
                        Hardware & Embedded Specifications
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techArchitecture.hardware.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-200 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-zinc-400 text-sm">
                  Technical specifications are focused primarily on campaign analytics and content distribution pipelines.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: STRATEGY & MARKET */}
          {activeTab === 'business' && (
            <div className="space-y-6">
              {project.businessModel && (
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Business Model & Monetization
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.businessModel}
                  </p>
                </div>
              )}

              {project.marketResearch && (
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5" />
                    Market Research & Feasibility Analysis
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.marketResearch}
                  </p>
                </div>
              )}

              {/* Future Possibilities */}
              {project.futurePossibilities && project.futurePossibilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--saffron)]" />
                    Future Expansion Vectors
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {project.futurePossibilities.map((fut, fIdx) => (
                      <div key={fIdx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs text-zinc-300 flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 text-[var(--saffron)] shrink-0 mt-0.5" />
                        <span>{fut}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ROADMAP & MILESTONES */}
          {activeTab === 'roadmap' && (
            <div className="space-y-8">
              {/* Phased Roadmap */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--saffron)] font-bold mb-4">
                  Development Roadmap Phases
                </h4>
                <div className="space-y-4">
                  {project.roadmap.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-2xl border transition-all ${
                        item.status === 'completed'
                          ? 'bg-emerald-500/[0.03] border-emerald-500/20'
                          : item.status === 'in-progress'
                          ? 'bg-[var(--saffron)]/[0.03] border-[var(--saffron)]/30'
                          : 'bg-white/[0.02] border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                          {item.phase}: {item.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${
                          item.status === 'completed' ? 'text-emerald-400 bg-emerald-400/10' :
                          item.status === 'in-progress' ? 'text-[var(--saffron)] bg-[var(--saffron)]/10' :
                          'text-zinc-500 bg-white/5'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chronological Milestones */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  Chronological Milestones
                </h4>
                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {project.timelineMilestones.map((m, mIdx) => (
                    <div key={mIdx} className="relative flex items-start gap-3">
                      <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${
                        m.completed ? 'bg-emerald-400' : 'bg-zinc-600'
                      }`} />
                      <div>
                        <span className="text-[11px] font-mono text-zinc-400 block font-semibold">
                          {m.date}
                        </span>
                        <span className="text-xs text-zinc-200">
                          {m.event}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DECISIONS & RISKS */}
          {activeTab === 'decisions' && (
            <div className="space-y-6">
              {/* Finalized Decisions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Finalized Architectural Decisions
                </h4>
                <div className="space-y-2.5">
                  {project.finalizedDecisions.map((dec, dIdx) => (
                    <div key={dIdx} className="p-3.5 bg-emerald-500/[0.03] border border-emerald-500/15 rounded-xl text-xs text-zinc-200 flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono font-bold">✓</span>
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unresolved Questions */}
              {project.unresolvedQuestions && project.unresolvedQuestions.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Unresolved Questions & Research Items
                  </h4>
                  <div className="space-y-2.5">
                    {project.unresolvedQuestions.map((q, qIdx) => (
                      <div key={qIdx} className="p-3.5 bg-amber-500/[0.03] border border-amber-500/15 rounded-xl text-xs text-zinc-300 flex items-start gap-2.5">
                        <span className="text-amber-400 font-mono font-bold">?</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Risks & Challenges */}
              {project.risksAndChallenges && project.risksAndChallenges.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Identified Risks & Operational Challenges
                  </h4>
                  <div className="space-y-2.5">
                    {project.risksAndChallenges.map((risk, rIdx) => (
                      <div key={rIdx} className="p-3.5 bg-rose-500/[0.03] border border-rose-500/15 rounded-xl text-xs text-zinc-300 flex items-start gap-2.5">
                        <span className="text-rose-400 font-mono font-bold">!</span>
                        <span>{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t, tidx) => (
              <span key={tidx} className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px]">
                #{t}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all ml-auto"
          >
            Close Documentation
          </button>
        </div>

      </div>
    </div>
  );
}
