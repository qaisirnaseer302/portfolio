import React from 'react';
import { FaReact, FaNodeJs, FaBootstrap, FaPython, FaDatabase, FaGit, FaJira } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiTailwindcss, SiRedis, SiMongodb, SiFlutter, SiHtml5, SiCss, SiDart, SiGraphql } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <SiHtml5 />, category: 'Frontend', color: '#ff9900' },
  { name: 'CSS', icon: <SiCss />, category: 'Frontend', color: '#61dafb' },
  { name: 'React', icon: <FaReact />, category: 'Frontend', color: '#61dafb' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend', color: '#3178c6' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', color: '#339933' },
  { name: 'Python', icon: <FaPython />, category: 'Language', color: '#3776ab' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Database', color: '#e10098' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database', color: '#47a248' },
  { name: 'PostgreSQL', icon: <FaDatabase />, category: 'Database', color: '#336791' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend', color: '#06b6d4' },
  { name: 'BootStrap', icon: <FaBootstrap />, category: 'Frontend', color: '#2496ed' },
  { name: 'Flutter', icon: <SiFlutter />, category: 'Apps', color: '#ff9900' },
  { name: 'Dart', icon: <SiDart />, category: 'Apps', color: '#ff9900' },
  { name: 'Git', icon: <FaGit />, category: 'Version Control', color: '#2496ed' },
  { name: 'GraphQL', icon: <SiGraphql />, category: 'Backend', color: '#3a6e95ff' },
  { name: 'Redis', icon: <SiRedis />, category: 'Cache & DB', color: '#3377acff' },
  { name: 'Jira', icon: <FaJira />, category: 'Project Management', color: '#2496ed' },
  { name: "microservices", icon: <FaNodeJs />, category: "Backend", color: "#339933" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          I utilize a modern, scalable tech stack to build robust digital solutions from end-to-end.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '2rem'
      }}>
        {skills.map((skill, index) => (
          <div key={index} className="glass" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'default'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = skill.color;
              e.currentTarget.style.boxShadow = `0 4px 20px ${skill.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}>
            <div style={{ fontSize: '3rem', color: skill.color }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{skill.name}</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
