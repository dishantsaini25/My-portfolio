import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Developer',
    company: 'Tech Company',
    avatar: 'RS',
    color: '#6366f1',
    rating: 5,
    text: "Dishant is an incredibly talented developer. His ability to quickly grasp new technologies and implement them effectively is remarkable. He built our entire backend API in record time with clean, well-documented code.",
  },
  {
    name: 'Priya Patel',
    role: 'Project Manager',
    company: 'Startup Inc.',
    avatar: 'PP',
    color: '#06b6d4',
    rating: 5,
    text: "Working with Dishant was a great experience. He delivered the React frontend exactly as we envisioned, with excellent attention to detail and responsiveness. His communication throughout the project was outstanding.",
  },
  {
    name: 'Amit Kumar',
    role: 'Hackathon Mentor',
    company: 'Tech Community',
    avatar: 'AK',
    color: '#f59e0b',
    rating: 5,
    text: "I mentored Dishant during a hackathon and was impressed by his problem-solving skills and ability to work under pressure. He built a full-stack application in 24 hours that was both functional and well-designed.",
  },
  {
    name: 'Sneha Gupta',
    role: 'UI/UX Designer',
    company: 'Design Studio',
    avatar: 'SG',
    color: '#ec4899',
    rating: 5,
    text: "Dishant has a great eye for design and translates Figma designs to pixel-perfect React components. He understands the importance of user experience and always delivers clean, accessible interfaces.",
  },
  {
    name: 'Vikram Singh',
    role: 'Classmate & Collaborator',
    company: 'University',
    avatar: 'VS',
    color: '#22c55e',
    rating: 5,
    text: "I've collaborated with Dishant on multiple college projects. He's always the one who takes initiative, writes clean code, and helps the team understand complex concepts. A true team player and a great developer.",
  },
  {
    name: 'Neha Joshi',
    role: 'Freelance Client',
    company: 'Small Business',
    avatar: 'NJ',
    color: '#8b5cf6',
    rating: 5,
    text: "Dishant built my business website from scratch. He was professional, delivered on time, and the result exceeded my expectations. The website is fast, beautiful, and works perfectly on all devices.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const visible = [
    testimonials[(active - 1 + testimonials.length) % testimonials.length],
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What People <span>Say</span></h2>
          <p className="section-subtitle">Feedback from colleagues, mentors, and clients I've had the pleasure of working with</p>
        </div>

        {/* Desktop: 3-card slider */}
        <div className="testimonials-slider">
          {visible.map((t, i) => (
            <div
              className={`testimonial-card card${i === 1 ? ' center' : ' side'}`}
              key={`${t.name}-${i}`}
            >
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.avatar}
                </div>
                <div>
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role} @ {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
