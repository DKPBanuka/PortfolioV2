import React from 'react';
import { FaBriefcase, FaCode, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import profileImg from '../assets/profile-image.png';

const stats = [
  { icon: <FaBriefcase size={30} />, value: '5+', label: 'Projects Completed' },
  { icon: <FaCode size={30} />, value: '10+', label: 'Technologies' },
  { icon: <FaGraduationCap size={30} />, value: '2nd', label: 'Year Undergraduate' },
  { icon: <FaCoffee size={30} />, value: '100+', label: 'Coding Hours/Week' },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20 px-4 bg-terminal-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-cyan">./</span>about_me</h2>
        <p className="text-slate-400 font-mono text-sm">System configuration and user details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Profile Image & Bio */}
        <div className="flex flex-col gap-8">
          <div className="relative w-48 h-48 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-2 border-neon-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            />
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-neon-green rounded-full border-2 border-terminal-black" title="Online"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 font-mono text-center md:text-left">
              <span className="text-neon-green">&gt;</span> DevOps & Full Stack Developer
            </h3>
            <div className="bg-terminal-dark border border-slate-800 p-6 rounded-lg font-mono text-sm text-slate-300 leading-relaxed shadow-lg">
              <p className="mb-4">
                <span className="text-neon-purple">const</span> <span className="text-yellow-400">education</span> = <span className="text-green-400">"Undergraduate at University of Sri Jayawardenepura"</span>;
              </p>
              <p className="mb-4">
                <span className="text-neon-purple">const</span> <span className="text-yellow-400">passion</span> = [<span className="text-green-400">"Building reliable systems"</span>, <span className="text-green-400">"Scalable applications"</span>];
              </p>
              <p>
                <span className="text-slate-500">// My technical expertise includes DevOps (CI/CD, Docker, Linux), Cloud, React, Node.js, Python, SQL, and MongoDB.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-terminal-dark border border-slate-800 p-6 rounded-lg text-center hover:border-neon-cyan/50 transition-all group"
            >
              <div className="text-neon-cyan mb-3 inline-block group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-bold text-white font-mono">{stat.value}</h4>
              <p className="text-slate-500 text-xs font-mono mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;