import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'MERN Chat Application',
    description: 'A real-time chat application built with the MERN stack and Socket.io. Features include user authentication, private messaging, group chats, and online status indicators.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Express'],
    category: 'fullstack',
    github: 'https://github.com/dishant-saini',
    live: '#',
    featured: true,
    icon: '💬',
    color: '#6366f1',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with product management, cart functionality, payment integration, and admin dashboard. Built with MERN stack.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    category: 'fullstack',
    github: 'https://github.com/dishant-saini',
    live: '#',
    featured: true,
    icon: '🛒',
    color: '#06b6d4',
  },
  {
    title: 'Task Management App',
    description: 'A Trello-inspired task management application with drag-and-drop functionality, team collaboration, and real-time updates.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    github: 'https://github.com/dishant-saini',
    live: '#',
    featured: false,
    icon: '📋',
    color: '#f59e0b',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React and Vite. Features smooth animations, responsive design, and modern UI/UX.',
    tags: ['React', 'Vite', 'CSS3', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/dishant-saini',
    live: 'https://portfolio-azure-omega-2ar4ho0bcf.vercel.app',
    featured: false,
    icon: '🌐',
    color: '#8b5cf6',
  },
  {
    title: 'REST API with Node.js',
    description: 'A robust RESTful API with authentication, authorization, rate limiting, and comprehensive documentation. Includes CRUD operations for multiple resources.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose'],
    category: 'backend',
    github: 'https://github.com/dishant-saini',
    live: '#',
    featured: false,
    icon: '⚙️',
    color: '#22c55e',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that fetches real-time data from OpenWeatherMap API. Features include 5-day forecast, location search, and beautiful UI.',
    tags: ['React', 'API Integration', 'CSS3', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/dishant-saini',
    live: '#',
    featured: false,
    icon: '🌤️',
    color: '#f97316',
  },
];

const filters = ['all', 'fullstack', 'frontend', 'backend'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">My <span>Work</span></h2>
          <p className="section-subtitle">A collection of projects I've built to solve real problems and learn new technologies</p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div className={`project-card card${project.featured ? ' featured' : ''}`} key={i}>
              {project.featured && <span className="featured-badge">⭐ Featured</span>}

              <div className="project-icon-wrapper" style={{ background: `${project.color}15`, borderColor: `${project.color}30` }}>
                <span className="project-icon">{project.icon}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span className="project-tag" key={j}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/dishant-saini" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
