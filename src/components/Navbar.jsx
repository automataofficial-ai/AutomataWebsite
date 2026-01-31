import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">AUTOMATA <span className="text-lime">AI</span></Link>
        </div>
        <nav className="nav-links">
          <Link to="/#about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#portfolio">Portfolio</Link>
          <Link to="/career">Career</Link>
          <Link to="/#contact" className="btn-lime nav-cta">Contact</Link>
        </nav>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(198, 255, 0, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo a {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 2px;
          color: white;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a:not(.nav-cta) {
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
          color: white;
          transition: var(--transition-smooth);
        }
        .nav-links a:not(.nav-cta):hover {
          color: var(--color-accent);
        }
        .nav-cta {
          padding: 0.5rem 1.2rem;
          font-size: 0.8rem;
          color: var(--color-secondary) !important;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
