import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
        <div style={{ flex: '1 1 500px', maxWidth: '800px' }} className="animate-fade-in">
          <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px' }}>
            HI, I AM QAISIR NASEER
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            A <span className="text-gradient">Full Stack</span><br />
            Engineer.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
            I build exceptional, high-performance digital experiences. Specializing in modern web technologies, scalable architectures, and striking visual designs.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-muted)' }}><FaGithub className="hover-icon" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-muted)' }}><FaLinkedin className="hover-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.8rem', color: 'var(--text-muted)' }}><FaTwitter className="hover-icon" /></a>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }} className="animate-fade-in">
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            aspectRatio: '1',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--accent-cyan)',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
          }}>
            <img
              src={profileImg}
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-purple)',
        filter: 'blur(150px)',
        opacity: 0.3,
        zIndex: -1,
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '25%',
        width: '200px',
        height: '200px',
        background: 'var(--accent-cyan)',
        filter: 'blur(100px)',
        opacity: 0.2,
        zIndex: -1,
        borderRadius: '50%'
      }}></div>
    </section>
  );
};

export default Hero;
