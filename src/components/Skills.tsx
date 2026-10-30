import { FiCheck, FiCode, FiGitBranch, FiPackage, FiServer } from 'react-icons/fi';

const groups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', skills: ['Node.js', 'Python', 'GraphQL', 'Microservices'] },
  { title: 'Data', skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'] },
  { title: 'DevOps & tools', skills: ['Git', 'Docker', 'Linux', 'CI/CD fundamentals', 'GitHub Actions'] },
  { title: 'Mobile', skills: ['Flutter', 'Dart'] },
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
        <h2>Curious by nature.<br /><span className="text-accent">Practical by design.</span></h2>
        <p>A versatile toolkit for building across the stack, with the fundamentals to take a project from local development toward deployment.</p>
      </div>
      <div className="skills-layout">
        <div className="skill-groups reveal">
          {groups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal reveal-delay-1">
          <div className="pipeline">
            <div className="pipeline-header"><strong>HOW I THINK ABOUT DELIVERY</strong><span>THE WORKFLOW</span></div>
            <div className="pipeline-track">
              {pipeline.map((step) => (
                <div className="pipeline-node" key={step.label}>
                  <div className="pipeline-icon">{step.icon}</div>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
            <div className="pipeline-foot"><FiCheck aria-hidden="true" /> Small, reliable steps from idea to release.</div>
          </div>
          <p className="skill-note">A learning-in-public mindset: choose the right tool for the problem, then keep improving the system around it.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
