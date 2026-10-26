import React, { useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight, Heart, Brain, BookOpen, Calculator, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectCard3DProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onSelect }) => {
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

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

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

  const getIcon = () => {
    switch (project.iconName) {
      case 'heart':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case 'calculator':
        return <Calculator className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getAccentColor = () => {
    switch (project.iconName) {
      case 'heart':
        return 'from-rose-500/10 to-transparent border-rose-500/20 text-rose-400';
      case 'brain':
        return 'from-purple-500/10 to-transparent border-purple-500/20 text-purple-400';
      case 'book':
        return 'from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400';
      case 'calculator':
        return 'from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-400';
    }
  };

  return (
    <div className="relative perspective-[1000px] h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative h-full flex flex-col justify-between rounded-2xl p-6 bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden group cursor-pointer"
        onClick={() => onSelect(project)}
      >
        {/* Dynamic Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: isHovered ? 0.12 : 0,
            background: `radial-gradient(circle 300px at ${glareX}% ${glareY}%, rgba(255,255,255,0.7), transparent 70%)`,
          }}
        />

        {/* Top Header */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${getAccentColor()} border backdrop-blur-md`}>
              {getIcon()}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                {project.categoryLabel.split('&')[0]}
              </span>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source on GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-slate-800/40 text-slate-400 font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
