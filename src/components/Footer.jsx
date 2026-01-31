import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        {/* Contact Form Section in Footer */}
        <div className="footer-contact-wrapper reveal">
          <div className="contact-info">
            <h2 className="section-title">Let’s Start <br /><span className="text-lime">Automating</span></h2>
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email Us</span>
                <a href="mailto:automata.official.ai@gmail.com" className="detail-link">automata.official.ai@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">WhatsApp</span>
                <a href="https://wa.me/923315974933" target="_blank" rel="noopener noreferrer" className="detail-link">0331-5974933</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form
              action="https://formspree.io/f/automata.official.ai@gmail.com"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Project Details" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn-lime">Send Message</button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div className="footer-brand">
            <h3 className="footer-title">AUTOMATA <span className="text-lime">AI</span></h3>
          </div>

          <div className="footer-copyright">
            <p>&copy; 2026 Automata AI. All Rights Reserved.</p>
          </div>

          <div className="social-row">
            <a href="https://www.facebook.com/share/14SjyvJmb68/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/official.automata.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/automataa-ai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background-color: var(--color-secondary);
          padding: 6rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
          align-items: center;
        }
        .contact-info .section-title {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .detail-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 0.3rem;
        }
        .detail-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .detail-link:hover {
          color: var(--color-accent);
        }
        .contact-form {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem;
          border-radius: 12px;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: white;
          outline: none;
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          border-color: var(--color-accent);
        }
        .contact-form button {
          width: 100%;
          margin-top: 0.5rem;
        }
        .footer-bottom-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          gap: 2rem;
        }
        .footer-brand { justify-self: start; }
        .footer-copyright { justify-self: center; color: rgba(255, 255, 255, 0.4); font-size: 0.85rem; }
        .social-row { 
          justify-self: end; 
          display: flex; 
          gap: 1.5rem; 
        }
        .social-row a {
          color: rgba(255, 255, 255, 0.4);
          transition: var(--transition-smooth);
        }
        .social-row a:hover {
          color: var(--color-accent);
          transform: translateY(-3px);
        }
        @media (max-width: 992px) {
          .footer-contact-wrapper { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .footer-bottom-row { grid-template-columns: 1fr; text-align: center; }
          .footer-brand, .footer-copyright, .social-row { justify-self: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
