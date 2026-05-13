import React from 'react';
import './About.css';

const highlights = [
  { icon: '🚀', title: 'MERN Stack', desc: 'Building full-stack apps with MongoDB, Express, React & Node.js' },
  { icon: '🎯', title: 'Problem Solver', desc: 'Love tackling complex challenges with clean, efficient solutions' },
  { icon: '📱', title: 'Responsive Design', desc: 'Crafting pixel-perfect UIs that work on every device' },
  { icon: '⚡', title: 'Performance', desc: 'Optimizing apps for speed, scalability and great UX' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p className="section-subtitle">A passionate developer on a mission to build impactful digital experiences</p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-avatar">
                <span>DS</span>
              </div>
              <div className="about-exp-badge">
                <span className="exp-num">1+</span>
                <span className="exp-text">Year of<br/>Experience</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h3 className="about-name">Dishant Saini</h3>
            <p className="about-role">MERN Full Stack Developer</p>

            <p className="about-bio">
              Hey! I'm Dishant, a passionate MERN Stack Developer from India. I started my journey
              as a frontend developer and have grown into a full-stack developer who loves building
              end-to-end web applications.
            </p>
            <p className="about-bio">
              I participated in my first hackathon which sparked my love for rapid development and
              problem-solving. Now I'm focused on mastering the MERN stack and building production-ready
              applications. My goal is to work at top tech companies like Google and Oracle.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Dishant Saini</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role</span>
                <span className="info-value">Full Stack Developer</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value available">Available for Work</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, i) => (
            <div className="highlight-card card" key={i}>
              <span className="highlight-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
