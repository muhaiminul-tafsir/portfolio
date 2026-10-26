import React from 'react';
import { GraduationCap, Award, UserCheck, Mail, Phone, Calendar, Star, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Education, <span className="gradient-accent">Certifications & References</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Academic achievements, government technical certification, and esteemed department chair references.
          </p>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {edu.institution}
                </h3>

                <p className="text-sm font-medium text-slate-300 mt-2">
                  {edu.degree}
                </p>

                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mt-3">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    <span>{edu.gpa}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-400 mt-5 pt-4 border-t border-white/5 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Highlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-12 border border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Government Certified Training
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-2">
                  Python With Machine Learning
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Enhancing Digital Government & Economy (EDGE) Project
                </p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl">
                  Comprehensive training in advanced Python programming, machine learning model architectures, and applied data systems.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-center shrink-0">
              <span className="text-xs font-mono text-emerald-400 font-semibold block">
                Official Credential
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                ICT Division Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* Academic Faculty References */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <UserCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading font-bold text-xl text-white">
              Academic Faculty References
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.references.map((ref, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white">
                      {ref.name}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-300 mt-0.5">
                      {ref.title}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{ref.institution}</span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <UserCheck className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{ref.phone}</span>
                  </a>
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{ref.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
