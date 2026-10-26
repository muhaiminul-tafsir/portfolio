import React, { useState } from 'react';
import { Layers, Sparkles, Code2, Brain } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';
import { ProjectCard3D } from '../3d/ProjectCard3D';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ml' | 'se'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Production Systems & <span className="gradient-accent">Machine Learning</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Projects featured on the latest resume engineered with React.js, JavaScript, Python, Scikit-Learn, and applied statistical modeling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'ml'
                  ? 'bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Machine Learning (2)</span>
            </button>
            <button
              onClick={() => setFilter('se')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'se'
                  ? 'bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Software Apps (1)</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Explore More Repositories on GitHub
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                github.com/{PORTFOLIO_DATA.personal.githubUsername} • Active code repositories
              </p>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/10 transition-colors flex items-center gap-2"
          >
            <span>Visit GitHub Profile</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
