import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, Award, Zap } from 'lucide-react';
import technoMain from '../assets/techno_main.jpeg';
import codeCreate from '../assets/code_create.jpg';
import techVerse from '../assets/tech_verse.jpg';
import vicharVistar from '../assets/vichar_vistar.jpg';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      id: '01',
      title: 'Technophilia 2K25',
      date: '2025 · National-Level Tech Event | ACTS President',
      desc: 'Led and organized a national-level technical event, managing end-to-end planning, team coordination, and execution. Created a platform for innovation, creativity, and competitive learning.',
      features: ['InspireX (Guest Session)', 'Shark Tank (Startup Pitching)', 'Hackathon', 'Squid Game (Strategy Event)', 'Tech Elocution'],
      image: technoMain,
      imagePlaceholder: 'Technophilia Event Organization'
    },
    {
      id: '02',
      title: 'Code & Create 2.0',
      date: '2025 · Technical Workshop | ACTS President',
      desc: 'Led the organization of a peer learning workshop for second-year students, focusing on building strong technical foundations through collaborative learning.',
      features: ['C Programming', 'UI/UX Design', 'Peer Learning'],
      image: codeCreate,
      imagePlaceholder: 'Code & Create Workshop'
    },
    {
      id: '03',
      title: 'TechVerse 2025',
      date: '2025 · Engineers’ Day Event | ACTS President',
      desc: 'Directed the planning and execution of an extempore elocution competition within 24 hours, demonstrating strong leadership, fast decision-making, and team coordination.',
      features: ['Public Speaking', 'Execution', 'Time Management'],
      image: techVerse,
      imagePlaceholder: 'TechVerse Competition'
    },
    {
      id: '04',
      title: 'Vichar Vistar 2K25',
      date: '2025 · Book Reading Competition | ACTS President',
      desc: 'Led the organization of a competition focused on analytical thinking and expression, encouraging students to present insights through structured summaries.',
      features: ['Coordination', 'Event Management', 'Leadership'],
      image: vicharVistar,
      imagePlaceholder: 'Vichar Vistar Event'
    }
  ];

return (
  <section id="leadership" ref={ref} className="leadership" style={{ padding: '120px 0' }}>
    <div className="container">
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem' }}>
          <span className="gradient-text">Beyond Code: Leadership & Events</span>
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px' }}>
          Leading initiatives and building communities through impactful technical and creative events.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
              alignItems: 'center'
            }}
          >
            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-color)', opacity: 0.2 }}>{event.id}</span>
                <div style={{ height: '2px', flexGrow: 1, background: 'var(--glass-border)' }}></div>
              </div>

              <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{event.title}</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: 600, marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calendar size={18} /> {event.date}
              </h4>

              <p style={{ opacity: 0.7, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
                {event.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {event.features.map((feature, fIndex) => (
                  <span key={fIndex} style={{
                    padding: '6px 15px',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Zap size={14} className="gradient-text" /> {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              order: index % 2 === 0 ? 2 : 1,
              position: 'relative',
              width: '100%',
              aspectRatio: '16/10',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: event.id === '01' ? 'left' : 'center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              ) : (
                <div style={{ textAlign: 'center', opacity: 0.3 }}>
                  <Users size={60} style={{ marginBottom: '20px' }} />
                  <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>{event.imagePlaceholder}</p>
                  <p style={{ fontSize: '0.9rem' }}>Space for your event photos</p>
                </div>
              )}
              {/* Glow effect overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))',
                pointerEvents: 'none'
              }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Leadership;
