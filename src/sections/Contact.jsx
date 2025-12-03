import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data/profile';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');

    // Simulate network delay for effect
    setTimeout(async () => {
      try {
        const res = await fetch('http://localhost:4000/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (data.ok) {
          setStatus('TRANSMISSION COMPLETE');
          setForm({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('ERROR: TRANSMISSION FAILED');
        }
      } catch (err) {
        setStatus('ERROR: NETWORK UNREACHABLE');
      }
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <SectionWrapper id="contact" className="py-20 px-4 bg-terminal-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white"><span className="text-neon-pink">./</span>secure_channel</h2>
          <p className="text-slate-400 font-mono text-sm">Establish encrypted connection</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-terminal-dark border border-slate-800 p-6 rounded-lg hover:border-neon-pink/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-slate-700 pb-2">
                <span className="text-neon-pink">&gt;</span> DIRECT_UPLINK
              </h3>

              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded text-neon-pink group-hover:text-white transition-colors">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">EMAIL_PROTOCOL</div>
                    <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-neon-pink transition-colors break-all">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded text-neon-pink group-hover:text-white transition-colors">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">VOICE_COMM</div>
                    <a href={`tel:${profile.phone}`} className="text-slate-300 hover:text-neon-pink transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded text-neon-pink group-hover:text-white transition-colors">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">PHYSICAL_NODE</div>
                    <span className="text-slate-300">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-terminal-dark border border-slate-800 p-6 rounded-lg hover:border-neon-pink/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-slate-700 pb-2">
                <span className="text-neon-pink">&gt;</span> SOCIAL_NETWORKS
              </h3>
              <div className="flex gap-4">
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <FaGithub size={24} />
                </a>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded text-slate-400 hover:text-[#0077b5] hover:bg-slate-700 transition-all">
                  <FaLinkedin size={24} />
                </a>
                <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded text-slate-400 hover:text-[#25D366] hover:bg-slate-700 transition-all">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-terminal-dark border border-slate-700 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neon-cyan">USER_ID (Name)</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 text-white p-3 focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="Enter name..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-neon-cyan">RETURN_PATH (Email)</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 text-white p-3 focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="Enter email..."
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neon-cyan">HEADER (Subject)</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 text-white p-3 focus:border-neon-green focus:outline-none transition-colors"
                  placeholder="Enter subject..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neon-cyan">PAYLOAD (Message)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-slate-900/50 border border-slate-700 text-white p-3 focus:border-neon-green focus:outline-none transition-colors"
                  placeholder="Enter message content..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neon-green/10 border border-neon-green text-neon-green py-4 font-bold hover:bg-neon-green hover:text-terminal-black transition-all uppercase tracking-widest"
              >
                {status || 'INITIATE_TRANSMISSION'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;