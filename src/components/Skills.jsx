import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 85, color: '#61dafb' },
      { name: 'JavaScript (ES6+)', level: 88, color: '#f7df1e' },
      { name: 'HTML5', level: 95, color: '#e34f26' },
      { name: 'CSS3 / Tailwind', level: 90, color: '#38bdf8' },
      { name: 'Redux Toolkit', level: 70, color: '#764abc' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 80, color: '#68a063' },
      { name: 'Express.js', level: 78, color: '#ffffff' },
      { name: 'REST APIs', level: 82, color: '#6366f1' },
      { name: 'JWT Auth', level: 75, color: '#f59e0b' },
      { name: 'Socket.io', level: 60, color: '#010101' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 80, color: '#47a248' },
      { name: 'Mongoose', level: 78, color: '#880000' },
      { name: 'Firebase', level: 60, color: '#ffca28' },
    ],
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 85, color: '#f05032' },
      { name: 'VS Code', level: 95, color: '#007acc' },
      { name: 'Postman', level: 80, color: '#ff6c37' },
      { name: 'Vite', level: 75, color: '#646cff' },
      { name: 'Vercel / Netlify', level: 80, color: '#00c7b7' },
    ],
  },
];

const techStack = [
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Express', icon: '⚡', color: '#ffffff' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js', icon: '🟢', color: '#68a063' },
  { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
  { name: 'HTML5', icon: '🔶', color: '#e34f26' },
  { name: 'CSS3', icon: '🔷', color: '#264de4' },
  { name: 'Git', icon: '🔀', color: '#f05032' },
  { name: 'Tailwind', icon: '💨', color: '#38bdf8' },
  { name: 'Postman', icon: '📮', color: '#ff6c37' },
  { name: 'GitHub', icon: '🐙', color: '#ffffff' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className="section-subtitle">Technologies I work with to build modern full-stack applications</p>
        </div>

        {/* Tech Icons Marquee */}
        <div className="tech-marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <div className="marquee-item" key={i}>
                <span className="marquee-icon">{tech.icon}</span>
                <span className="marquee-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              className={`skill-tab${activeCategory === i ? ' active' : ''}`}
              onClick={() => setActiveCategory(i)}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <div className="skill-item card" key={i}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* MERN Highlight */}
        <div className="mern-highlight">
          <h3>MERN Stack Expertise</h3>
          <div className="mern-cards">
            {[
              { letter: 'M', name: 'MongoDB', desc: 'NoSQL Database', color: '#47a248' },
              { letter: 'E', name: 'Express.js', desc: 'Backend Framework', color: '#94a3b8' },
              { letter: 'R', name: 'React.js', desc: 'Frontend Library', color: '#61dafb' },
              { letter: 'N', name: 'Node.js', desc: 'Runtime Environment', color: '#68a063' },
            ].map((item, i) => (
              <div className="mern-card" key={i} style={{ '--mern-color': item.color }}>
                <span className="mern-letter">{item.letter}</span>
                <span className="mern-name">{item.name}</span>
                <span className="mern-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
