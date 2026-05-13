import React, { useState } from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'Cascading Creativity: Web Design & Development',
    issuer: 'WsCube Tech',
    date: '9th Dec 2025',
    image: '/Images/cert1.jpeg',
    skills: ['HTML5', 'CSS3'],
    color: '#f7df1e',
    link: '#',
  },
  {
    title: 'DOMinate with JavaScript: From Basics to Brilliance',
    issuer: 'WsCube Tech',
    date: '26 Dec 2025',
    image: '/Images/certi2.jpeg',
    skills: ['HTML5','CSS3','JavaScript', 'ES6+', 'Async/Await'],
    color: '#61dafb',
    link: '#',
  },
  {
    title: 'Responsive Magic: Crafting Mobile-First Web Experiences',
    issuer: 'WsCube Tech',
    date: '28th Dec 2026',
    image: '/Images/certi3.jpeg',
    skills: ['HTML5', 'CSS3', 'Media Queries', 'Flexbox', 'Grid', 'Mobile-First Design', 'Bootstrap'],
    color: '#68a063',
    link: '#',
  },
  {
    title: 'Cyber Secure User : SCSU',
    issuer: 'Star Certification',
    date: '2024',
    image: '/Images/scsu.png',
    skills: ['Cyber Secure User '],
    color: '#f59e0b',
    link: '#',
  },
  {
    title: 'ETHICAL HACKING: EHE',
    issuer: 'Star Certification',
    date: 'Feb 2024',
    image: '/Images/eth.png',
    skills: ['Linux Skills', ' Programming Skills', ' Computer Networking Skills'],
    color: '#f05032',
    link: '#',
  },
  {
    title: 'IT ESSENTIALS',
    issuer: 'Star Certification',
    date: 'Dec 2023',
    image: '/Images/it.png',
    skills: ['Hardware and Components', 'Operating Systems', 'Networking Fundamentals', 'Security Fundamentals', 'Troubleshootingw'],
    color: '#6366f1',
    link: '#',
  },
];

const Certificates = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + certificates.length) % certificates.length);
  const next = () => setActive((a) => (a + 1) % certificates.length);

  const cert = certificates[active];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certificates</span>
          <h2 className="section-title">My <span>Achievements</span></h2>
          <p className="section-subtitle">6 certifications validating my skills and dedication to continuous learning</p>
        </div>

        <div className="cert-slider">
          {/* Main Card */}
          <div className="cert-main-card card" key={active}>
            <div className="cert-image-side">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="cert-img" />
              ) : (
                <div className="cert-img-placeholder" style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}>
                  <span className="cert-placeholder-icon">🏆</span>
                  <span className="cert-placeholder-text">Certificate</span>
                </div>
              )}
              <div className="cert-number">
                {active + 1} / {certificates.length}
              </div>
            </div>

            <div className="cert-content-side">
              <div className="cert-issuer-badge" style={{ background: `${cert.color}15`, borderColor: `${cert.color}30`, color: cert.color }}>
                {cert.issuer}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-date-text">📅 {cert.date}</p>
              <div className="cert-skills">
                {cert.skills.map((s, j) => (
                  <span className="cert-skill-tag" key={j}>{s}</span>
                ))}
              </div>
              {cert.link !== '#' && (
                <a href={cert.link} className="cert-verify-btn" target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="cert-controls">
            <button className="slider-btn" onClick={prev} aria-label="Previous certificate">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="slider-dots">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Certificate ${i + 1}`}
                />
              ))}
            </div>

            <button className="slider-btn" onClick={next} aria-label="Next certificate">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="cert-thumbnails">
            {certificates.map((c, i) => (
              <button
                key={i}
                className={`cert-thumb${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                style={{ borderColor: i === active ? c.color : 'transparent' }}
              >
                {c.image ? (
                  <img src={c.image} alt={c.title} />
                ) : (
                  <div className="cert-thumb-placeholder" style={{ background: `${c.color}20` }}>
                    <span style={{ color: c.color, fontSize: '1.2rem' }}>🏆</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
