import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE & TIMELINE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Industry Engineering <span className="gradient-accent">& Academic Systems</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Hands-on technical implementation across industry software maintenance at 3s Softech ltd and academic machine learning research at IUBAT.
          </p>
        </div>

        {/* Visual Timeline Layout */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 ${
                exp.isCurrent ? 'border-emerald-400' : 'border-cyan-400'
              } flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                <span className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
              </div>

              {/* Card Container */}
              <div className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                exp.isCurrent ? 'border-emerald-500/30 hover:border-emerald-500/50' : 'hover:border-cyan-500/30'
              }`}>
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                        exp.isCurrent
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                          : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      }`}>
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-2">
                      {exp.role}
                    </h3>
                    
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-white font-semibold">{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Responsibilities & Technical Contributions</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.keyAchievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies & Competencies:</span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/10 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

