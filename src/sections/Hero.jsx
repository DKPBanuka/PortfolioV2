import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import MatrixRain from '../components/MatrixRain';
import heroBg from '../assets/hero-bg.png';

const TerminalLine = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-sm md:text-base mb-2">
      <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> {displayedText}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-black/80 via-terminal-black/50 to-terminal-black"></div>
      </div>

      {/* Matrix Rain Animation */}
      <MatrixRain />

      <div className="max-w-5xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-terminal-dark/90 backdrop-blur border border-slate-700 rounded-lg shadow-2xl overflow-hidden w-full max-w-lg mx-auto lg:mx-0 relative"
        >
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-xs text-slate-400 font-mono">user@devops-portfolio:~</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[300px] md:h-[400px] overflow-y-auto font-mono text-slate-300">
            <TerminalLine text="npm install portfolio-v2" delay={500} />
            <TerminalLine text="[INFO] Initializing environment..." delay={1500} />
            <TerminalLine text="[INFO] Loading modules: React, Vite, Tailwind..." delay={2500} />
            <TerminalLine text="[SUCCESS] Environment ready." delay={4000} />
            <TerminalLine text={`[USER] ${profile.name}`} delay={5000} />
            <TerminalLine text={`[ROLE] ${profile.role}`} delay={6000} />
            <div className="mt-4 animate-pulse text-neon-green">_</div>
          </div>
        </motion.div>

        {/* Right: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Hello, I'm <span className="text-neon-green">{profile.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-mono">
            &lt;{profile.role} /&gt;
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3 bg-neon-green text-terminal-black font-bold rounded hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              View Deployments
            </a>
            <a href={profile.resumeUrl} download className="px-8 py-3 border border-neon-green text-neon-green font-bold rounded hover:bg-neon-green/10 transition-colors backdrop-blur-sm">
              Download Logs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;