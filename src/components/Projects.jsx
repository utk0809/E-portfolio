import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: '01',
      title: 'LL Mediator — Online Dispute Resolution',
      year: '2024',
      type: 'Smart Legal-Tech Platform',
      desc: 'An online dispute resolution platform designed to provide faster and more accessible conflict resolution. Integrates structured workflows and intelligent assistance for smooth case handling.',
      tags: ['React', 'Node.js', 'AI Integration', 'Workflow Design'],
      codeLink: '#',
      liveLink: '#'
    },
    {
      id: '02',
      title: 'Virtual Herbal Garden',
      year: '2024',
      type: 'AR/VR-Based Learning Platform',
      desc: 'An immersive virtual platform that allows users to explore and learn about medicinal plants using 3D models and AR/VR technology, making traditional knowledge more interactive and accessible.',
      tags: ['Three.js', 'WebXR / AR/VR', 'JavaScript', '3D Models'],
      codeLink: '#',
      liveLink: '#'
    },
    {
      id: '03',
      title: 'Mobile Arcade',
      year: '2025',
      type: 'Mobile-Controlled Gaming Platform',
      desc: 'A multiplayer gaming platform where mobile devices act as controllers for games running on a central screen. Focuses on seamless connectivity, real-time interaction, and an engaging user experience.',
      tags: ['React', 'Node.js', 'WebSockets', 'Firebase'],
      codeLink: '#',
      liveLink: '#'
    },
    {
      id: '04',
      title: 'RAG Project',
      year: '2026',
      type: 'AI-Powered Retrieval System',
      desc: 'Built a Retrieval-Augmented Generation system that enhances AI responses using custom data sources, enabling more accurate and context-aware outputs.',
      tags: ['Python', 'LangChain', 'LLMs', 'Vector Database'],
      codeLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" ref={ref} className="projects">
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem' }}>
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px' }}>
            A selection of my recent works, blending creativity with technical excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="glass-card project-card"
              style={{ 
                padding: '40px', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background Glow */}
              <div style={{ 
                position: 'absolute', 
                top: '-20%', 
                right: '-20%', 
                width: '150px', 
                height: '150px', 
                background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)', 
                opacity: 0.05,
                zIndex: 0
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <span style={{ 
                  fontSize: '4rem', 
                  fontWeight: 900, 
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1 
                }}>
                  {project.id}
                </span>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(5px)'
                }}>
                  {project.year}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', position: 'relative', zIndex: 1 }}>{project.title}</h3>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', zIndex: 1 }}>
                {project.type}
              </h4>
              
              <p style={{ opacity: 0.7, marginBottom: '30px', lineHeight: 1.7, flexGrow: 1, position: 'relative', zIndex: 1 }}>
                {project.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                {project.tags.map((tag, tIndex) => (
                  <motion.span 
                    key={tIndex} 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                    style={{ 
                      fontSize: '0.7rem', 
                      padding: '4px 12px', 
                      borderRadius: '6px', 
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--glass-border)',
                      opacity: 0.9,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                borderTop: '1px solid var(--glass-border)', 
                paddingTop: '20px',
                position: 'relative',
                zIndex: 1 
              }}>
                <motion.a 
                  href={project.codeLink} 
                  whileHover={{ x: 5, color: 'var(--primary-color)' }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600 }}
                >
                  <Github size={18} /> Code
                </motion.a>
                <motion.a 
                  href={project.liveLink} 
                  whileHover={{ x: 5, color: 'white' }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    color: 'var(--primary-color)',
                    background: 'rgba(0, 243, 255, 0.05)',
                    padding: '5px 12px',
                    borderRadius: '8px'
                  }}
                >
                  <ExternalLink size={18} /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
