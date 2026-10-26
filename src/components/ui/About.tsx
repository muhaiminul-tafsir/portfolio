import React from 'react';
import { GraduationCap, Brain, Building2, Users, Globe, CheckCircle2 } from 'lucide-react';
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
            Academic Rigor Meets <span className="gradient-accent">Industry Engineering</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Jr. Software Engineer at 3s Softech ltd and B.Sc. in CSE graduate from IUBAT (Class of 2026, CGPA 3.29/4.00), building high-reliability systems and machine learning models.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Industry Engineering at 3s Softech */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Jr. Software Engineer • 3s Softech ltd
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Working on the <span className="text-white font-medium">Software Maintenance System</span> designed for tracking and managing software issues. Responsible for identifying and fixing bugs, improving system performance, and implementing feature updates across active modules.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>System Reliability & Performance Optimization</span>
            </div>
          </div>

          {/* Card 2: Academic Foundation */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              B.Sc. in CSE from <span className="text-cyan-300 font-medium">IUBAT — International University of Business Agriculture and Technology</span> (Passing Year 2026). Achieved a strong academic record with <span className="text-emerald-400 font-semibold">CGPA 3.29 / 4.00</span>.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Specializing in Software Engineering & ML</span>
            </div>
          </div>

          {/* Card 3: Machine Learning & Predictive Analytics */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Applied Machine Learning & AI
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Hands-on engineering in predictive modeling on clinical datasets (heart attack early risk detection) and psychometric survey data (depression, anxiety, and stress classification among university students).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Statistical Modeling & Clinical Analytics</span>
            </div>
          </div>

          {/* Card 4: Team Collaboration & Problem Solving */}
          <div className="glass-card rounded-3xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Problem Solving & Team Collaboration
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Proven ability to collaborate within software teams, isolate system bottlenecks, write maintainable code in React.js, JavaScript, and Python, and execute continuous system improvements.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Agile Execution & Fast Learning</span>
            </div>
          </div>

        </div>

        {/* Lower Banner: Languages & Verified Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          
          {/* Languages spoken */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Languages & Communication</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <p className="font-heading font-bold text-white text-base">{lang.name}</p>
                  <p className="text-xs font-mono text-cyan-300 mt-1">{lang.proficiency}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Effective technical communication and team collaboration for agile development and cross-functional engineering workflows.
            </p>
          </div>

          {/* Current Employment & Verified Status */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Industry Verified Candidate</span>
            </span>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-full mb-3 text-center">
              <p className="font-heading font-bold text-white text-base">3s Softech ltd</p>
              <p className="text-xs font-mono text-emerald-300 mt-0.5">Jr. Software Engineer • 2026</p>
            </div>
            <p className="font-heading font-semibold text-white text-sm">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              B.Sc. in CSE • CGPA 3.29 / 4.00 (IUBAT)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
