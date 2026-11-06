import { Briefcase, Calendar, MapPin, Building2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenProjectDetail?: (projectId: string) => void;
}

export function ExperienceSection({ onOpenProjectDetail }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-emerald-400 font-bold block mb-2">
          Verified Track Record
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          PROFESSIONAL <span className="text-emerald-400">EXPERIENCE</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Documented professional engagements across founder leadership, employer agency execution, and digital growth. Verified from authoritative resume records.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp) => {
          const isFounder = exp.type === 'Venture / Leadership';
          const accentBorder = isFounder ? 'border-l-[var(--saffron)]' : 'border-l-emerald-400';
          const badgeClass = isFounder ? 'tag-saffron' : 'tag-green';

          return (
            <div
              key={exp.id}
              className={`liquid-glass p-8 md:p-10 border-l-4 ${accentBorder} interactive-card`}
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`tag ${badgeClass} font-mono font-bold`}>
                      {exp.type}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {exp.ownershipContext}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-zinc-400" />
                    {exp.organization}
                  </h3>
                  <div className="text-sm md:text-base font-semibold text-zinc-300 mt-1">
                    {exp.position}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-2 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                    {exp.duration && <span className="text-zinc-500">({exp.duration})</span>}
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Core Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                  Key Responsibilities & Contributions:
                </h4>
                <div className="grid md:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Associated */}
              {exp.projectsAssociated && exp.projectsAssociated.length > 0 && (
                <div className="mb-6 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                    Associated Platform Initiatives & Campaigns:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.projectsAssociated.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-xs font-medium flex items-center gap-1"
                      >
                        <Briefcase className="w-3 h-3 text-[var(--saffron)]" />
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-400 text-[11px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {isFounder && (
                  <span className="text-xs text-[var(--saffron)] font-mono font-semibold flex items-center gap-1">
                    VTCX Incorporate Ecosystem
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
