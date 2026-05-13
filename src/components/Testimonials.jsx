import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Virendra Rathore',
    role: 'Mentor & Senior Developer',
    company: 'WsCube Tech',
    avatar: 'VR',
    color: '#6366f1',
    rating: 5,
    text: 'You have shown consistent effort and a strong willingness to learn. Your problem-solving approach is improving, and you actively seek feedback to grow. I appreciate your punctuality and dedication to meeting deadlines. To take the next step, focus on deepening your understanding of core concepts and communicating your ideas more clearly during discussions. Keep up the positive attitude and curiosity — you have great potential.'

,
  },
  {
    name: 'Mahavir Kumawat',
    role: 'Mentor',
    company: 'WsCube Tech',
    avatar: 'MK',
    color: '#06b6d4',
    rating: 5,
    text: "You're doing fine. You show up on time and you're trying. Main thing to work on is double-checking your work before asking for help — a lot of answers you can find yourself. Keep going.",
  },
  {
    name: 'Aman Sharma',
    role: 'Colleague',
    company: 'WsCube Tech',
    avatar: 'As',
    color: '#f59e0b',
    rating: 5,
    text: "You're one of the most reliable people on the team. You always meet your deadlines, your work is clean, and you never leave things hanging. It's a genuine pleasure working alongside you.",
  },
  {
    name: 'Lokesh Parjapat',
    role: 'Colleague',
    company: 'WsCube Tech',
    avatar: 'LP',
    color: '#ec4899',
    rating: 5,
    text: "Dishant has a great eye for design and translates Figma designs to pixel-perfect React components. He understands the importance of user experience and always delivers clean, accessible interfaces.",
  },
  {
    name: 'Kartik Maru',
    role: 'Junior Developer',
    company: 'WsCube Tech',
    avatar: 'KM',
    color: '#22c55e',
    rating: 5,
    text: "You don't get stuck for long. You try things on your own first, and only then ask for help. And when you do ask, you come prepared with what you've already tried. That's exactly the right approach.",
  },
  {
    name: 'Ankit Sodawat',
    role: 'Freelance Client',
    company: 'Busy Growth',
    avatar: 'AS',
    color: '#8b5cf6',
    rating: 5,
    text: "Dishant built my business website from scratch. He was professional, delivered on time, and the result exceeded my expectations. The website is fast, beautiful, and works perfectly on all devices.",
  },
];

const AUTO_INTERVAL = 4500;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    setPaused(false);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

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
        <div
          className="testimonials-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
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
        <div className="testimonials-progress">
          <div className={`testimonials-progress-bar${paused ? ' paused' : ''}`}></div>
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
                onClick={() => goTo(i)}
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
