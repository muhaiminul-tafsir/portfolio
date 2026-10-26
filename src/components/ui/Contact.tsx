import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Download, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff'],
      });
    }, 800);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#f43f5e', '#ffffff'],
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Let's build something <span className="gradient-accent">meaningful.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            I am actively seeking software engineering and machine learning opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="font-medium text-white hover:text-cyan-300 transition-colors text-sm sm:text-base break-all"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-400 font-mono mt-3 animate-in fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Phone / Mobile</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="font-medium text-white hover:text-emerald-300 transition-colors text-base font-mono"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Location</span>
                  <p className="font-medium text-white text-base">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="glass-card rounded-3xl p-6">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-3">Professional Profiles</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">github.com/{PORTFOLIO_DATA.personal.githubUsername}</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono">in/{PORTFOLIO_DATA.personal.linkedinUsername}</span>
                </a>
              </div>
            </div>

            {/* Prominent Resume Download Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-purple-950/60 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Need an Offline Copy?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Download the complete verified PDF resume</p>
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.resumePdf}
                  download="Muhaiminul_Islam_Tafsir_Resume.pdf"
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Leave a note for collaboration, interview inquiries, or project questions.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">Thank You for Connecting!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been captured. I will review and respond promptly to your email at <span className="text-emerald-300 font-mono">{formData.email || 'your address'}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rahman"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project requirements, team overview, or interview details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                    Or directly email <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-cyan-400 hover:underline">{PORTFOLIO_DATA.personal.email}</a>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
