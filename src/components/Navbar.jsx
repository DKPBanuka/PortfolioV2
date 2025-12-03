import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import PBLogo from '../assets/profile-image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'certification', label: 'Certification' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  const containerRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const orb = orbRef.current;
    if (!container || !orb) return;

    let raf = null;
    let lastX = orb.offsetLeft || 0;
    let lastY = orb.offsetTop || 0;

    const update = () => {
      const mx = parseFloat(container.dataset.mx || (container.clientWidth / 2));
      const my = parseFloat(container.dataset.my || (container.clientHeight / 2));
      lastX += (mx - lastX) * 0.12;
      lastY += (my - lastY) * 0.12;
      orb.style.left = `${lastX}px`;
      orb.style.top = `${lastY}px`;
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, []);

  const NAVBAR_OFFSET = 72;

  return (
    <nav className="sticky top-3 z-50 font-mono">
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl">
          <div
            ref={containerRef}
            className="relative flex items-center justify-between rounded-lg bg-terminal-dark/90 backdrop-blur-md border border-slate-700 px-5 py-2 overflow-hidden shadow-2xl"
            onMouseMove={(e) => {
              const container = containerRef.current;
              const rect = container.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              container.dataset.mx = String(x);
              container.dataset.my = String(y);
              container.dataset.hover = '1';
            }}
            onMouseLeave={() => {
              const container = containerRef.current;
              if (container) container.dataset.hover = '0';
            }}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 z-20">
              <div className="h-8 w-8 rounded bg-neon-green flex items-center justify-center text-terminal-black font-bold">
                PB
              </div>
              <span className="text-sm font-bold tracking-tight text-white hidden sm:inline">~/pasindu-banuka</span>
            </a>

            {/* Mouse Orb */}
            <div
              aria-hidden="true"
              ref={orbRef}
              className="absolute w-[150px] h-[150px] rounded-full pointer-events-none mix-blend-screen opacity-0 transition-opacity duration-300 z-10"
              style={{
                background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <style>{`
              .relative[data-hover="1"] div[aria-hidden="true"] { opacity: 1; }
            `}</style>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center z-20">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-neon-green cursor-pointer transition-colors"
                  activeClass="text-neon-green font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-20">
              <button
                aria-label="Toggle menu"
                className="text-slate-300 hover:text-neon-green transition-colors"
                onClick={toggleMenu}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        />
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-terminal-dark border-l border-slate-700 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 flex flex-col gap-6">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-slate-400 hover:text-white">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className="text-slate-300 hover:text-neon-green font-mono text-sm py-2 border-b border-slate-800"
                >
                  &gt; {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;