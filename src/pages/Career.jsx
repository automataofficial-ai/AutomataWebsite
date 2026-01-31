import React from 'react';

const Career = () => {
    return (
        <div className="career-page">
            <div className="container">
                <div className="career-hero">
                    <h1 className="reveal">Join the <span className="text-lime">Automata</span> Team</h1>
                    <p className="reveal">Help us forge the digital DNA of tomorrow.</p>
                </div>

                <div className="career-content reveal">
                    <div className="placeholder-card">
                        <h2>Opportunities Coming Soon</h2>
                        <p>We are currently refining ہماری (our) team structure and scouting for visionary talent. Check back soon for open positions in AI engineering, automation strategy, and creative design.</p>
                        <div className="status-badge">Status: Scouting</div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .career-page {
          min-height: 80vh;
          padding: 12rem 0 6rem;
          background: var(--color-secondary);
        }
        .career-hero {
          text-align: center;
          margin-bottom: 5rem;
        }
        .career-hero h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
        .career-hero p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .placeholder-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(198, 255, 0, 0.1);
          border-radius: 20px;
          text-align: center;
        }
        .placeholder-card h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--color-accent);
        }
        .placeholder-card p {
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }
        .status-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(198, 255, 0, 0.1);
          color: var(--color-accent);
          border: 1px solid var(--color-accent);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          .career-hero h1 { font-size: 2.5rem; }
          .placeholder-card { padding: 2rem; }
        }
      `}</style>
        </div>
    );
};

export default Career;
