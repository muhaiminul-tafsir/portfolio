import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            {project.categoryLabel}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-3 leading-snug">
            {project.title}
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">Role: {project.role}</p>
        </div>

        {/* Project Description */}
        <div className="space-y-4 my-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>{project.fullDescription}</p>
        </div>

        {/* Highlights & Contributions */}
        <div className="my-6">
          <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Contributions & Technical Achievements</span>
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="my-6">
          <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Technologies & Tools Applied</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-cyan-200 flex items-center gap-1.5"
              >
                <Code2 className="w-3 h-3 text-cyan-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition-colors border border-white/10"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
