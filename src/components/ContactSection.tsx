import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('Startup Architecture & Engineering Collaboration');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(inquirySubject);
    const body = encodeURIComponent(inquiryMessage || "Hello Varun Teja,\n\nI reviewed your professional archive and would like to connect regarding...");
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="py-28 px-4 max-w-4xl mx-auto">
      <div className="text-center relative z-10">
        
        {/* Accent Tag */}
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-[var(--saffron)] font-bold block mb-3">
          Direct Line & Inquiries
        </span>

        {/* Hero Sync Title */}
        <h2 className="header-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          LET'S <span className="text-[var(--saffron)]">SYNC</span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Open for high-impact technical architecture roles, 0-to-1 startup builds, venture partnerships, and growth marketing collaborations.
        </p>

        {/* Primary Liquid Glass Email Action Card */}
        <div className="liquid-glass p-8 md:p-10 mb-8 border-t border-b border-white/10 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
              Direct Primary Channel
            </span>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-white hover:text-[var(--saffron)] transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                onClick={copyEmail}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Address"}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.secondaryEmail}`}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-all"
              >
                Venture HR: {PERSONAL_INFO.secondaryEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Quick Collaboration Composer */}
        <div className="liquid-glass p-6 md:p-8 text-left mb-10 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[var(--saffron)]" />
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Direct Message Dispatcher
            </h4>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Collaboration Type
              </label>
              <select
                value={inquirySubject}
                onChange={(e) => setInquirySubject(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[var(--saffron)] font-mono"
              >
                <option value="Startup Architecture & Engineering Collaboration" className="bg-zinc-950">
                  Software Engineering & System Architecture
                </option>
                <option value="Growth Marketing & Campaign Strategy" className="bg-zinc-950">
                  Performance Digital Marketing & SEO Strategy
                </option>
                <option value="VCX Mart / Venture Partnership" className="bg-zinc-950">
                  VCX Mart & Commercial Venture Partnership
                </option>
                <option value="Tracxi 2.0 / Logistics System Dialogue" className="bg-zinc-950">
                  Tracxi Logistics Dialogue & Fleet Collaboration
                </option>
                <option value="General Professional Inquiries" className="bg-zinc-950">
                  General Consultation / Academic Research
                </option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Your Context / Brief (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe the initiative or project..."
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--saffron)] font-mono resize-none"
              />
            </div>

            <a
              href={generateMailto()}
              className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-lg"
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>Launch Mail Client</span>
            </a>
          </div>
        </div>

        {/* Social Networks Row (Github & LinkedIn) */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-xs tracking-[0.25em] uppercase font-bold text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-zinc-300" />
            <span>GitHub (@vtcxxager)</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-zinc-300" />
            <span>LinkedIn (Varun Teja)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
