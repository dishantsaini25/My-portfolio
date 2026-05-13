import React from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'The Complete JavaScript Course 2024',
    issuer: 'Udemy',
    date: 'Jan 2024',
    credentialId: 'UC-XXXXXXXX',
    description: 'Comprehensive JavaScript course covering ES6+, OOP, async programming, and modern JavaScript patterns.',
    skills: ['JavaScript', 'ES6+', 'OOP', 'Async/Await'],
    icon: '🟨',
    color: '#f7df1e',
    link: '#',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Mar 2024',
    credentialId: 'UC-YYYYYYYY',
    description: 'In-depth React course covering hooks, Redux, React Router, and building production-ready applications.',
    skills: ['React', 'Redux', 'Hooks', 'React Router'],
    icon: '⚛️',
    color: '#61dafb',
    link: '#',
  },
  {
    title: 'Node.js, Express, MongoDB & More',
    issuer: 'Udemy',
    date: 'May 2024',
    credentialId: 'UC-ZZZZZZZZ',
    description: 'Complete backend development course covering Node.js, Express, MongoDB, authentication, and REST APIs.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    icon: '🟢',
    color: '#68a063',
    link: '#',
  },
  {
    title: 'Hackathon Participation Certificate',
    issuer: 'Hackathon Organizer',
    date: '2024',
    credentialId: 'HACK-2024',
    description: 'Participated in a competitive hackathon, building a full-stack web application within 24 hours.',
    skills: ['Problem Solving', 'Teamwork', 'Full Stack', 'Rapid Development'],
    icon: '🏆',
    color: '#f59e0b',
    link: '#',
  },
  {
    title: 'Git & GitHub Complete Course',
    issuer: 'Coursera / YouTube',
    date: 'Feb 2024',
    credentialId: 'GIT-2024',
    description: 'Mastered version control with Git and GitHub including branching, merging, and collaborative workflows.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    icon: '🔀',
    color: '#f05032',
    link: '#',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Dec 2023',
    credentialId: 'FCC-RWD-2023',
    description: 'Earned certification in responsive web design covering HTML5, CSS3, Flexbox, Grid, and accessibility.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Accessibility'],
    icon: '🎨',
    color: '#0a0a23',
    link: '#',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certificates</span>
          <h2 className="section-title">My <span>Achievements</span></h2>
          <p className="section-subtitle">Certifications and achievements that validate my skills and dedication to learning</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div className="cert-card card" key={i}>
              <div className="cert-top">
                <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}>
                  <span className="cert-icon">{cert.icon}</span>
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((s, j) => (
                  <span className="cert-skill-tag" key={j}>{s}</span>
                ))}
              </div>

              <div className="cert-footer">
                <span className="cert-id">ID: {cert.credentialId}</span>
                <a href={cert.link} className="cert-verify" target="_blank" rel="noopener noreferrer">
                  Verify
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
