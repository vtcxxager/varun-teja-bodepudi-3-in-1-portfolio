import { useState } from 'react';
import { Calendar, Terminal, TrendingUp, Rocket, GraduationCap, Award, Compass } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/portfolioData';
import { TimelineEntry } from '../types';

export function TimelineSection() {
  const [filter, setFilter] = useState<string>('all');

  const filteredEvents = filter === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.dimension === filter || e.dimension === 'all');

  const getCategoryIcon = (category: TimelineEntry['category']) => {
    switch (category) {
      case 'education': return <GraduationCap className="w-4 h-4 text-blue-400" />;
      case 'venture': return <Rocket className="w-4 h-4 text-amber-400" />;
      case 'experience': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'certification': return <Award className="w-4 h-4 text-[var(--saffron)]" />;
      default: return <Compass className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-white font-bold block mb-2">
          Chronological Evolution
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          JOURNEY <span className="text-white">&</span> MILESTONES
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The factual timeline tracing inception in 2019, academic foundation in AI/ML, founder initiatives, verified agency engagements, and industry certifications.
        </p>

        {/* Filter Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-white text-black font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            Complete Timeline
          </button>
          <button
            onClick={() => setFilter('engineer')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              filter === 'engineer'
                ? 'bg-[var(--saffron)] text-black font-bold'
                : 'bg-white/5 text-[var(--saffron)]'
            }`}
          >
            <Terminal className="w-3 h-3" />
            Engineering & Education
          </button>
          <button
            onClick={() => setFilter('marketer')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              filter === 'marketer'
                ? 'bg-emerald-400 text-black font-bold'
                : 'bg-white/5 text-emerald-400'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            Marketing & Credentials
          </button>
          <button
            onClick={() => setFilter('entrepreneur')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
              filter === 'entrepreneur'
                ? 'bg-amber-400 text-black font-bold'
                : 'bg-white/5 text-amber-400'
            }`}
          >
            <Rocket className="w-3 h-3" />
            Ventures
          </button>
        </div>
      </div>

      {/* Timeline Tree Container */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[var(--saffron)] before:via-white before:to-emerald-500">
        <div className="space-y-8">
          {filteredEvents.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-4 w-7 h-7 rounded-full bg-black border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--saffron)] transition-all shadow-lg">
                {getCategoryIcon(event.category)}
              </div>

              {/* Event Content Card */}
              <div className="liquid-glass p-6 sm:p-8 hover:bg-white/[0.04] transition-all border border-white/10 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xl sm:text-2xl font-black font-mono text-white">
                    {event.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-100 mb-2">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
