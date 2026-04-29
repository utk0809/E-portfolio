import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from '../assets/me.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Projects Done', value: '4' },
    { label: 'CGPA', value: '8.94' },
    { label: 'Certifications', value: '15' },
    { label: 'Hackathon Win', value: '1' },
  ];

  return (
    <section id="about" ref={ref} className="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '10px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              margin: '0 auto'
            }}>
              <img
                src={profileImg}
                alt="Utkarsha Thakur"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  filter: 'grayscale(10%) contrast(110%)'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              Developer who <span className="gradient-text">builds beyond code</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              I’m Utkarsha Thakur, a B.Tech CSE (CGPA: 8.94) at G.S. Mandal's Maharashtra Institute of Technology, Chh. SambhajiNagar.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              I build full-stack applications and AI-powered solutions using MERN stack, cloud, and modern tools—focusing on turning ideas into practical, scalable products. I’m currently working as a Cybersecurity Intern at Cyber Sanskar, gaining hands-on experience in real-world security and systems. I’m also a hackathon winner, driven by solving problems under pressure and building innovative solutions.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', lineHeight: 1.7 }}>
              Beyond development, I serve as the President of ACTS, where I lead initiatives, manage teams, and organize technical and creative events—strengthening both my leadership and execution skills while building a strong tech community.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '25px' }}>
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.1rem' }} className="gradient-text">{stat.value}</h3>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;
