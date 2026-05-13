import React from 'react';
import profileImg from '../assets/profile.jpg';
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
                <img src={profileImg} alt="Dishant Saini" className="about-profile-img" />
              </div>
              <div className="about-exp-badge">
                <span className="exp-num">9+</span>
                <span className="exp-text">Months of<br/>Practice</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h3 className="about-name">Dishant Saini</h3>
            <p className="about-role">MERN Full Stack Developer</p>

            <p className="about-bio">
              Hey! I'm Dishant, a self-taught MERN Stack Developer from Jaipur, India. I completed
              my BA from Rajasthan University and discovered my passion for web development through
              self-learning — putting in 9+ months of dedicated practice to master the MERN stack.
            </p>
            <p className="about-bio">
              I participated in a hackathon which sharpened my rapid development and problem-solving
              skills. I'm now focused on building production-ready full-stack applications and
              aiming to land a role at top tech companies like Google and Oracle.
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
