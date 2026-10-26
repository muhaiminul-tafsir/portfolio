import React from 'react';
import { GraduationCap, Brain, Code2, Users, Globe, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Academic Rigor Meets <span className="gradient-accent">Practical Engineering</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            From the computer science department at IUBAT to applied machine learning research and real-world software architecture.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Academic Foundation */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Currently pursuing a B.Sc. in CSE from <span className="text-cyan-300 font-medium">IUBAT — International University of Business Agriculture and Technology</span> (2022 – Present). Grounded in strong computer science fundamentals, data structures, algorithms, and modular software design.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Specializing in Software Engineering & ML</span>
            </div>
          </div>

          {/* Card 2: ML Specialization */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Applied Machine Learning & AI
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Proven capability in developing predictive classification models on clinical healthcare datasets (such as heart attack risk assessment) and multivariate behavioral metrics (student mental health distress patterns).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Statistical Analysis & Predictive Modeling</span>
            </div>
          </div>

          {/* Card 3: Software Engineering */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Full-Stack & Desktop Systems
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Built end-to-end applications from the ground up: including <span className="text-white font-medium">Quick Tutor</span> (an interactive online learning platform with real-time tutor-student interaction) and desktop GUI utilities with PyQt5.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>API Integration & System Architecture</span>
            </div>
          </div>

          {/* Card 4: Professional Work Ethic */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Problem-Solving & Teamwork
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Possessing strong communication, fast learning agility, management skills, and meticulous attention to detail. Driven by a deep commitment to delivering dependable, high-quality solutions to industry problems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Continuous Learning & Collaboration</span>
            </div>
          </div>

        </div>

        {/* Lower Banner: Languages & Signature Verification */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          
          {/* Languages spoken */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Languages & Communication</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <p className="font-heading font-bold text-white text-sm sm:text-base">{lang.name}</p>
                  <p className="text-[11px] font-mono text-cyan-300 mt-0.5">{lang.proficiency}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Equipped with professional communication and negotiation skills for global teamwork and technical cross-functional collaboration.
            </p>
          </div>

          {/* Authentic Signature & Seal */}
          <div className="md:col-span-5 p-5 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Candidate Credentials</span>
            </span>
            <div className="h-16 w-44 bg-white/[0.03] rounded-xl p-2 border border-white/10 flex items-center justify-center my-2">
              <img
                src={PORTFOLIO_DATA.personal.signature}
                alt="Signature of Muhaiminul Islam Tafsir"
                className="max-h-full max-w-full object-contain filter invert contrast-125"
              />
            </div>
            <p className="font-heading font-semibold text-white text-xs mt-1">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              Software Engineer & Machine Learning
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
