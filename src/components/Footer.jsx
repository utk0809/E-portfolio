import React from 'react';
import { Github, Linkedin } from './Icons';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '80px 0 40px', 
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(3, 7, 18, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '50px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px' }}>
              UTKARSHA<span className="gradient-text">.</span>
            </h3>
            <p style={{ opacity: 0.6, lineHeight: 1.6 }}>
              Crafting high-end digital experiences with precision and passion. Let's create something extraordinary.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#about" style={{ opacity: 0.6, textDecoration: 'none', transition: '0.3s' }}>About Me</a></li>
              <li><a href="#projects" style={{ opacity: 0.6, textDecoration: 'none', transition: '0.3s' }}>Projects</a></li>
              <li><a href="#experience" style={{ opacity: 0.6, textDecoration: 'none', transition: '0.3s' }}>Experience</a></li>
              <li><a href="#contact" style={{ opacity: 0.6, textDecoration: 'none', transition: '0.3s' }}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ opacity: 0.6, display: 'flex', alignItems: 'center', gap: '10px' }}>
                utkarshathakur2004@gmail.com
              </li>
              <li style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <a href="https://github.com/utk0809" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6 }}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/utkarsha-thakur" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6 }}>
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          paddingTop: '40px', 
          borderTop: '1px solid var(--glass-border)', 
          textAlign: 'center',
          fontSize: '0.9rem',
          opacity: 0.4
        }}>
          <p>© {new Date().getFullYear()} Utkarsha Thakur. All rights reserved.</p>
          <p style={{ marginTop: '5px' }}>Built with ❤️ using React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
