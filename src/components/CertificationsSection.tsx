import { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, FileCheck, Info } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certificate } from '../types';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-emerald-400 font-bold block mb-2">
          Industry Validations
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          CREDENTIALS <span className="text-emerald-400">&</span> CERTIFICATIONS
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Verified industry accreditations across performance search advertising, modern AI search mechanics, inbound strategy, and technical SEO analytics.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert) => {
          let borderAccent = 'border-l-4 border-l-emerald-400';
          let tagClass = 'tag-green';
          if (cert.badgeAccent === 'saffron') {
            borderAccent = 'border-l-4 border-l-[var(--saffron)]';
            tagClass = 'tag-saffron';
          } else if (cert.badgeAccent === 'white') {
            borderAccent = 'border-l-4 border-l-white';
            tagClass = 'tag-white';
          }

          return (
            <div
              key={cert.id}
              className={`liquid-glass p-8 ${borderAccent} interactive-card flex flex-col justify-between`}
            >
              <div>
                {/* Top Issuer and Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`tag ${tagClass} font-mono font-bold flex items-center gap-1.5`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-4 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-zinc-500" />
                  <span>Issuing Body: <strong className="text-zinc-200">{cert.issuer}</strong></span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Covered Pills */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                    Competencies Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Credential ID & Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="text-zinc-400 text-[11px]">
                  <span className="text-zinc-500">ID: </span>
                  <span className="text-zinc-300">{cert.credentialId || 'Available on file'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-white text-black font-bold flex items-center gap-1 hover:bg-zinc-200 transition-all"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="liquid-glass bg-zinc-950 border border-white/20 p-8 max-w-lg w-full rounded-3xl relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-zinc-300 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="tag tag-green font-mono">Verified Credential</span>
              <span className="text-xs font-mono text-zinc-400">{selectedCert.issueDate}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
            <p className="text-xs font-mono text-[var(--saffron)] mb-4">{selectedCert.issuer}</p>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl mb-6 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Candidate:</span>
                <span className="text-white font-bold">BODEPUDI VARUN TEJA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Issuer Authority:</span>
                <span className="text-zinc-300">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Record Status:</span>
                <span className="text-emerald-400 font-bold">Active & Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Verification Link:</span>
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--saffron)] hover:underline flex items-center gap-1"
                >
                  Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
            >
              Close Record
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
