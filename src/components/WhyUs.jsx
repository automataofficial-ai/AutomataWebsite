import React from 'react';

const WhyUs = () => {
  const strengths = [
    { title: "Faster Operations", desc: "Reduce turnaround time by up to 70% with intelligent agents." },
    { title: "Automated Workflows", desc: "Say goodbye to manual repetitive tasks." },
    { title: "Scalable AI", desc: "Solutions that grow as your business expands." },
    { title: "Reduced Cost", desc: "Optimize your workforce and operational expenses." },
    { title: "Enterprise Security", desc: "Your data is protected with industry-standard encryption." },
    { title: "Custom Models", desc: "AI tailored specifically to your unique business logic." }
  ];

  return (
    <section className="section-padding why-us">
      <div className="container">
        <div className="why-header">
          <h2 className="section-title">Why Choose <span className="text-lime">Us</span></h2>
        </div>

        <div className="why-grid">
          {strengths.map((item, index) => (
            <div key={index} className="why-item">
              <div className="lime-dot"></div>
              <div className="why-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .why-us {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }
        .why-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; gap: 2rem; }
          .why-item { gap: 1rem; }
        }
        .why-item {
          display: flex;
          gap: 1.5rem;
        }
        .lime-dot {
          min-width: 12px;
          height: 12px;
          background: var(--color-accent);
          margin-top: 0.5rem;
          border-radius: 2px;
          box-shadow: 0 0 10px var(--color-accent-glow);
        }
        .why-item h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }
        .why-item p {
          font-size: 0.95rem;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
