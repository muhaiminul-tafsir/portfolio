import React, { useState } from 'react';
import { Cpu, Terminal, GitBranch, Users, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'personal'>('technical');

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
            Technical Stack & <span className="gradient-accent">Personal Strengths</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Curated strictly from authentic resume competencies across software engineering, machine learning pipelines, and collaborative execution.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical & Engineering Stack
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Personal & Leadership Skills
            </button>
          </div>
        </div>

        {activeTab === 'technical' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            
            {/* Box 1: Programming Languages */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Programming Languages</h3>
                  <p className="text-xs font-mono text-slate-400">Core Languages</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {PORTFOLIO_DATA.skills.programming.map((p, i) => (
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

            {/* Box 2: Machine Learning & AI */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Machine Learning & AI</h3>
                  <p className="text-xs font-mono text-slate-400">Applied Intelligence</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {PORTFOLIO_DATA.skills.machineLearning.map((ml, i) => (
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

            {/* Box 3: Core Engineering */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Core Engineering</h3>
                  <p className="text-xs font-mono text-slate-400">Fundamentals & Architecture</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {PORTFOLIO_DATA.skills.coreEngineering.map((eng, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {eng.name}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-blue-300">
                      {eng.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4: Developer Tools & Platforms */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden group md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Development Tools & Version Control</h3>
                  <p className="text-xs font-mono text-slate-400">Workflow & Environments</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {PORTFOLIO_DATA.skills.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-800/40 border border-white/5 text-center hover:border-emerald-500/30 transition-colors"
                  >
                    <p className="font-heading font-bold text-white text-base">{tool.name}</p>
                    <p className="text-xs font-mono text-emerald-300 mt-1">{tool.level}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Personal & Leadership Skills */
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-400" />
                <span>Interpersonal, Collaborative & Analytical Abilities</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As detailed in the candidate resume, these personal competencies enable high-leverage teamwork, rapid onboarding onto complex codebases, and reliable project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.skills.personal.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-purple-500/30 flex items-center gap-3 transition-all hover:scale-[1.02]"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white text-sm block">{skill}</span>
                    <span className="text-[10px] font-mono text-slate-400">Verified Competency</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
