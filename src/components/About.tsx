import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section container">
      <div className="glass" style={{ padding: '4rem', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem' }}>
            I am a passionate software engineer with a deep understanding of modern web architectures. Over the years, I've cultivated a design-driven approach to logic—bridging the gap between robust backend systems and stunning, intuitive user interfaces.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            My goal is to build scalable applications that not only solve complex business problems but also deliver memorable digital experiences through meticulous attention to detail and performance optimization.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>1+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-purple)' }}>5+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Projects Completed</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>100%</h3>
              <p style={{ color: 'var(--text-muted)' }}>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'var(--accent-gradient)',
              opacity: 0.1,
              zIndex: 0
            }}></div>
            <span style={{ fontSize: '5rem', zIndex: 1 }}>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
