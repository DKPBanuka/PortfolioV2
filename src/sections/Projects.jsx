import React, { useState } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCheckCircle, FaTimes, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import Modal from '../components/Modal';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-terminal-dark border border-slate-800 rounded-lg overflow-hidden hover:border-neon-green/50 transition-all group flex flex-col h-full cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Status Badge */}
        <div className="absolute top-2 right-2 z-20 bg-terminal-black/80 backdrop-blur px-2 py-1 rounded border border-neon-green/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
          <span className="font-mono text-[10px] text-neon-green">DEPLOYED</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-slate-500">v1.0.{index}</span>
        </div>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech.name} className="px-2 py-1 text-xs font-mono bg-slate-800 text-neon-purple rounded border border-slate-700">
              {tech.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800">
          <span className="text-xs text-neon-green font-mono group-hover:underline">
            [CLICK_FOR_DETAILS]
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const isMobile = window.innerWidth < 768;
  const initialCount = isMobile ? 3 : 6;
  const displayedProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <SectionWrapper id="projects" className="py-20 px-4 bg-terminal-black">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-purple">./</span>deployments</h2>
        <p className="text-slate-400 font-mono text-sm">Recent production releases and side projects</p>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > initialCount && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-neon-cyan font-mono text-sm rounded transition-colors border border-slate-700"
          >
            {showAll ? (
              <>
                <FaChevronUp /> COLLAPSE_VIEW
              </>
            ) : (
              <>
                <FaChevronDown /> SHOW_ALL_DEPLOYMENTS ({projects.length})
              </>
            )}
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || 'PROJECT_DETAILS'}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Main Image */}
            <div
              className="relative h-64 rounded-lg overflow-hidden border border-slate-700 cursor-zoom-in group"
              onClick={() => setZoomedImage(selectedProject.image)}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <span className="text-white text-xs font-mono bg-black/70 px-2 py-1 rounded">CLICK_TO_ZOOM</span>
              </div>
            </div>

            {/* Gallery */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div>
                <h4 className="text-neon-cyan font-mono text-sm mb-2">GALLERY</h4>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {selectedProject.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-24 h-24 rounded border border-slate-700 overflow-hidden cursor-pointer hover:border-neon-green transition-colors"
                      onClick={() => setZoomedImage(img)}
                    >
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-neon-cyan font-mono text-sm mb-2">DESCRIPTION</h4>
              <p className="text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {selectedProject.features && (
              <div>
                <h4 className="text-neon-cyan font-mono text-sm mb-2">KEY_FEATURES</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <FaCheckCircle className="text-neon-green mt-1 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-neon-cyan font-mono text-sm mb-2">TECH_STACK</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech.name} className="px-3 py-1 text-sm font-mono bg-slate-800 text-neon-purple rounded border border-slate-700">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-700">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors font-mono border border-slate-600">
                  <FaGithub /> VIEW_CODE
                </a>
              )}
              {selectedProject.linkedin && (
                <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded transition-colors font-mono border border-slate-600">
                  <FaLinkedin /> VIEW_POST
                </a>
              )}
              {selectedProject.liveDemo && (
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon-green text-terminal-black font-bold rounded hover:bg-green-400 transition-colors font-mono">
                  <FaExternalLinkAlt /> LIVE_DEMO
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Image Zoom Overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-neon-green transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <FaTimes size={30} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={zoomedImage}
              alt="Zoomed Project"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;