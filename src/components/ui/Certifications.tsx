import React, { useState } from 'react';
import { Award, Download, CheckCircle2, Eye, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { CertificateItem } from '../../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import confetti from 'canvas-confetti';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleDownloadPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#38bdf8', '#818cf8', '#34d399', '#ffffff'],
    });
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATION & CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Government Certified <span className="gradient-accent">& Specialized Training</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Click on the certificate to view high-resolution credentials, or download the official PDF verified by Bangladesh Computer Council & Jagannath University.
          </p>
        </div>

        {/* Certificate Card Showcase */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/25 hover:border-amber-400/50 transition-all duration-300 shadow-2xl shadow-black/50 hover:shadow-amber-500/10 cursor-pointer group relative overflow-hidden"
            >
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/08 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Column: Visual Certificate Preview (6 cols) */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group-hover:border-amber-500/40 transition-all duration-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Hover Overlay with "Click to View" */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Click to View Full Certificate</span>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
                    <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Official Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Right Column: Details & Actions (6 cols) */}
                <div className="lg:col-span-6 space-y-5 text-left">
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Serial: {cert.serialNumber}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-2 mt-2">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cert.conductedBy}</span>
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Program & Authority</span>
                      <span className="text-xs font-semibold text-slate-200 block mt-0.5">{cert.program}</span>
                      <span className="text-[10px] text-slate-400">{cert.issuer}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Duration & Date</span>
                      <span className="text-xs font-semibold text-slate-200 block mt-0.5">{cert.duration}</span>
                      <span className="text-[10px] text-slate-400">Issued: {cert.dateOfIssue}</span>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-amber-200/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide border border-white/10 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-amber-400" />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.pdf}
                      download="EDGE_Python_ML_Certificate_Muhaiminul_Islam_Tafsir.pdf"
                      onClick={handleDownloadPdf}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-orange-400 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Certificate (PDF)</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Viewer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};


