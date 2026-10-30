const About = () => (
  <section id="about" className="section about-section">
    <div className="container about-layout">
      <div className="about-aside reveal">
        <span className="eyebrow">A little context</span>
        <h2>One foot in<br />product, one in<br /><span className="text-accent">the platform.</span></h2>
      </div>
      <div className="about-copy reveal reveal-delay-1">
        <p>
          I enjoy working across the whole stack: shaping a clear user experience, building the systems behind it, and making sure the pieces work well together.
        </p>
        <p>
          My toolkit spans modern frontend development, backend services, databases, and the practical DevOps foundations that help applications ship and run reliably. I value clean interfaces, maintainable code, and learning by building.
        </p>
        <div className="stat-row" aria-label="Portfolio highlights">
          <div className="stat"><strong>01+</strong><span>Years building</span></div>
          <div className="stat"><strong>05+</strong><span>Projects explored</span></div>
          <div className="stat"><strong>Full</strong><span>Stack perspective</span></div>
        </div>
        <div className="location-card reveal reveal-delay-2">
          <div className="location-copy">
            <span>Currently based in</span>
            <strong>Multan, Pakistan</strong>
            <a href="https://www.openstreetmap.org/search?query=Multan%2C%20Pakistan" target="_blank" rel="noreferrer">
              Find me on the map ↗
            </a>
          </div>
          <div className="location-map" role="img" aria-label="Stylized map showing Multan, Pakistan">
            <svg viewBox="0 0 220 215" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path className="map-grid" d="M0 36H220M0 86H220M0 136H220M0 186H220M38 0V215M88 0V215M138 0V215M188 0V215" />
              <path className="map-road-minor" d="M-10 170C39 147 57 170 92 143S145 113 235 123M-8 66C44 93 68 31 109 54S171 94 231 53M32-8C45 42 21 80 54 116S102 170 86 224M169-10C140 42 178 75 153 113S129 163 159 226" />
              <path className="map-road" d="M-4 108C47 102 59 129 94 105S151 72 224 87" />
              <path className="map-road" d="M108-8C103 34 130 63 114 99S83 159 119 224" />
              <circle className="map-pulse" cx="118" cy="99" r="13" />
              <circle className="map-pin" cx="118" cy="99" r="6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
