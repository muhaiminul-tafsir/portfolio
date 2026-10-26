import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, CheckCircle2, Calendar, Hash, Building2 } from 'lucide-react';
import type { CertificateItem } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#f59e0b', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl z-10 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>{certificate.badge}</span>
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Credential</span>
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
            {certificate.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{certificate.conductedBy}</span>
          </p>
        </div>

        {/* High-Resolution Certificate Document Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner group">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto object-contain rounded-2xl"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </div>

        {/* Certificate Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Program & Issuer</span>
            <p className="text-xs font-semibold text-slate-200">{certificate.program}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{certificate.issuer}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-cyan-400" />
              <span>Duration & Issue Date</span>
            </span>
            <p className="text-xs font-semibold text-slate-200">{certificate.duration}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Issued: {certificate.dateOfIssue}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 flex items-center gap-1">
              <Hash className="w-3 h-3 text-amber-400" />
              <span>Official Serial Number</span>
            </span>
            <p className="text-xs font-mono font-semibold text-amber-300 break-all">{certificate.serialNumber}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Scan QR on cert to verify</p>
          </div>
        </div>

        {/* Skills Tagged */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Competencies Verified:</span>
          <div className="flex flex-wrap gap-1.5">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={certificate.pdf}
              download="EDGE_Python_ML_Certificate_Muhaiminul_Islam_Tafsir.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Certificate (PDF)</span>
            </a>

            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white text-sm font-medium border border-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Open PDF in Tab</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition-colors border border-white/10 cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
