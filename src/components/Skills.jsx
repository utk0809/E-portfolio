import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST API', 'Auth']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'CI/CD']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" ref={ref} className="skills" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Technical <span className="gradient-text">Arsenal</span></h2>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto' }}>A comprehensive list of tools and technologies I use to bring ideas to life.</p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}
        >
          {skillGroups.map((group, gIndex) => (
            <motion.div 
              key={gIndex}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                borderColor: 'var(--primary-color)',
                boxShadow: '0 20px 40px rgba(0, 243, 255, 0.1)'
              }}
              className="glass-card"
              style={{ 
                padding: '40px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                borderTop: '2px solid var(--primary-color)',
                borderLeft: '2px solid var(--primary-color)',
                opacity: 0.3
              }} />

              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '25px', 
                color: 'var(--primary-color)',
                fontWeight: 800,
                letterSpacing: '1px'
              }}>{group.title}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {group.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'var(--primary-color)', 
                      color: '#000',
                      boxShadow: '0 0 15px var(--primary-color)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (gIndex * 0.1) + (sIndex * 0.05) }}
                    style={{
                      padding: '10px 22px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      border: '1px solid var(--glass-border)',
                      cursor: 'default',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
