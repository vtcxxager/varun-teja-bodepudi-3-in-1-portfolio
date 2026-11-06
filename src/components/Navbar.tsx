import { useState, useEffect } from 'react';
import { Menu, X, Terminal, TrendingUp, Rocket, Layers } from 'lucide-react';
import { Dimension } from '../types';

interface NavbarProps {
  activeDimension: Dimension | 'all';
  onSelectDimension: (dim: Dimension | 'all') => void;
}

export function Navbar({ activeDimension, onSelectDimension }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Pathways', href: '#pathways' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Proposals', href: '#proposals' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Name */}
          <a 
            href="#hero" 
            className="group flex flex-col pointer-events-auto"
          >
            <span className="header-title text-base sm:text-lg font-bold tracking-wider text-white transition-colors group-hover:text-white">
              BODEPUDI <span className="text-[var(--saffron)]">VARUN</span> TEJA
            </span>
            <span className="text-[8px] tracking-[0.35em] uppercase text-zinc-400 font-mono">
              3 Dimensions · 1 Identity
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[11px] tracking-[0.25em] uppercase font-bold text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Dimension Quick Switcher */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => onSelectDimension('all')}
              className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all flex items-center gap-1.5 ${
                activeDimension === 'all'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              All
            </button>
            <button
              onClick={() => onSelectDimension('engineer')}
              className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all flex items-center gap-1.5 ${
                activeDimension === 'engineer'
                  ? 'bg-[var(--saffron)] text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-[var(--saffron)]'
              }`}
            >
              <Terminal className="w-3 h-3" />
              Engineer
            </button>
            <button
              onClick={() => onSelectDimension('marketer')}
              className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all flex items-center gap-1.5 ${
                activeDimension === 'marketer'
                  ? 'bg-[#34d399] text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-[#34d399]'
              }`}
            >
              <TrendingUp className="w-3 h-3" />
              Marketer
            </button>
            <button
              onClick={() => onSelectDimension('entrepreneur')}
              className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all flex items-center gap-1.5 ${
                activeDimension === 'entrepreneur'
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-amber-400'
              }`}
            >
              <Rocket className="w-3 h-3" />
              Founder
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl xl:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          {/* Dimension Switcher inside Mobile */}
          <div className="mb-6 p-2 bg-white/5 border border-white/10 rounded-2xl">
            <span className="text-[9px] tracking-widest uppercase text-zinc-500 font-bold block mb-2 px-2">
              Focus Dimension
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { onSelectDimension('all'); setMobileMenuOpen(false); }}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  activeDimension === 'all' ? 'bg-white text-black' : 'bg-white/5 text-zinc-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                All Dimensions
              </button>
              <button
                onClick={() => { onSelectDimension('engineer'); setMobileMenuOpen(false); }}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  activeDimension === 'engineer' ? 'bg-[var(--saffron)] text-black' : 'bg-white/5 text-[var(--saffron)]'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Engineer
              </button>
              <button
                onClick={() => { onSelectDimension('marketer'); setMobileMenuOpen(false); }}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  activeDimension === 'marketer' ? 'bg-[#34d399] text-black' : 'bg-white/5 text-[#34d399]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Marketer
              </button>
              <button
                onClick={() => { onSelectDimension('entrepreneur'); setMobileMenuOpen(false); }}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                  activeDimension === 'entrepreneur' ? 'bg-amber-400 text-black' : 'bg-white/5 text-amber-400'
                }`}
              >
                <Rocket className="w-3.5 h-3.5" />
                Entrepreneur
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-wider font-semibold text-zinc-200 hover:text-[var(--saffron)] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-600 font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-3">
            <span className="text-xs text-zinc-500 font-mono">Bodepudi Varun Teja · Portfolio Archive</span>
            <a
              href="mailto:varuntejabodepudi@gmail.com"
              className="text-xs text-[var(--saffron)] font-bold tracking-wider"
            >
              varuntejabodepudi@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
