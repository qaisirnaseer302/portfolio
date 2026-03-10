import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Nexus Bussiness Collab',
    description: 'A high-performance headless e-commerce platform built with Next.js, GraphQL, and Stripe integration. Features real-time inventory tracking and dynamic AI-driven product recommendations.',
    tech: ['Next.js', 'React', 'GraphQL', 'Tailwind', 'Stripe'],
    github: 'https://github.com/qaisirnaseer302/Nexus',
    live: 'https://example.com'
  },
  {
    title: 'Recipe Sharing',
    description: 'A recipe sharing platform built with JavaScript, Node.js, and MongoDB. Features user authentication, recipe management, and social features.',
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/qaisirnaseer302/Recipe',
    live: 'https://example.com'
  },
  {
    title: 'E-Commerce Store',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features user authentication, product management, and order processing.',
    tech: ['Java', 'Node.js', 'MongoDB'],
    github: 'https://github.com/qaisirnaseer302/E-Commerece-Store',
    live: 'https://example.com'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Selected <span className="text-gradient">Works</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          A showcase of complex systems I've architected and built from the ground up.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 240, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}>
            <div style={{
              height: '200px',
              background: 'linear-gradient(145deg, rgba(0,240,255,0.1), rgba(138,43,226,0.1))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <span style={{ fontSize: '4rem', opacity: 0.5 }}>🚀</span>
            </div>

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <FaGithub className="hover-icon" size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <FaExternalLinkAlt className="hover-icon" size={18} />
                  </a>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    color: 'var(--accent-cyan)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
