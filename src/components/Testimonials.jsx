import React from 'react';

const Testimonials = () => {
    const reviews = [
        { name: "Sarah Johnson", role: "CEO, TechFlow", quote: "Automata AI transformed our entire customer support workflow. We saved 40 hours a week!" },
        { name: "David Chen", role: "Ops Manager, ScaleUp", quote: "The integration was seamless. Their custom AI models really understand our business." },
        { name: "Elena Rodriguez", role: "Founder, Innovate", quote: "Professional, efficient, and forward-thinking. The best AI agency we've worked with." }
    ];

    return (
        <section className="section-padding testimonials">
            <div className="container">
                <div className="testimonial-header">
                    <h2 className="section-title">Client <span className="text-lime">Feedback</span></h2>
                </div>

                <div className="testimonial-grid">
                    {reviews.map((rev, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lime">★</span>
                                ))}
                            </div>
                            <p className="quote">"{rev.quote}"</p>
                            <div className="user-info">
                                <h3>{rev.name}</h3>
                                <span>{rev.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .testimonials {
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }
        .testimonial-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          padding: 2.5rem;
          background: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .stars {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .quote {
          font-style: italic;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .user-info h3 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }
        .user-info span {
          font-size: 0.85rem;
          opacity: 0.6;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
