import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Watermark = ({ text, top }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div style={{
      position: 'absolute',
      top: top,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 0.03,
      whiteSpace: 'nowrap',
      userSelect: 'none'
    }}>
      <motion.h2 
        style={{ 
          x, 
          fontSize: '20vw', 
          fontWeight: 900, 
          color: 'white',
          textTransform: 'uppercase'
        }}
      >
        {text} {text} {text}
      </motion.h2>
    </div>
  );
};

export default Watermark;
