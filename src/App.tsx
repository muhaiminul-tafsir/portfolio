import React, { useState, useEffect } from 'react';
import { HeroBackground3D } from './components/3d/HeroBackground3D';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/ui/Hero';
import { About } from './components/ui/About';
import { Experience } from './components/ui/Experience';
import { Projects } from './components/ui/Projects';
import { Skills } from './components/ui/Skills';
import { Certifications } from './components/ui/Certifications';
import { Education } from './components/ui/Education';
import { Contact } from './components/ui/Contact';
import { Footer } from './components/ui/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Track active section for navigation
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop - windowHeight * 0.35;
          if (scrollY >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom subtle glowing cursor follower for desktop
  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Subtle Desktop Cursor Glow Aura */}
      {!isTouchDevice && (
        <div
          className="fixed pointer-events-none z-30 w-72 h-72 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(129, 140, 248, 0.2) 50%, transparent 80%)',
          }}
        />
      )}

      {/* 3D WebGL Background Scene */}
      <HeroBackground3D />

      {/* Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
