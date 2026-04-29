import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Watermark from './components/Watermark';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loading-text">Initializing <span className="gradient-text">Utkarsha's</span> Universe...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Background />
      <Watermark />
      <CustomCursor />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
