import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu} className="nav-logo-link">
            <img src="/logo.png" alt="Automata AI Logo" className="nav-logo-img" />
          </Link>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/#about" onClick={closeMenu}>About</Link>
          <Link to="/#services" onClick={closeMenu}>Services</Link>
          <Link to="/#portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/career" onClick={closeMenu}>Career</Link>
          <Link to="/#contact" className="btn-lime nav-cta" onClick={closeMenu}>Contact</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
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
        .nav-logo-link {
          display: flex;
          align-items: center;
        }
        .nav-logo-img {
          height: 35px;
          width: auto;
          display: block;
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

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .bar {
          width: 25px;
          height: 2px;
          background-color: white;
          transition: var(--transition-smooth);
        }

        @media (max-width: 992px) {
          .nav-links {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .navbar { padding: 1rem 0; }
          .menu-toggle { display: flex; }
          
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: #000;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.4s ease;
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          }
          .nav-links.active {
            right: 0;
          }
          .nav-links a {
            font-size: 1.2rem !important;
          }

          /* Hamburger Animation */
          .menu-open .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .menu-open .bar:nth-child(2) { opacity: 0; }
          .menu-open .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
