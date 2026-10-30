import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    number: '01',
    title: 'Nexus Business Collab',
    label: 'Commerce · Full stack',
    description: 'A business collaboration and commerce concept built around a modern web stack, with GraphQL and Stripe in the mix.',
    tech: ['Next.js', 'React', 'GraphQL', 'Tailwind', 'Stripe'],
    github: 'https://github.com/qaisirnaseer302/Nexus',
  },
  {
    number: '02',
    title: 'Recipe Sharing',
    label: 'Community · Web app',
    description: 'A recipe-sharing platform exploring user accounts, recipe management, and social features with a JavaScript backend.',
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/qaisirnaseer302/Recipe',
  },
  {
    number: '03',
    title: 'E-Commerce Store',
    label: 'Commerce · Web app',
    description: 'An e-commerce store project focused on the core shopping experience, built with the fundamentals of the web.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/qaisirnaseer302/E-Commerece-Store',
  },
];

const Projects = () => (
  <section id="projects" className="section projects-section">
    <div className="container">
      <div className="section-heading reveal">
        <span className="eyebrow">Selected work</span>
        <h2>Ideas made<br /><span className="text-accent">tangible.</span></h2>
        <p>A few projects that reflect how I explore product ideas, connect technologies, and learn by shipping.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-item reveal${index === 1 ? ' reveal-delay-1' : ''}${index === 2 ? ' reveal-delay-2' : ''}`} key={project.number}>
            <span className="project-number">{project.number}</span>
            <div>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-label">{project.label}</span>
            </div>
            <div className="project-detail">
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <div className="projects-end reveal">
        <a className="text-link" href="https://github.com/qaisirnaseer302" target="_blank" rel="noreferrer">
          More experiments on GitHub <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
