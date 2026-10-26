import React from 'react';
import { ArrowDown, Download, Mail, MapPin, ChevronRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { HeroCard3D } from '../3d/HeroCard3D';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const triggerDownloadCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#f43f5e', '#ffffff'],
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
                B.Sc. in CSE • Machine Learning & Software Engineering
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Muhaiminul <br />
                <span className="gradient-accent">Islam Tafsir</span>
              </h1>
              
              <div className="flex items-center gap-2 mt-4 text-slate-300 font-mono text-sm sm:text-base">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">{PORTFOLIO_DATA.personal.title}</span>
              </div>
            </div>

            {/* Short Bio strictly from resume */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              Dedicated professional with an academic background in Computer Science and Engineering from <span className="text-white font-medium">IUBAT University</span>, specializing in <span className="text-cyan-300 font-medium">software engineering</span> and <span className="text-purple-300 font-medium">machine learning</span>. Hands-on experience developing real-world applications, predictive models, and algorithms to solve impactful challenges.
            </p>

            {/* Location & Quick Contact chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Muhaiminul_Islam_Tafsir_Resume.pdf"
                onClick={triggerDownloadCelebration}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display font-bold text-lg sm:text-xl text-white">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Interactive Hero Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroCard3D />
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>DISCOVER MORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
