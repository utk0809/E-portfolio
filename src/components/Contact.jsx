import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'utkarshathakur2004@gmail.com',
      link: 'mailto:utkarshathakur2004@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 7558688907',
      link: 'tel:+917558688907'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'utkarsha-thakur',
      link: 'https://linkedin.com/in/utkarsha-thakur'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'utk0809',
      link: 'https://github.com/utk0809'
    }
  ];

  return (
    <section id="contact" ref={ref} className="contact" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem' }}>
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)' }}>
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'rgba(0, 243, 255, 0.1)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    color: 'var(--primary-color)',
                    border: '1px solid rgba(0, 243, 255, 0.2)'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>{info.label}</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '40px' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Full Name</label>
                  <input type="text" placeholder="Your Name" style={{ 
                    padding: '15px', 
                    borderRadius: '10px', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: 'white'
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Email Address</label>
                  <input type="email" placeholder="Email Address" style={{ 
                    padding: '15px', 
                    borderRadius: '10px', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: 'white'
                  }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Message</label>
                <textarea rows="5" placeholder="How can I help you?" style={{ 
                  padding: '15px', 
                  borderRadius: '10px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  resize: 'none'
                }}></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
