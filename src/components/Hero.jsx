import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Scale Faster with <br />
            <span className="text-lime">Intelligent</span> <br />
            Automation
          </h1>
          <p className="hero-subtitle">
            Automata AI builds intelligent automation systems that help businesses scale effortlessly.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-lime">Get Started</a>
            <a href="#services" className="btn-outline">Book a Demo</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape"></div>
          <div className="abstract-shape-2"></div>
          <div className="glow-effect"></div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 10% 20%, rgba(198, 255, 0, 0.05) 0%, transparent 40%);
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }
        .hero-visual {
          position: relative;
          height: 500px;
        }
        .abstract-shape {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 2px solid var(--color-accent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          animation: rotate 20s linear infinite;
        }
        .abstract-shape-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 1px solid var(--color-primary);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          animation: rotate-reverse 15s linear infinite;
        }
        .glow-effect {
          position: absolute;
          width: 150px;
          height: 150px;
          background: var(--color-accent);
          filter: blur(100px);
          opacity: 0.3;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @media (max-width: 992px) {
          .hero-title { font-size: 3.5rem; }
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-subtitle { margin: 0 auto 2.5rem; }
          .hero-btns { justify-content: center; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
