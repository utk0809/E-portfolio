import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Hero = () => {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', height: '100vh', padding: 0 }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '80px 5% 0'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ 
              fontSize: '1.2rem', 
              fontWeight: 500, 
              letterSpacing: '4px', 
              textTransform: 'uppercase',
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              display: 'block'
            }}
          >
            Hello World, I'm
          </motion.span>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 6rem)', 
            marginBottom: '1rem',
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}>
            <span className="gradient-text">UTKARSHA THAKUR</span>
          </h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.8rem)', 
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '1px'
            }}
          >
            FULL-STACK DEVELOPER · GEN AI ENTHUSIAST
          </motion.h2>
          
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto 2.5rem', 
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6
          }}>
            I build and ship web applications and AI-based projects. I focus on making things that are simple, useful, and actually work.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              View Projects
            </motion.a>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            display: 'flex', 
            gap: '25px', 
            justifyContent: 'center' 
          }}>
            <SocialIcon Icon={Github} href="https://github.com/utk0809" />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/utkarsha-thakur" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ 
            position: 'absolute', 
            bottom: '40px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            color: 'var(--primary-color)',
            opacity: 0.6
          }}
        >
          <ArrowDown size={30} />
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, color: 'var(--primary-color)' }}
    style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s ease' }}
  >
    <Icon size={24} />
  </motion.a>
);

export default Hero;
