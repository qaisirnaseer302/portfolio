import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="container contact-layout">
      <div className="contact-copy reveal">
        <span className="eyebrow">Have a good one in mind?</span>
        <h2>Let&apos;s make<br />something <span className="text-accent">matter.</span></h2>
        <p>I&apos;m open to new opportunities, thoughtful collaborations, and conversations about building useful things.</p>
        <a className="contact-email" href="mailto:qaisirnaseer302@gmail.com">
          <FiMail aria-hidden="true" /> qaisirnaseer302@gmail.com
        </a>
        <div className="social-links">
          <a href="https://github.com/qaisirnaseer302" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
        </div>
      </div>
      <aside className="contact-card reveal reveal-delay-1">
        <h3>Good work starts with a hello.</h3>
        <p>Have an idea or a role you think could be a fit? I&apos;d like to hear about it.</p>
        <div className="contact-row"><span>Based in</span><span>Multan, Pakistan</span></div>
        <div className="contact-row"><span>Focus</span><span>Full stack · DevOps</span></div>
        <div className="contact-row"><span>Availability</span><span>Open to opportunities</span></div>
        <a className="button-link" href="mailto:qaisirnaseer302@gmail.com">Send me an email <FiArrowUpRight aria-hidden="true" /></a>
      </aside>
    </div>
  </section>
);

export default Contact;
