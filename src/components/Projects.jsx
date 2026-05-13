import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Swoo Tech Mart',
    description: 'Swoo Tech Mart is a full-stack e-commerce platform built with Next.js 16, Node.js, and MongoDB. It features product browsing, advanced filtering, Razorpay payment integration, user authentication with OTP, shopping cart, order tracking, and a comprehensive admin panel. The platform is fully responsive and deployed on Vercel and Render.',
    tags: ['Next.js 16 (App Router)', 'React 19', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'Socket.io-client', 'Razorpay API', 'JWT Authentication', 'MongoDB', 'Node.js', 'Express'],
    github: 'https://github.com/dishantsaini25/Ishop-Frontend.git',
    live: 'https://swoo-ishop.vercel.app/',
    screenshot: '/Images/swoo.png',
    color: '#8b5cf6',
  },
  {
    title: 'BusyGrowth : Digital Marketing Agency',
    description: 'BusyGrowth Studio is a high-performance agency website built for a Jaipur-based digital marketing studio. It serves as both a service showcase and an ed-tech platform, featuring 4 mentorship courses, 5 service categories, and a fully functional contact form with automated email replies.',
    tags: ['Next.js 14 (App Router)', 'Tailwind CSS v4', 'Framer Motion', 'Nodemailer/Resend', 'Vercel'],
    github: 'https://github.com/dishantsaini25/busyGrowth.git',
    live: 'https://busygrowth.in/',
    screenshot: '/Images/busy.png',
    color: '#6366f1',
  },
  {
    title: 'IT Company Website',
    description: 'A modern, fully responsive IT company website with services showcase, team section, portfolio gallery, and contact form. Clean professional design.',
    tags: ['React', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: '/Images/it.png',
    color: '#06b6d4',
  },
  {
    title: 'MERN Chat Application',
    description: 'Real-time chat app with Socket.io. Features user authentication with JWT, private messaging, group chats, and live online status indicators.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Express'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#f59e0b',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with product management, cart, payment integration via Stripe, and a complete admin dashboard. Built with MERN stack.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#22c55e',
  },
  {
    title: 'Task Management App',
    description: 'Trello-inspired task manager with drag-and-drop boards, team collaboration features, and real-time updates using Socket.io.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'DnD'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#ec4899',
  },
  {
    title: 'REST API — Node.js',
    description: 'Robust RESTful API with JWT authentication, role-based authorization, rate limiting, and full CRUD operations. Well-documented with Postman.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#f97316',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather app using OpenWeatherMap API. Shows 5-day forecast, location search, temperature units toggle, and beautiful animated UI.',
    tags: ['React', 'API Integration', 'CSS3', 'JavaScript'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#38bdf8',
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blog platform with rich text editor, user authentication, comment system, categories, tags, and an admin panel for content management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#a855f7',
  },
  {
    title: 'Student Result Management',
    description: 'Web app for managing student results with admin panel, grade calculation, report generation, and student/teacher login system.',
    tags: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    github: 'https://github.com/dishantsaini25',
    live: '#',
    screenshot: null,
    color: '#14b8a6',
  },
];

const CARDS_PER_PAGE = 3;

const Projects = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const visible = projects.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">My <span>Work</span></h2>
          <p className="section-subtitle">10+ projects built with real-world technologies — from frontend UIs to full-stack MERN applications</p>
        </div>

        {/* Slider */}
        <div className="projects-slider">
          <div className="projects-grid">
            {visible.map((project, i) => (
              <div className="project-card card" key={`${page}-${i}`}>
                {/* Screenshot */}
                <div className="project-screenshot" style={{ borderColor: `${project.color}30` }}>
                  {project.screenshot ? (
                    <img src={project.screenshot} alt={project.title} />
                  ) : (
                    <div className="project-screenshot-placeholder" style={{ background: `${project.color}15` }}>
                      <span style={{ color: project.color, fontSize: '2.5rem' }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-btn live">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="project-info">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links-inline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      {project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, j) => (
                      <span className="project-tag" key={j} style={{ borderColor: `${project.color}30`, color: project.color }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} disabled={page === 0} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="slider-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`dot${i === page ? ' active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={next} disabled={page === totalPages - 1} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="projects-cta">
          <p>Want to see all my repositories?</p>
          <a href="https://github.com/dishantsaini25" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
