import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-blue-400 font-bold block mb-2">
          Academic Foundation
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          EDUCATION <span className="text-blue-400">&</span> FORMATION
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Undergraduate technical foundation in Computer Science, Artificial Intelligence, and Machine Learning.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="liquid-glass p-8 md:p-12 border-l-4 border-l-blue-500 max-w-4xl mx-auto interactive-card">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="tag tag-blue font-mono font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Active Degree Program
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {EDUCATION_DATA.currentStatus}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {EDUCATION_DATA.institution}
            </h3>

            <div className="text-base sm:text-lg font-semibold text-[var(--saffron)] font-mono">
              {EDUCATION_DATA.degree} — {EDUCATION_DATA.major}
            </div>
            <div className="text-sm text-emerald-400 font-mono mt-1">
              Specialization: {EDUCATION_DATA.specialization}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs font-mono text-zinc-400 shrink-0">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-white font-bold">{EDUCATION_DATA.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-500" />
              <span>{EDUCATION_DATA.location}</span>
            </div>
          </div>
        </div>

        {/* Core Subject Concentrations */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            Core Academic Curricula & Engineering Disciplines:
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {EDUCATION_DATA.keyFocus.map((focus, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-3 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Program Highlights & Academic Context:
          </h4>
          <ul className="space-y-2 text-xs text-zinc-300">
            {EDUCATION_DATA.academicHighlights.map((hl, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2">
                <span className="text-[var(--saffron)] font-mono font-bold">→</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
