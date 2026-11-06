import { useState } from 'react';
import { BookOpen, FileText, Download, Lock, CheckCircle2, Shield, Eye, ArrowUpRight } from 'lucide-react';
import { RESEARCH_DOCUMENTS } from '../data/portfolioData';
import { ResearchItem } from '../types';

export function ResearchLibrarySection() {
  const [selectedDoc, setSelectedDoc] = useState<ResearchItem | null>(null);

  return (
    <section id="research" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-purple-400 font-bold block mb-2">
          Intellectual Property & Specifications
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          RESEARCH <span className="text-purple-400">&</span> DOCUMENTATION
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Technical architecture blueprints, campaign retrospectives, and theoretical proposals documented across my engineering and marketing initiatives.
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {RESEARCH_DOCUMENTS.map((doc) => {
          const isPublic = doc.status === 'Public Archive';
          const isConfidential = doc.status === 'Confidential / On Request';

          return (
            <div
              key={doc.id}
              className="liquid-glass p-8 border-l-4 border-l-purple-500 interactive-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="tag tag-purple font-mono font-bold">
                    {doc.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    {isPublic ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Public Access
                      </span>
                    ) : isConfidential ? (
                      <span className="text-amber-400 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" /> Confidential
                      </span>
                    ) : (
                      <span className="text-zinc-400 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> Proposal
                      </span>
                    )}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-6">
                  {doc.abstract}
                </p>

                {/* Key Findings Preview */}
                <div className="space-y-2 mb-6">
                  {doc.keyFindings.map((finding, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-purple-400 font-mono font-bold">▪</span>
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {doc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Detail Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="liquid-glass bg-zinc-950 border border-white/20 p-8 max-w-xl w-full rounded-3xl relative">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-zinc-300 hover:text-white"
            >
              ✕
            </button>

            <span className="tag tag-purple font-mono mb-3 inline-block">
              {selectedDoc.category} · {selectedDoc.date}
            </span>

            <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
              {selectedDoc.title}
            </h3>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                Executive Abstract:
              </span>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                {selectedDoc.abstract}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block mb-2">
                Core Architectural Conclusions:
              </span>
              <div className="space-y-2">
                {selectedDoc.keyFindings.map((kf, i) => (
                  <div key={i} className="p-3 rounded-xl bg-purple-500/[0.03] border border-purple-500/15 text-xs text-zinc-200 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{kf}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="mailto:varuntejabodepudi@gmail.com?subject=Document Access Request: "
                className="flex-1 py-2.5 rounded-full bg-purple-500 text-white font-bold text-xs uppercase tracking-wider text-center hover:bg-purple-600 transition-all"
              >
                Request Full Unredacted Paper
              </a>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
