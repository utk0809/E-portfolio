import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [activeYear, setActiveYear] = useState('1st Year (2022-23)');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = {
    '1st Year (2022-23)': {
      title: 'Engineering Foundation & Exploration',
      subtitle: 'Building core programming skills and exploring engineering exhibition platforms.',
      items: [
        'Basics of Python — Certification: Completed Python fundamentals covering variables, loops, functions, and problem-solving.',
        'AI Tools Workshop — AIF Workspace: Hands-on experience with modern AI tools for productivity and development.',
        'Jidnyasa 2K23 — Engineering Project Exhibition: Assisted in managing project deadlines and teamwork at MIT Chh. Sambhajinagar.'
      ],
      tags: ['Python', 'AI Tools', 'Engineering Expo']
    },
    '2nd Year (2023-24)': {
      title: 'Cloud, Consulting & Leadership',
      subtitle: 'Transitioning into cloud architecture and taking on community responsibilities.',
      items: [
        'AWS Academy Cloud Foundations — Certification: Training in AWS core services, architecture, and security.',
        'Deloitte Technology Job Simulation — Forage: Solved consulting tasks, data analysis, and business solutions.',
        'Kalavihangam 2K24 — Cultural Volunteer: Contributed to the annual cultural festival organization.',
        'Student Representative — ACTS: Represented student interests and coordinated technical and creative events.'
      ],
      tags: ['AWS', 'Cloud', 'Consulting', 'Leadership']
    },
    '3rd Year (2024-25)': {
      title: 'Advanced AI/ML & Management',
      subtitle: 'Deep diving into geospatial analysis and leading technical communities.',
      items: [
        'AI/ML for Geodata Analysis — ISRO Certification: Applied machine learning techniques to geospatial data.',
        'Student Representative — Electoral Literacy Club: Promoted civic participation and organized awareness activities.',
        'Bootcamp on RPA: Learned automation of repetitive tasks and workflow optimization.',
        'President — ACTS: Leading teams, organizing large-scale events, and driving innovation initiatives.',
        'Project Management Intern — Infinova Eduventures: Planning projects and coordinating with teams.'
      ],
      tags: ['AI/ML', 'ISRO', 'RPA', 'Event Management']
    },
    '4th Year (2025-26)': {
      title: 'Research, Hackathons & Cybersecurity',
      subtitle: 'Publishing research and gaining hands-on cybersecurity experience.',
      items: [
        'Model United Nations (MUN) — Delegate: Engaged in global issue debates and developed communication skills.',
        'Techno Spark 3.0 — AI Hackathon Winner: Won an AI hackathon by developing innovative solutions under pressure.',
        'Research Paper — “Elimination of Hardware Controllers”: Published in IJIRT focusing on mobile-first gaming interaction.',
        'Cybersecurity Intern — Cyber Sanskar: Real-world security practices, vulnerability assessment, and web security.'
      ],
      tags: ['Research', 'Hackathon Winner', 'Cybersecurity', 'MUN']
    }
  };

  const years = ['1st Year (2022-23)', '2nd Year (2023-24)', '3rd Year (2024-25)', '4th Year (2025-26)', 'All'];

  const getVisibleData = () => {
    if (activeYear === 'All') {
      return Object.entries(timelineData).map(([year, data]) => ({ ...data, yearLabel: year }));
    }
    return [{ ...timelineData[activeYear], yearLabel: activeYear }];
  };

  return (
    <section id="experience" ref={ref} className="experience">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', opacity: 0.8, marginBottom: '0.5rem', fontWeight: 500 }}>My Journey</h2>
          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            <span className="gradient-text">4 years of growth and impact</span>
          </h3>
          <p style={{ opacity: 0.6 }}>My evolution as an engineering student through the years.</p>
        </div>

        {/* Navigation Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`btn ${activeYear === year ? 'btn-primary' : 'btn-secondary'}`}
              style={{ 
                padding: '10px 24px', 
                fontSize: '0.85rem',
                minWidth: '160px',
                borderRadius: '12px',
                fontWeight: 600
              }}
            >
              {year}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--glass-border)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <AnimatePresence mode="popLayout">
              {getVisibleData().map((data, index) => (
                <motion.div
                  key={`${activeYear}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ position: 'relative', paddingLeft: '50px' }}
                >
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '11px',
                    top: '25px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    border: '4px solid var(--bg-color)',
                    zIndex: 2
                  }} />

                  <div className="glass-card" style={{ 
                    padding: '40px',
                    borderLeft: '4px solid var(--primary-color)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--primary-color)', 
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      {data.yearLabel}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', lineHeight: 1.3 }}>{data.title}</h3>
                    <p style={{ opacity: 0.9, fontSize: '1.05rem', color: 'var(--primary-color)', marginBottom: '25px', fontWeight: 500 }}>{data.subtitle}</p>
                    
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      marginBottom: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px'
                    }}>
                      {data.items.map((item, iIndex) => (
                        <li key={iIndex} style={{ 
                          opacity: 0.7, 
                          fontSize: '0.95rem', 
                          lineHeight: 1.6,
                          position: 'relative',
                          paddingLeft: '20px'
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {data.tags.map((tag, tIndex) => (
                        <span key={tIndex} style={{
                          padding: '4px 12px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--glass-border)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--text-color)',
                          display: 'inline-block'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
