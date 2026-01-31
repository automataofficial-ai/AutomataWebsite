import React from 'react';

const About = () => {
  const highlights = [
    { title: "AI Automation", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Workflow Builders", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
    { title: "Chatbot Systems", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
    { title: "Predictive Analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
  ];

  return (
    <section id="about" className="section-padding about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About <span className="text-lime">Automata AI</span></h2>
          <p className="section-subtitle">
            We are a next-generation AI agency dedicated to revolutionizing how businesses operate through cutting-edge automation and intelligent systems.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
              <div className="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}></path>
                </svg>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .about {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }
        .about-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .section-subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
          .section-subtitle { font-size: 1rem; }
        }
@media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .highlight-item {
          text-align: center;
          padding: 2rem;
          transition: var(--transition-smooth);
        }
        .icon-box {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-secondary);
          color: var(--color-accent);
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          box-shadow: 0 0 15px var(--color-accent-glow);
        }
        .highlight-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .highlight-item:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
};

export default About;
