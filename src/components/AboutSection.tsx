import { Terminal, TrendingUp, Rocket, Shield, Layers, Code2, Cpu, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-[var(--saffron)] font-bold block mb-2">
          Identity & Philosophy
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          ONE PERSON <span className="text-[var(--saffron)]">·</span> THREE DIMENSIONS
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          I do not view engineering, marketing, and entrepreneurship as separate career paths. They are three essential facets of taking an idea from zero to a self-sustaining reality.
        </p>
      </div>

      {/* Grid: Story & Three Dimensions Breakdown */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="liquid-glass p-8 md:p-10 mb-6 neon-border-saffron">
            <h3 className="header-title text-2xl font-bold text-white mb-4">
              THE <span className="text-[var(--saffron)]">BUILDER'S</span> JOURNEY
            </h3>
            <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                My journey began in 2019 out of raw curiosity for computers and software logic. Over the years, that fascination matured into building real-world software systems. As an undergraduate pursuing my <strong className="text-white">B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)</strong> at Dhanekula Institute of Engineering and Technology (2023–2027), I pair strong theoretical foundations with production engineering.
              </p>
              <p>
                However, I discovered early that great code alone does not guarantee real-world impact. Even the most elegant architecture remains unused without discoverability, audience resonance, and clear unit economics. This realization drove me to master <strong className="text-white">performance digital marketing</strong>—earning industry certifications from <strong className="text-emerald-400">Google, HubSpot, and Semrush</strong>, and executing high-impact campaigns for organizations like Fugen WebTech and AOTMS Global.
              </p>
              <p>
                As an <strong className="text-amber-400">entrepreneur</strong>, I lead <strong className="text-white">VCX Mart</strong> under VTCX Incorporate, and co-developed the <strong className="text-white">Tracxi</strong> logistics operations platform alongside my father, tackling the gritty operational bottlenecks of heavy freight.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
              <span className="tag tag-saffron">Full-Stack Architect</span>
              <span className="tag tag-green">Certified Marketer</span>
              <span className="tag tag-white">Startup Inception</span>
              <span className="tag tag-blue">CSE (AI & ML) 2023–2027</span>
            </div>
          </div>

          {/* Quick Contact Micro-Card */}
          <div className="liquid-glass p-6 flex flex-wrap items-center justify-between gap-4 border-l-4 border-l-white">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block">Direct Collaboration</span>
              <span className="text-sm md:text-base font-bold text-white font-mono">{PERSONAL_INFO.email}</span>
            </div>
            <a
              href="#connect"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Initiate Sync →
            </a>
          </div>
        </div>

        {/* Right Column: Three Dimensional Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Dimension 1: Engineer */}
          <div className="liquid-glass p-6 border-l-4 border-l-[var(--saffron)] hover:bg-white/[0.04] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[var(--saffron)] tracking-widest uppercase flex items-center gap-1.5 font-mono">
                <Terminal className="w-4 h-4" /> Dimension 01
              </span>
              <span className="tag text-[9px] py-0.5">Software Engineer</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Technical Rigor & System Architecture</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Specializing in scalable full-stack web applications, clean REST APIs, relational database schemas, real-time WebSockets, and Three.js WebGL graphics.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-zinc-300 font-mono">
              <span className="px-2 py-0.5 rounded bg-white/5">React 19</span>
              <span className="px-2 py-0.5 rounded bg-white/5">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-white/5">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-white/5">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-white/5">Three.js</span>
            </div>
          </div>

          {/* Dimension 2: Marketer */}
          <div className="liquid-glass p-6 border-l-4 border-l-emerald-400 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase flex items-center gap-1.5 font-mono">
                <TrendingUp className="w-4 h-4" /> Dimension 02
              </span>
              <span className="tag tag-green text-[9px] py-0.5">Digital Marketer</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Algorithmic Growth & Audience Positioning</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Turning products into traffic magnets via technical SEO, Semrush AI Search (GEO), Google Ads Smart Bidding, and educational content campaigns that convert.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-zinc-300 font-mono">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Google Ads Search</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Semrush AI OS</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">HubSpot Inbound</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">GEO Framework</span>
            </div>
          </div>

          {/* Dimension 3: Entrepreneur */}
          <div className="liquid-glass p-6 border-l-4 border-l-amber-400 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1.5 font-mono">
                <Rocket className="w-4 h-4" /> Dimension 03
              </span>
              <span className="tag text-[9px] py-0.5 text-amber-300 border-amber-400/30">Entrepreneur</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">0-to-1 Product Inception & Viability</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Steering VCX Mart (VTCX Incorporate), co-developing Tracxi logistics, drafting deep technical blueprints, and formulating product proposals with sustainable unit economics.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-zinc-300 font-mono">
              <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300">VCX Mart (Founder)</span>
              <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300">Tracxi (Co-Dev)</span>
              <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300">Unit Economics</span>
            </div>
          </div>

        </div>
      </div>

      {/* TECHNICAL BLUEPRINT (Preserved from Original Design Reference) */}
      <div className="liquid-glass p-8 md:p-12 border-t border-b border-white/10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-mono block mb-1">Architectural Standard</span>
          <h3 className="header-title text-2xl md:text-3xl font-bold text-white">TECHNICAL BLUEPRINT</h3>
          <p className="text-xs text-zinc-400 mt-2">Core foundational engineering principles enforced across all projects and ventures.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[var(--saffron)]/30 transition-all">
            <span className="text-3xl text-[var(--saffron)] font-bold mb-3 block font-mono">01</span>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--saffron)]" />
              API-First Modularity
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every system component is decoupled into modular services consumed via type-safe, high-performance REST and WebSocket endpoints. Eliminates vendor lock-in and allows seamless frontend evolution.
            </p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
            <span className="text-3xl text-white font-bold mb-3 block font-mono">02</span>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white" />
              Multi-Tenant Isolation
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Architectures that strictly isolate customer and merchant tenant data (at the schema or partition level) while sharing compute efficiency. Zero cross-tenant data leakage.
            </p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-emerald-400/30 transition-all">
            <span className="text-3xl text-emerald-400 font-bold mb-3 block font-mono">03</span>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Zero-Trust Security
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Implementation of defensive coding, strict token authentication, sanitized input validation, and role-based permissions from the very first line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
