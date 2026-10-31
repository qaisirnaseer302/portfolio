import { FiCheck, FiCode, FiDatabase, FiGitBranch, FiPackage, FiServer, FiSmartphone } from 'react-icons/fi';

const stages = [
  {
    id: 'foundations',
    title: 'Interface foundations',
    label: 'Build the experience',
    description: 'Turn ideas into responsive, accessible interfaces that feel at home on every screen.',
    icon: <FiCode aria-hidden="true" />,
    skills: ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    label: 'Make it work',
    description: 'Connect the interface to dependable services, APIs, and modular application logic.',
    icon: <FiServer aria-hidden="true" />,
    skills: ['Node.js', 'Python', 'GraphQL', 'Microservices'],
  },
  {
    id: 'data',
    title: 'Data foundations',
    label: 'Give data a home',
    description: 'Choose practical storage for relational data, documents, and fast-moving workloads.',
    icon: <FiDatabase aria-hidden="true" />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'delivery',
    title: 'Build & delivery',
    label: 'Ship with confidence',
    description: 'Keep code organized and move projects from a local setup toward reliable releases.',
    icon: <FiGitBranch aria-hidden="true" />,
    skills: ['Git', 'Linux', 'Docker', 'CI/CD fundamentals', 'GitHub Actions'],
  },
  {
    id: 'mobile',
    title: 'Mobile apps',
    label: 'Take it further',
    description: 'Carry the same product thinking into cross-platform mobile experiences.',
    icon: <FiSmartphone aria-hidden="true" />,
    skills: ['Flutter', 'Dart'],
  },
];

const pipeline = [
  { label: 'Code', icon: <FiCode aria-hidden="true" /> },
  { label: 'Version', icon: <FiGitBranch aria-hidden="true" /> },
  { label: 'Build', icon: <FiPackage aria-hidden="true" /> },
  { label: 'Deploy', icon: <FiServer aria-hidden="true" /> },
];

const Skills = () => (
  <section id="skills" className="section skills-section">
    <div className="container">
      <div className="section-heading reveal">
        <span className="eyebrow">Tools of the trade</span>
        <h2>A skill set with<br /><span className="text-accent">room to grow.</span></h2>
        <p>Explore the tools I use to move from the first interface to a finished, working product.</p>
      </div>

      <div className="roadmap-intro reveal">
        <span className="roadmap-status"><span aria-hidden="true" /> MY DEVELOPMENT ROADMAP</span>
        <span className="roadmap-hint">Choose a milestone to jump ahead <span aria-hidden="true">↓</span></span>
      </div>

      <nav className="roadmap-nav reveal" aria-label="Skill roadmap milestones">
        {stages.map((stage, index) => (
          <a className="roadmap-nav-link" href={`#roadmap-${stage.id}`} key={stage.id}>
            <span className="roadmap-nav-number">{String(index + 1).padStart(2, '0')}</span>
            <span>{stage.title}</span>
          </a>
        ))}
      </nav>

      <div className="skills-roadmap">
        {stages.map((stage, index) => (
          <article className="roadmap-step" id={`roadmap-${stage.id}`} key={stage.id}>
            <span className="roadmap-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className="roadmap-card reveal">
              <div className="roadmap-card-top">
                <span className="roadmap-icon">{stage.icon}</span>
                <span className="roadmap-label">{stage.label}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <ul className="roadmap-skills" aria-label={`${stage.title} skills`}>
                {stage.skills.map((skill) => <li className="roadmap-skill" key={skill}>{skill}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="roadmap-finish reveal">
        <div className="roadmap-finish-copy">
          <span className="roadmap-finish-icon"><FiCheck aria-hidden="true" /></span>
          <div>
            <strong>From first commit to final release</strong>
            <p>Small, reliable steps make better things possible.</p>
          </div>
        </div>
        <div className="pipeline-track" aria-label="Code, version, build, deploy">
          {pipeline.map((step) => (
            <div className="pipeline-node" key={step.label}>
              <span className="pipeline-icon">{step.icon}</span>
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
