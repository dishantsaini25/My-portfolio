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
    title: 'Mini Web App : Weather Search App, Movie Search App and Translator',
    description: '"A collection of three mini web apps — Movie Search, Weather Search, and Translator — built with HTML, CSS, and JavaScript using external APIs. The Movie Search app fetches movie details from an online database, the Weather Search app provides real-time weather updates for any city, and the Translator app converts text between multiple languages. All three apps feature a clean, responsive interface for a smooth user experience."',
  tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/dishantsaini25/Api-Project.git',
    live: 'https://api-project-ruddy-nine.vercel.app/movie.html',
    screenshot: '/Images/mini.png',
    color: '#06b6d4',
  },
  {
    title: 'Dream Real Estate : Real Estate Listing Platform',
    description: 'Dream Estate is a complete, production-ready real estate web application that demonstrates proficiency in modern React development, responsive design, state management, and UI/UX best practices. The project is scalable, maintainable, and ready for deployment. It features a clean, intuitive interface for browsing property listings, advanced filtering options, and a seamless user experience across all devices.',
    tags: ['React', 'Tailwind CSS', 'Context API', ' LocalStorage', 'Mock JWT with localStorage', ' Vite', 'Vercel'],
    github: 'https://github.com/dishantsaini25/real-estate-react-app.git',
    live: 'https://real-estate-react-app-vert.vercel.app/',
    screenshot: '/Images/dream.png',
    color: '#f59e0b',
  },
  {
    title: 'Shopping Cart',
    description: 'This project is a modern, responsive mini e-commerce website developed using React.js and powered by a dummy products API. It demonstrates core e-commerce functionalities with a clean UI and smooth user interactions—all driven by fundamental React concepts like components, state management, props, and hooks.',
    tags: ['React', 'Redux', 'React Router', 'Tailwind CSS', 'DummyJSON Products API', 'React Icons'],
    github: 'https://github.com/dishantsaini25/ShoppingCart.git',
    live: 'https://shopping-cart-ten-neon-87.vercel.app/',
    screenshot: '/Images/shopping.png',
    color: '#22c55e',
  },
  {
    title: 'Functional Calculator App',
    description: '"A complete utility toolkit built with HTML, CSS, and JavaScript — featuring a Functional Calculator, Simple Interest Calculator, BMI Calculator, and Calories Calculator. Each tool delivers instant, accurate results with a clean and user-friendly interface. Perfect for daily calculations ranging from basic arithmetic to health and finance tracking."',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/dishantsaini25/functional-calculator-app.git',
    live: 'https://functional-calculator-app.vercel.app/',
    screenshot: '/Images/calculator.png',
    color: '#ec4899',
  },
  {
    title: 'Beauty Salon Website',
    description: 'A modern beauty salon website built with clean HTML and CSS, featuring a hero section, services, about, and contact layout for practice and portfolio use',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/dishantsaini25/Beauty_and_Salon_Web.git',
    live: 'https://beauty-and-salon-web.vercel.app/',
    screenshot: '/Images/beauty-salon.png',
    color: '#f97316',
  },
  {
    title: 'Gad_Kumaun : Hotel Booking Website',
    description: 'GAD KAMUN is a beautifully crafted hotel website developed during a hackathon. It presents a complete digital presence for a luxury hotel brand, featuring multiple pages that highlight the property ambiance, room offerings, services, and visual gallery – all wrapped in a cohesive, elegant design.',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/dishantsaini25/Gad_Kumaun.git',
    live: 'https://gad-kumaun.vercel.app/',
    screenshot: '/Images/gad-kumaun.png',
    color: '#38bdf8',
  },
  {
    title: 'Frontend Portfolio Website',
    description: 'A modern portfolio website built with HTML, CSS, and JavaScript to showcase my skills and projects.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/dishantsaini25/portfolio.git',
    live: 'https://portfolio-azure-omega-2ar4ho0bcf.vercel.app/',
    screenshot: '/Images/portfolio.png',
    color: '#a855f7',
  }
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
