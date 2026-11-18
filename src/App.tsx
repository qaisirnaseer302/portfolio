import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const handleThemeToggle = (origin: HTMLElement) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (!transitionDocument.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }

    const bounds = origin.getBoundingClientRect();
    const root = document.documentElement;
    root.style.setProperty('--theme-origin-x', `${bounds.left + bounds.width / 2}px`);
    root.style.setProperty('--theme-origin-y', `${bounds.top + bounds.height / 2}px`);

    transitionDocument.startViewTransition.call(document, () => {
      flushSync(() => {
        root.dataset.theme = nextTheme;
        setTheme(nextTheme);
      });
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="wordmark" href="#home" aria-label="Back to top">QN<span>.</span></a>
          <p>Designed with intention. Built with care.</p>
          <a href="#home" className="back-to-top">Back to top <span aria-hidden="true">↑</span></a>
          <small>© {new Date().getFullYear()} Qaisir Naseer</small>
        </div>
      </footer>
    </>
  );
};

export default App;
