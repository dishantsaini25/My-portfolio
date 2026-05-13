import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your University Name',
    duration: '2022 – 2025',
    grade: 'CGPA: 7.8/10',
    description: 'Studying core computer science subjects including Data Structures, Algorithms, Database Management, Web Development, and Software Engineering.',
    highlights: ['Web Development', 'Data Structures', 'DBMS', 'Software Engineering'],
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Higher Secondary (12th) – Science',
    institution: 'Your School Name',
    duration: '2020 – 2022',
    grade: 'Percentage: 75%',
    description: 'Completed higher secondary education with Physics, Chemistry, Mathematics and Computer Science as core subjects.',
    highlights: ['Mathematics', 'Physics', 'Computer Science'],
    icon: '📚',
    current: false,
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Your School Name',
    duration: '2019 – 2020',
    grade: 'Percentage: 80%',
    description: 'Completed secondary education with strong foundation in Mathematics and Science.',
    highlights: ['Mathematics', 'Science', 'English'],
    icon: '🏫',
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">My <span>Academic</span> Journey</h2>
          <p className="section-subtitle">Building a strong foundation through formal education and continuous learning</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, i) => (
            <div className={`timeline-item${edu.current ? ' current' : ''}`} key={i}>
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <span>{edu.icon}</span>
                </div>
                {i < educationData.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-card card">
                {edu.current && <span className="current-badge">Currently Pursuing</span>}
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {edu.duration}
                    </span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>

                <p className="edu-description">{edu.description}</p>

                <div className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <span className="edu-tag" key={j}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
