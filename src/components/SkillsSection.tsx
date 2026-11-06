import { useState } from 'react';
import { Terminal, TrendingUp, Rocket, Cpu, Check, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Dimension } from '../types';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.dimension === selectedCategory || (selectedCategory === 'engineer' && c.dimension === 'general'));

  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-[var(--saffron)] font-bold block mb-2">
          Technical & Strategic Tooling
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          SKILLS <span className="text-[var(--saffron)]">&</span> TECHNOLOGIES
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Grounded competencies derived from production repositories, certified marketing accreditations, and live venture building. Free of arbitrary percentage scores.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-white text-black font-bold shadow-md'
                : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            All Competencies
          </button>
          <button
            onClick={() => setSelectedCategory('engineer')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              selectedCategory === 'engineer'
                ? 'bg-[var(--saffron)] text-black font-bold shadow-md'
                : 'bg-white/5 text-[var(--saffron)] hover:bg-[var(--saffron)]/10 border border-white/10'
            }`}
          >
            <Terminal className="w-3 h-3" />
            Software Engineering
          </button>
          <button
            onClick={() => setSelectedCategory('marketer')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              selectedCategory === 'marketer'
                ? 'bg-emerald-400 text-black font-bold shadow-md'
                : 'bg-white/5 text-emerald-400 hover:bg-emerald-400/10 border border-white/10'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            Digital Marketing
          </button>
          <button
            onClick={() => setSelectedCategory('entrepreneur')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              selectedCategory === 'entrepreneur'
                ? 'bg-amber-400 text-black font-bold shadow-md'
                : 'bg-white/5 text-amber-400 hover:bg-amber-400/10 border border-white/10'
            }`}
          >
            <Rocket className="w-3 h-3" />
            Entrepreneurship
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-10">
        {filteredCategories.map((cat, idx) => {
          let borderAccent = 'border-l-4 border-l-[var(--saffron)]';
          let tagClass = 'tag-saffron';
          if (cat.accent === 'green') {
            borderAccent = 'border-l-4 border-l-emerald-400';
            tagClass = 'tag-green';
          } else if (cat.accent === 'white') {
            borderAccent = 'border-l-4 border-l-white';
            tagClass = 'tag-white';
          }

          return (
            <div
              key={idx}
              className={`liquid-glass p-8 md:p-10 ${borderAccent}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  {cat.dimension === 'engineer' && <Terminal className="w-5 h-5 text-[var(--saffron)]" />}
                  {cat.dimension === 'marketer' && <TrendingUp className="w-5 h-5 text-emerald-400" />}
                  {cat.dimension === 'entrepreneur' && <Rocket className="w-5 h-5 text-amber-400" />}
                  {cat.dimension === 'general' && <Cpu className="w-5 h-5 text-blue-400" />}
                  <span>{cat.title}</span>
                </h3>
                <span className={`tag ${tagClass} font-mono font-bold uppercase`}>
                  {cat.dimension}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-sm font-bold text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 text-[10px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
