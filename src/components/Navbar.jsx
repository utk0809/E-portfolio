import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#achievements' },
    { name: 'Events', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '15px 0' : '30px 0',
      transition: 'all 0.4s ease',
      backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 5%'
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}
        >
          <a href="#" className="gradient-text">UTK.</a>
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.7, transition: 'opacity 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.7}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-nav-toggle" style={{ display: 'none', alignItems: 'center' }}>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid var(--glass-border)', 
              color: 'var(--text-color)', 
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(5px)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: '40px 0',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '25px',
              overflow: 'hidden',
              zIndex: 999
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-color)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ marginTop: '10px', width: '80%', textAlign: 'center', justifyContent: 'center' }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .mobile-nav-toggle { display: flex !important; }
          nav { 
            background-color: ${isScrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.6)'} !important;
            backdrop-filter: blur(10px) !important;
            padding: 15px 0 !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
