import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    MT
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {PORTFOLIO_DATA.personal.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Computer Science & Engineering graduate specializing in applied machine learning, software engineering, and data-driven systems.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Home</a>
              <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">About Me</a>
              <a href="#experience" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Experience</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Featured Work</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Skills</a>
              <a href="#education" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Education</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-300 transition-colors py-1">Contact</a>
              <a href={PORTFOLIO_DATA.personal.resumePdf} download className="text-cyan-400 hover:underline transition-colors py-1">Download CV</a>
            </div>
          </div>

          {/* Quick Jump & Architecture (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Back to Top
              </h4>
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all group cursor-pointer"
              >
                <span>Scroll to Top</span>
                <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>3D Portfolio</span>
              </span>
              <span>React 19 • Three.js • Vite</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for high-impact software engineering & ML careers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
