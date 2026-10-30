import { FiArrowDownRight, FiArrowUpRight, FiCloud, FiCode, FiLayers } from 'react-icons/fi';
import profileImg from '../assets/profile.jpeg';

const Hero = () => (
  <section id="home" className="hero hero-scene">
    <div className="hero-texture" aria-hidden="true" />
    <div className="hero-glow hero-glow-one" aria-hidden="true" />
    <div className="hero-glow hero-glow-two" aria-hidden="true" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="intro-badge">
          <span className="availability-dot" />
          <span>FULL STACK DEVELOPER</span>
          <span className="badge-divider">✳</span>
          <span>DEVOPS IN THE MAKING</span>
        </div>
        <p className="hero-kicker">HEY, I&apos;M QAISIR NASEER <span aria-hidden="true">↘</span></p>
        <h1 className="hero-title">
          From <span className="title-highlight">idea.</span><br />
          To <span className="title-highlight title-highlight-alt">impact.</span>
        </h1>
        <p className="hero-description">
          I turn big ideas into polished products — designing the experience, building the system, and getting it ready for the real world.
        </p>
        <div className="hero-actions">
          <a className="button-link" href="#projects">See what I build <FiArrowDownRight aria-hidden="true" /></a>
          <a className="text-link" href="#contact">Let&apos;s make something <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-meta">
          <span className="hero-location"><span className="location-pin" /> MULTAN, PAKISTAN</span>
          <span className="meta-divider" />
          <span>OPEN TO WHAT&apos;S NEXT</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portrait and developer toolkit">
        <div className="hero-sticker" aria-hidden="true">
          <span>DESIGN</span><i>✳</i><span>DEVELOP</span><i>✳</i><span>DEPLOY</span><i>✳</i>
        </div>
        <div className="portrait-halo" />
        <div className="portrait-frame">
          <img src={profileImg} alt="Qaisir Naseer" />
          <div className="portrait-label"><span>Q</span> THE PERSON BEHIND THE PIXELS</div>
        </div>
        <div className="floating-tag floating-tag-code">
          <FiCode aria-hidden="true" /><span>Clean code</span><b>;</b>
        </div>
        <div className="floating-tag floating-tag-cloud">
          <FiCloud aria-hidden="true" /><span>Cloud curious</span>
        </div>
        <div className="floating-tag floating-tag-stack">
          <FiLayers aria-hidden="true" /><span>End-to-end thinker</span>
        </div>
        <div className="hero-orbit-label"><span /> BUILDING WITH INTENTION</div>
      </div>
    </div>
    <div className="hero-bottomline">
      <span>GOOD IDEAS DESERVE GOOD EXECUTION</span>
      <a href="#about">SCROLL TO EXPLORE <FiArrowDownRight aria-hidden="true" /></a>
      <span>01 — 05</span>
    </div>
  </section>
);

export default Hero;
