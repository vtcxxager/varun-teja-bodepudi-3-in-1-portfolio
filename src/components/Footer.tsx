import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/10 relative z-10 px-4 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="header-title text-base font-bold tracking-wider text-white">
            BODEPUDI <span className="text-[var(--saffron)]">VARUN</span> TEJA
          </div>
          <div className="text-[10px] tracking-[0.25em] font-mono uppercase text-zinc-400 mt-1">
            ONE PERSON · THREE PROFESSIONAL DIMENSIONS
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-widest uppercase font-mono text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#pathways" className="hover:text-white transition-colors">Pathways</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#proposals" className="hover:text-white transition-colors">Proposals</a>
          <a href="#certificates" className="hover:text-white transition-colors">Certifications</a>
          <a href="#connect" className="hover:text-white transition-colors">Connect</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
            © 2026 Bodepudi Varun Teja
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
