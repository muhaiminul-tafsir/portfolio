import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CERTIFICATION', href: '#certifications', id: 'certifications' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleDownloadResume = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff'],
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-2xl shadow-black/50 border border-white/10'
            : 'bg-slate-900/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Monogram Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                MT
              </span>
            </div>
          </div>
          <div className="hidden sm:block text-left">
            <span className="font-heading font-bold text-sm tracking-tight text-white block">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block -mt-0.5">
              Software & ML
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-white/[0.03] px-3 py-1 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-white/10 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action: Download Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PORTFOLIO_DATA.personal.resumePdf}
            download="Muhaiminul_Islam_Tafsir_Resume.pdf"
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 hover:from-cyan-500/25 hover:to-indigo-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PORTFOLIO_DATA.personal.resumePdf}
            download="Muhaiminul_Islam_Tafsir_Resume.pdf"
            onClick={handleDownloadResume}
            className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Muhaiminul_Islam_Tafsir_Resume.pdf"
                onClick={() => {
                  handleDownloadResume();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium text-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Contact Details</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

