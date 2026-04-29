import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command as CmdIcon } from 'lucide-react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions = [
    { name: 'Go to About', href: '#about' },
    { name: 'View Projects', href: '#projects' },
    { name: 'My Experience', href: '#experience' },
    { name: 'Contact Me', href: '#contact' },
    { name: 'Download Resume', href: '#' },
    { name: 'Toggle Theme', action: () => document.querySelector('.mobile-nav-toggle button')?.click() },
  ];

  const filteredActions = actions.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(4px)',
              zIndex: 2000
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              backgroundColor: '#111',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              overflow: 'hidden',
              zIndex: 2001
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid var(--glass-border)' }}>
              <Search size={20} style={{ opacity: 0.5, marginRight: '15px' }} />
              <input
                autoFocus
                placeholder="Type a command or search..."
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  width: '100%'
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div style={{
                fontSize: '0.7rem',
                padding: '4px 8px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                opacity: 0.5
              }}>ESC</div>
            </div>
            
            <div style={{ padding: '10px', maxHeight: '400px', overflowY: 'auto' }}>
              {filteredActions.map((action, i) => (
                <div
                  key={i}
                  className="command-item"
                  onClick={() => {
                    if (action.href) window.location.href = action.href;
                    if (action.action) action.action();
                    setIsOpen(false);
                  }}
                  style={{
                    padding: '12px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span>{action.name}</span>
                  <CmdIcon size={14} style={{ opacity: 0.3 }} />
                </div>
              ))}
              {filteredActions.length === 0 && (
                <div style={{ padding: '20px', textAlign: 'center', opacity: 0.5 }}>No results found</div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
