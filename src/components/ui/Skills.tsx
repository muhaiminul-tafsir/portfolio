import React from 'react';
import { Cpu, GitBranch, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SKILLS & CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Technical Stack & <span className="gradient-accent">Engineering Strengths</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Curated strictly from the latest resume competencies across modern web engineering, machine learning pipelines, and team collaboration.
          </p>
        </div>

        {/* 7 Core Resume Skills Featured Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Core Competencies (From Resume)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.skills.coreSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 hover:border-cyan-500/40 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {skill.category}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>

                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Deep Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Web & Programming */}
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Frontend & Languages</h3>
                <p className="text-xs font-mono text-slate-400">Web Application Stack</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.skills.technicalCategorized.frontendAndLanguages.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {p.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300">
                    {p.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Machine Learning & Analytics */}
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Machine Learning</h3>
                <p className="text-xs font-mono text-slate-400">Predictive Analytics</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.skills.technicalCategorized.machineLearningAndAI.map((ml, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {ml.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300">
                    {ml.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Version Control & Execution */}
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Engineering & Tools</h3>
                <p className="text-xs font-mono text-slate-400">Maintenance & Collaboration</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.skills.technicalCategorized.toolsAndMethods.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {tool.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-300">
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

