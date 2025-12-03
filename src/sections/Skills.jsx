import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiMongodb, SiLinux, SiDocker, SiKubernetes, SiFigma, SiMysql, SiGit, SiAnsible } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const skills = [
  { icon: <SiLinux />, name: 'Linux', level: 90, status: 'Operational' },
  { icon: <SiDocker />, name: 'Docker', level: 85, status: 'Operational' },
  { icon: <SiKubernetes />, name: 'Kubernetes', level: 80, status: 'Scaling' },
  { icon: <SiAnsible />, name: 'Ansible', level: 75, status: 'Active' },
  { icon: <SiGit />, name: 'Git', level: 95, status: 'Synced' },
  { icon: <SiPython />, name: 'Python', level: 85, status: 'Operational' },
  { icon: <SiNodedotjs />, name: 'Node.js', level: 80, status: 'Operational' },
  { icon: <SiReact />, name: 'React', level: 75, status: 'Stable' },
  { icon: <SiMongodb />, name: 'MongoDB', level: 70, status: 'Connected' },
  { icon: <SiMysql />, name: 'MySQL', level: 75, status: 'Connected' },
  { icon: <SiNextdotjs />, name: 'Next.js', level: 70, status: 'Stable' },
  { icon: <SiJavascript />, name: 'JavaScript', level: 85, status: 'Operational' },
  { icon: <FaJava />, name: 'Java', level: 60, status: 'Maintenance' },
  { icon: <SiHtml5 />, name: 'HTML5', level: 90, status: 'Operational' },
  { icon: <SiCss3 />, name: 'CSS3', level: 85, status: 'Operational' },
  { icon: <SiFigma />, name: 'Figma', level: 65, status: 'Design' },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-terminal-dark border border-slate-800 p-4 rounded hover:border-neon-green/50 transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className={`w-2 h-2 rounded-full ${skill.status === 'Operational' || skill.status === 'Synced' ? 'bg-neon-green' : 'bg-yellow-500'} animate-pulse`}></div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl text-slate-400 group-hover:text-white transition-colors">
          {skill.icon}
        </div>
        <h3 className="font-mono text-sm font-bold text-slate-300 group-hover:text-neon-green">{skill.name}</h3>
      </div>

      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-neon-green/80 group-hover:bg-neon-green"
        />
      </div>

      <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
        <span>{skill.status}</span>
        <span>{skill.level}%</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20 px-4 bg-terminal-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-green">./</span>system_status</h2>
        <p className="text-slate-400 font-mono text-sm">Monitoring infrastructure and stack proficiency</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;