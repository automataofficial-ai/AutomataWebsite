import React from 'react';

const Services = () => {
  const capabilities = [
    {
      title: "Automation Services",
      desc: "Streamline your business operations with intelligent, end-to-end automation workflows.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Web Development",
      desc: "Custom, high-performance web applications built with the latest modern frameworks.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "App Development",
      desc: "Robust mobile and desktop applications designed for seamless user experiences.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Data Analysis",
      desc: "Extract meaningful insights from your raw data to drive informed business decisions.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Analytics Dashboards",
      desc: "Real-time visual monitoring of your key performance metrics and business health.",
      icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "AI Strategy",
      desc: "Strategic consulting to integrate artificial intelligence into your core business model.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <section id="services" className="capabilities-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-lime">Capabilities</span></h2>
          <p className="section-subtitle">A suite of intelligent solutions designed for exponential growth.</p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-card reveal">
              <div className="capability-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cap.icon}></path>
                </svg>
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .capabilities-section {
          background-color: var(--color-secondary);
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .capability-card {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: var(--transition-smooth);
        }
        @media (max-width: 992px) {
          .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .capability-card { padding: 2rem; }
          .capabilities-grid { grid-template-columns: 1fr; }
        }
        .capability-icon {
          color: var(--color-accent);
          margin-bottom: 1.5rem;
        }
        .capability-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .capability-card p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .capability-card:hover {
          background: rgba(198, 255, 0, 0.05);
          border-color: var(--color-accent);
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(198, 255, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Services;
