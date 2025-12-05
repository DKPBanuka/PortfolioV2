import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { education } from '../data/education';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <SectionWrapper id="education" className="py-20 px-4 bg-terminal-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-pink">./</span>education</h2>
                    <p className="text-slate-400 font-mono text-sm">Academic background and qualifications</p>
                </div>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-terminal-black border-2 border-neon-pink shadow-[0_0_10px_rgba(255,77,122,0.5)]"></div>

                            <div className="bg-terminal-dark border border-slate-800 p-6 rounded-lg hover:border-neon-pink/50 transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex items-center gap-2 text-slate-400 mt-1 font-mono text-sm">
                                            <FaUniversity className="text-neon-cyan" />
                                            <span>{edu.institution}</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-slate-800 rounded text-neon-green text-xs font-mono whitespace-nowrap self-start">
                                        {edu.year}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-slate-300 font-medium">
                                        <span className="text-neon-pink">&gt;</span> {edu.label || 'Specialization'}: {edu.specialization}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
