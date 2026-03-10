import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="text-gradient">
          &lt;MQN-Dev /&gt;
        </div>
        <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
          <li><a href="#home" style={{ color: 'var(--text-main)' }}>Home</a></li>
          <li><a href="#about" style={{ color: 'var(--text-main)' }}>About</a></li>
          <li><a href="#skills" style={{ color: 'var(--text-main)' }}>Skills</a></li>
          <li><a href="#projects" style={{ color: 'var(--text-main)' }}>Projects</a></li>
          <li><a href="#contact" style={{ color: 'var(--text-main)' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
