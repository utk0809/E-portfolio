import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coCurricular = [
    {
      title: '☁️ AWS Academy Cloud Foundations — Certification',
      desc: 'Completed training in cloud computing fundamentals, including AWS services, architecture, security, and deployment basics.',
      accent: '#FF9900'
    },
    {
      title: '🐍 Basics of Python — Certification',
      desc: 'Built a strong foundation in Python programming and problem-solving.',
      accent: '#3776AB'
    },
    {
      title: '💻 Data Structures & Algorithms — Apna College Certification',
      desc: 'Strengthened problem-solving skills through DSA concepts including arrays, recursion, sorting, and optimization techniques.',
      accent: '#00F3FF'
    },
    {
      title: '🛰️ AI/ML for Geodata Analysis — ISRO Certification',
      desc: 'Learned application of AI/ML techniques on geospatial data for real-world analysis.',
      accent: '#FF4B2B'
    },
    {
      title: '💼 Deloitte Technology Job Simulation — Forage',
      desc: 'Gained experience in solving business problems through data analysis and consulting tasks.',
      accent: '#86BC25'
    },
    {
      title: '🏦 JPMorgan Chase Software Engineering Job Simulation — Forage',
      desc: 'Worked on real-world software engineering tasks including debugging, system design, and financial data handling.',
      accent: '#111'
    },
    {
      title: '🤖 Bootcamp on Robotic Process Automation (RPA)',
      desc: 'Learned automation of repetitive tasks and workflow optimization.',
      accent: '#00A1E0'
    }
  ];

  const extraCurricular = [
    {
      title: '✅ Hire Ready Placement Program — All Rounds Cleared',
      desc: 'Successfully cleared Interview, Group Discussion, and Aptitude rounds, demonstrating strong placement readiness.',
      accent: '#00F3FF'
    },
    {
      title: '🎤 Code & Create 2.0 — Student Speaker',
      desc: 'Selected as a speaker, sharing knowledge and insights with peers in a technical event.',
      accent: '#A855F7'
    },
    {
      title: '🏆 Techno Spark 3.0 — AI Hackathon Winner',
      desc: 'Won an AI-based hackathon by building an innovative solution under time constraints.',
      accent: '#FACC15'
    },
    {
      title: '🇺🇳 Model United Nations (MUN) — Delegate',
      desc: 'Participated in debates on global issues, enhancing research and public speaking skills.',
      accent: '#3B82F6'
    },
    {
      title: '🛠️ AI Tools Workshop — AIF Workspace',
      desc: 'Hands-on experience with modern AI tools and workflows.',
      accent: '#10B981'
    },
    {
      title: '🤝 Kalavihagam — Volunteer (2024)',
      desc: 'Contributed to event organization, coordination, and team execution.',
      accent: '#FB923C'
    },
    {
      title: '📚 Vichar Vistar — Book Reading Competition',
      desc: 'Part of the organizing team, managing coordination and event execution.',
      accent: '#6366F1'
    }
  ];

  return (
    <section id="achievements" ref={ref} className="achievements" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>
              <span className="gradient-text">Certifications & Achievements</span>
            </h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto 2rem' }}></div>
            <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '700px', margin: '0 auto' }}>
              Milestones that reflect my technical proficiency and leadership journey.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          {/* Co-Curricular Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '15px', 
                background: 'rgba(0, 243, 255, 0.1)', 
                border: '1px solid rgba(0, 243, 255, 0.3)',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: '#00F3FF'
              }}>
                <Award size={28} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Co-curricular</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {coCurricular.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card"
                  style={{ 
                    padding: '30px', 
                    borderLeft: `4px solid ${item.accent}`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '100px', 
                    height: '100px', 
                    background: `radial-gradient(circle at top right, ${item.accent}15, transparent 70%)`,
                    zIndex: 0
                  }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700, position: 'relative', zIndex: 1 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extra-Curricular Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '15px', 
                background: 'rgba(168, 85, 247, 0.1)', 
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: '#A855F7'
              }}>
                <Star size={28} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Extra-curricular</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {extraCurricular.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card"
                  style={{ 
                    padding: '30px', 
                    borderLeft: `4px solid ${item.accent}`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '100px', 
                    height: '100px', 
                    background: `radial-gradient(circle at top right, ${item.accent}15, transparent 70%)`,
                    zIndex: 0
                  }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700, position: 'relative', zIndex: 1 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
