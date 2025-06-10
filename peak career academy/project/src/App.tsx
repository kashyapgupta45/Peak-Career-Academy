import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Guidance from './components/Guidance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling when section changes
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="courses">
          <Courses setActiveSection={setActiveSection} />
        </section>
        
        <section id="guidance">
          <Guidance setActiveSection={setActiveSection} />
        </section>
        
        <section id="testimonials">
          <Testimonials setActiveSection={setActiveSection} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;