import enterpriseImgV2 from '../assets/enterprise_v2.jpg';
import workflowImgV2 from '../assets/workflow_v2.jpg';
import dashboardImgV2 from '../assets/dashboard_v2.jpg';
import chatImg from '../assets/chat.png';
import flowImg from '../assets/flow.png';
import enterpriseImg from '../assets/enterprise.png';

const Portfolio = () => {
  const works = [
    { title: "Enterprise AI Solutions", category: "Full Suite", img: dashboardImgV2 },
    { title: "Smart Workflows", category: "Automation", img: workflowImgV2 },
    { title: "Neural Dashboards", category: "Analytics", img: enterpriseImg },
    { title: "LLM Support", category: "Chat", img: chatImg },
    { title: "Process Orchestrator", category: "Logic", img: flowImg },
    { title: "Custom SaaS AI", category: "Bespoke", img: enterpriseImgV2 }
  ];

  return (
    <section id="portfolio" className="our-work section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-lime">Work</span></h2>
          <p className="section-subtitle">Delivering high-performance AI systems for global enterprises.</p>
        </div>

        <div className="work-grid">
          {works.map((work, index) => (
            <div key={index} className="work-item reveal">
              <div className="work-img">
                <img src={work.img} alt={work.title} />
                <div className="work-overlay">
                  <span className="work-cat">{work.category}</span>
                  <h3>{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .our-work {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .work-item {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
          aspect-ratio: 16/10;
        }
        .work-img {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .work-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        .work-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          transform: translateY(20px);
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .work-cat {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          display: block;
        }
        .work-item:hover .work-overlay {
          transform: translateY(0);
          opacity: 1;
        }
        .work-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
