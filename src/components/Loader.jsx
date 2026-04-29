import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#050505',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: '3rem',
            fontFamily: "'Space Grotesk', sans-serif",
            background: 'linear-gradient(135deg, #00f2ff, #bc00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}
        >
          &lt;PORTFOLIO /&gt;
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, #00f2ff, #bc00ff)',
            margin: '0 auto'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
