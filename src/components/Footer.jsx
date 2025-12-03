import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-terminal-dark border-t border-slate-800 py-8 mt-20 font-mono">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 text-slate-500 text-sm">
          <span>© {new Date().getFullYear()} Pasindu Banuka</span>
          <span className="hidden md:inline">|</span>
          <span className="text-neon-green">DevOps Engineer</span>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/DKPBanuka" target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pasindu-banuka-216b7133b" target="_blank" rel="noopener" className="text-slate-500 hover:text-[#0077b5] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://wa.me/94789287469" target="_blank" rel="noopener" className="text-slate-500 hover:text-[#25D366] transition-colors">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
