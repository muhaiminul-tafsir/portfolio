import React, { useRef, useState } from 'react';
import { Briefcase, Building2, CheckCircle2, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const HeroCard3D: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto perspective-[1200px]">
      {/* Outer ambient glow behind portrait */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Floating 3D interactive Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative rounded-3xl p-5 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden group select-none"
      >
        {/* Dynamic Specular Glare Effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: `radial-gradient(circle 350px at ${glareX}% ${glareY}%, rgba(255,255,255,0.8), transparent 70%)`,
          }}
        />

        {/* Top Status Bar Inside Card */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-wide text-emerald-300 uppercase">
              3s Softech ltd • 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
            <span>CSE (IUBAT)</span>
          </div>
        </div>

        {/* Professional Portrait Frame with 3D Depth */}
        <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden border border-white/15 shadow-inner bg-slate-950/80">
          <img
            src={PORTFOLIO_DATA.personal.photo}
            alt={PORTFOLIO_DATA.personal.name}
            className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Cinematic subtle gradient overlays on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

          {/* In-photo floating mini badge */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-200">Jr. Software Engineer</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Card Identity */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-lg text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-xs text-cyan-400 flex items-center gap-1.5 mt-0.5">
              <span>Jr. Software Engineer at 3s Softech ltd</span>
            </p>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-right">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">CGPA</span>
            <span className="text-xs font-bold text-emerald-400 font-mono">3.29 / 4.00</span>
          </div>
        </div>
      </div>

      {/* Floating 3D Accent Pill 1 (Left) */}
      <div
        className="hidden md:flex absolute -left-8 top-1/4 -translate-y-1/2 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl animate-float pointer-events-none"
        style={{ animationDelay: '0s' }}
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          <Building2 className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-mono uppercase">Current Role</p>
          <p className="text-xs font-bold text-slate-200">3s Softech ltd</p>
        </div>
      </div>

      {/* Floating 3D Accent Pill 2 (Right) */}
      <div
        className="hidden md:flex absolute -right-8 bottom-1/4 translate-y-1/2 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-xl shadow-xl animate-float pointer-events-none"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-mono uppercase">Degree</p>
          <p className="text-xs font-bold text-slate-200">B.Sc. in CSE (2026)</p>
        </div>
      </div>
    </div>
  );
};
