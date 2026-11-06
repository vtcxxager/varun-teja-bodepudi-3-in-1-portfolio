import { Terminal, TrendingUp, Rocket, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onSelectPathway: (pathway: 'tech' | 'marketing') => void;
}

export function HeroSection({ onSelectPathway }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-5xl w-full text-center relative z-10">
        
        {/* Top Accent Category Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--saffron)] animate-pulse" />
          <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-bold text-zinc-300">
            ONE PERSON · THREE PROFESSIONAL DIMENSIONS
          </span>
        </div>

        {/* Hero Title with Distinctive Outline Typography */}
        <div className="mb-8">
          <div className="text-zinc-400 font-mono tracking-[0.4em] text-xs md:text-sm uppercase mb-3">
            BODEPUDI
          </div>
          <h1 className="header-title text-6xl sm:text-7xl md:text-9xl font-black leading-none tracking-tight text-white mb-2">
            VARUN <br />
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '1.5px #ffffff' }}
            >
              TEJA
            </span>
          </h1>
        </div>

        {/* Three Dimensions Indicator Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 text-left">
          <div className="liquid-glass p-4 border-l-2 border-[var(--saffron)] hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-2 text-[var(--saffron)] text-xs font-bold uppercase tracking-wider mb-1">
              <Terminal className="w-3.5 h-3.5" />
              Software Engineer
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Full-stack architecture, distributed systems, clean REST APIs, AI/ML models & high-performance WebGL.
            </p>
          </div>

          <div className="liquid-glass p-4 border-l-2 border-emerald-400 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Digital Marketer
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Certified SEO, Google Ads, Generative Engine Optimization (GEO), high-converting inbound funnels & branding.
            </p>
          </div>

          <div className="liquid-glass p-4 border-l-2 border-amber-400 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Rocket className="w-3.5 h-3.5" />
              Entrepreneur
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Founder at VCX Mart (VTCX Inc.), logistics innovator at Tracxi, viable unit economics & 0-to-1 ecosystems.
            </p>
          </div>
        </div>

        {/* Primary Action Buttons: Jump to Pathways */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
          <a
            href="#pathways"
            onClick={() => onSelectPathway('tech')}
            className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
          >
            <span>Pathway 01: Technology</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </a>
          <a
            href="#pathways"
            onClick={() => onSelectPathway('marketing')}
            className="px-6 py-3.5 rounded-full liquid-glass text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all border border-white/20 flex items-center gap-2"
          >
            <span>Pathway 02: Growth & Business</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--saffron)]" />
          </a>
          <a
            href="#projects"
            className="px-5 py-3.5 rounded-full bg-white/5 text-zinc-300 font-semibold text-xs uppercase tracking-wider hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Archive Index
          </a>
        </div>

        {/* Metrics Bar Preserved from Original Liquid Glass Design */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="liquid-glass px-8 py-4 flex flex-col items-center min-w-[130px]">
            <span className="text-3xl font-bold font-mono text-white">{PERSONAL_INFO.inceptionYear}</span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 mt-1">Inception</span>
          </div>

          <div className="liquid-glass px-8 py-4 flex flex-col items-center min-w-[130px] border-b-2 border-[var(--saffron)]">
            <span className="text-3xl font-bold font-mono text-[var(--saffron)]">0 → 1</span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 mt-1">Specialist</span>
          </div>

          <div className="liquid-glass px-8 py-4 flex flex-col items-center min-w-[130px]">
            <span className="text-3xl font-bold font-mono text-emerald-400">3-in-1</span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 mt-1">Unified Persona</span>
          </div>

          <div className="liquid-glass px-8 py-4 flex flex-col items-center min-w-[130px] border-b-2 border-emerald-500">
            <span className="text-3xl font-bold font-mono text-white flex items-center gap-1">
              4<ShieldCheck className="w-5 h-5 text-emerald-400 inline" />
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 mt-1">Certifications</span>
          </div>
        </div>

      </div>
    </section>
  );
}
