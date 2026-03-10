import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section container">
      <div className="glass" style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                <a href="mailto:qaisirnaseer302@gmail.com" style={{ color: 'var(--text-muted)' }}>qaisirnaseer302@gmail.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                background: 'rgba(138, 43, 226, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-purple)'
              }}>
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Location</h4>
                <p style={{ color: 'var(--text-muted)' }}>Multan , Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 350px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
            {status && (
              <p style={{ color: status.includes('success') ? 'var(--accent-cyan)' : 'var(--text-main)', fontSize: '0.9rem', textAlign: 'center' }}>
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
