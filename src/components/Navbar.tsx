import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

type NavbarProps = {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
};

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'skills' },
  { label: 'Work', id: 'projects' },
];

const Navbar = ({ theme, onThemeToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter((section) => section !== null);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Qaisir Naseer, home">QN<span>.</span></a>
        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                className={`nav-link${activeSection === id ? ' is-active' : ''}`}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
          <li><a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="nav-actions">
          <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
