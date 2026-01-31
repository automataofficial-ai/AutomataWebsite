import React from 'react';

const Stats = () => {
  const stats = [
    { number: "100+", label: "Automations Deployed" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "24/7", label: "Smart Monitoring" },
    { number: "40hr+", label: "Weekly Time Saved" }
  ];

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .stats-section {
          background-color: var(--color-secondary);
          padding: 4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .stat-number {
          font-size: 3.5rem;
          color: var(--color-accent);
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
        }
        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          .stat-number { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
