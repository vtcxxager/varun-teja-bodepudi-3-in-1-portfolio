import { Terminal, TrendingUp, Cpu, Server, Database, Globe, Search, BarChart3, Rocket, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Dimension } from '../types';

interface ProfessionalPathwaysProps {
  activePathway: 'tech' | 'marketing' | 'all';
  onSelectPathway: (pathway: 'tech' | 'marketing') => void;
  onFilterDimension: (dimension: Dimension) => void;
}

export function ProfessionalPathways({
  activePathway,
  onSelectPathway,
  onFilterDimension,
}: ProfessionalPathwaysProps) {
  return (
    <section id="pathways" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-[var(--saffron)] font-bold block mb-2">
          Structured Entry Points
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          TWO PROFESSIONAL <span className="text-[var(--saffron)]">PATHWAYS</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Choose a tailored perspective to explore my work. Both pathways converge into the same comprehensive personal archive.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* PATHWAY 01: TECHNOLOGY & SOFTWARE ENGINEERING */}
        <div 
          className={`liquid-glass p-8 md:p-10 relative overflow-hidden transition-all duration-300 border-l-4 ${
            activePathway === 'tech' ? 'border-l-[var(--saffron)] ring-1 ring-[var(--saffron)]/40 bg-white/[0.04]' : 'border-l-[var(--saffron)]'
          }`}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-4xl font-black font-mono text-[var(--saffron)]/40">01</span>
            <span className="tag tag-saffron font-mono">
              Engineering Core
            </span>
          </div>

          <h3 className="header-title text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-2">
            Technology & Software Engineering
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Architecting robust full-stack ecosystems, resilient microservices, low-latency APIs, and high-performance WebGL interfaces. Grounded in academic AI/ML and production TypeScript systems.
          </p>

          {/* Key Domains in Pathway A */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Globe className="w-3.5 h-3.5 text-[var(--saffron)]" />
                Frontend Systems
              </div>
              <p className="text-[11px] text-zinc-400">React 19, Tailwind CSS, Vite, Motion, 120 FPS Native Canvas</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Server className="w-3.5 h-3.5 text-[var(--saffron)]" />
                Backend & APIs
              </div>
              <p className="text-[11px] text-zinc-400">Node.js, Express, Microservices, JWT, RESTful Endpoints</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Database className="w-3.5 h-3.5 text-[var(--saffron)]" />
                Data & Storage
              </div>
              <p className="text-[11px] text-zinc-400">PostgreSQL, PostGIS, Relational Modeling, Redis Cache</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Cpu className="w-3.5 h-3.5 text-[var(--saffron)]" />
                AI & Emerging Tech
              </div>
              <p className="text-[11px] text-zinc-400">B.Tech AI & ML, BLE Hardware Specs, Three.js WebGL</p>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="space-y-2 mb-8 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--saffron)] shrink-0" />
              <span>Full architectural control: from 0-to-1 database schemas to production deployment.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--saffron)] shrink-0" />
              <span>Co-engineered Tracxi fleet ledger; formulated Tracxi 2.0 distributed cargo engine.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--saffron)] shrink-0" />
              <span>Architected WAH personal safety wearable BLE firmware & emergency dispatch logic.</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="#projects"
              onClick={() => {
                onSelectPathway('tech');
                onFilterDimension('engineer');
              }}
              className="px-5 py-2.5 rounded-full bg-[var(--saffron)] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Explore Tech Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#skills"
              className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-all border border-white/10"
            >
              Technical Stack →
            </a>
          </div>
        </div>

        {/* PATHWAY 02: MARKETING, BUSINESS & ENTREPRENEURSHIP */}
        <div 
          className={`liquid-glass p-8 md:p-10 relative overflow-hidden transition-all duration-300 border-l-4 ${
            activePathway === 'marketing' ? 'border-l-emerald-400 ring-1 ring-emerald-400/40 bg-white/[0.04]' : 'border-l-emerald-400'
          }`}
        >
          {/* Top Identifier */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-4xl font-black font-mono text-emerald-400/40">02</span>
            <span className="tag tag-green font-mono">
              Growth & Ventures
            </span>
          </div>

          <h3 className="header-title text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-2">
            Marketing, Business & Ventures
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Connecting technical capability to market validation. Founder leadership at VCX Mart, professional agency marketing at Fugen WebTech (CivilBook) and AOTMS Global, backed by Google, HubSpot, and Semrush certifications.
          </p>

          {/* Key Domains in Pathway B */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Search className="w-3.5 h-3.5 text-emerald-400" />
                SEO & AI Search (GEO)
              </div>
              <p className="text-[11px] text-zinc-400">Certified Semrush AI OS, Google SERP Diagnostics, Schema</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                Google Ads & Inbound
              </div>
              <p className="text-[11px] text-zinc-400">Certified Google Search, HubSpot Inbound, Smart Bidding</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Rocket className="w-3.5 h-3.5 text-amber-400" />
                Startup Inception
              </div>
              <p className="text-[11px] text-zinc-400">Founder & CEO at VCX Mart (VTCX Inc.), Business Model Design</p>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Campaign Leadership
              </div>
              <p className="text-[11px] text-zinc-400">CivilBook 14-Day GenAI Campaign, EdTech Learner Funnels</p>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="space-y-2 mb-8 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Founder & CEO of VCX Mart: crafting marketplace branding, funnels, and unit economics.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Executed 14-day 'Generative AI in Construction' campaign for CivilBook at Fugen WebTech.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certified in Google Ads Search, HubSpot Inbound, Semrush AI Search & SEO Analytics.</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="#experience"
              onClick={() => {
                onSelectPathway('marketing');
                onFilterDimension('marketer');
              }}
              className="px-5 py-2.5 rounded-full bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Explore Marketing & Ventures</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#certificates"
              className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-all border border-white/10"
            >
              Certificates →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
