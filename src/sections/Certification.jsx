import React, { useRef, useState } from 'react';
import { certifications } from '../data/certifications';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Modal from '../components/Modal';
import { FaChevronRight, FaChevronLeft, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Certification = () => {
  const scrollRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <SectionWrapper id="certification" className="py-20 px-4 bg-terminal-black relative overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-green">./</span>certifications</h2>
        <p className="text-slate-400 font-mono text-sm">Verified credentials and badges</p>
      </div>

      <div className="relative group">
        {/* Scroll Buttons (Desktop) */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-dark/80 p-3 rounded-full text-neon-green border border-slate-700 hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100 -ml-4"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-dark/80 p-3 rounded-full text-neon-green border border-slate-700 hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100 -mr-4"
        >
          <FaChevronRight />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="min-w-[300px] md:min-w-[350px] bg-terminal-dark border border-slate-800 rounded-lg p-6 flex flex-col items-center hover:border-neon-green/50 transition-all relative snap-center cursor-pointer group/card"
            >
              <div className="absolute top-0 right-0 p-3">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
              </div>

              <div className="relative mb-6 p-4 bg-slate-800/50 rounded-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-20 w-20 object-contain drop-shadow-lg group-hover/card:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 text-center font-mono">{cert.title}</h3>
              <div className="text-xs text-neon-green font-mono mb-4 flex items-center gap-2">
                <span>@{cert.org}</span>
              </div>

              <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed flex-grow font-mono line-clamp-3">
                {cert.description}
              </p>

              <div className="w-full text-center py-2 border border-slate-700 rounded text-slate-300 group-hover/card:bg-slate-800 group-hover/card:text-white transition-colors font-mono text-sm">
                [VIEW_DETAILS]
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          <span className="text-xs text-slate-500 font-mono animate-pulse">&lt;&lt; SWIPE TO VIEW &gt;&gt;</span>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || 'CERTIFICATE_DETAILS'}
      >
        {selectedCert && (
          <div className="flex flex-col items-center text-center space-y-6">
            <div
              className="p-6 bg-slate-800/50 rounded-lg cursor-zoom-in hover:bg-slate-800 transition-colors relative group"
              onClick={() => setZoomedImage(selectedCert.image)}
              title="Click to zoom"
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="h-48 w-48 object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">CLICK_TO_ZOOM</span>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h4>
              <p className="text-neon-green font-mono">Issued by {selectedCert.org}</p>
              <p className="text-slate-500 text-sm font-mono mt-1">Date: {selectedCert.issueDate}</p>
            </div>

            <div className="text-left w-full bg-slate-900/50 p-4 rounded border border-slate-700">
              <h5 className="text-neon-cyan font-mono text-sm mb-2">DESCRIPTION</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            <a
              href={selectedCert.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-neon-green text-terminal-black font-bold rounded hover:bg-green-400 transition-colors font-mono"
            >
              <FaExternalLinkAlt /> VERIFY_CREDENTIAL
            </a>
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
              alt="Zoomed Certificate"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself? Actually user might want to close by clicking anywhere. Let's keep it simple: click anywhere to close.
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Certification;