import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl mx-auto w-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
