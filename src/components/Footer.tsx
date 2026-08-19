import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo-link" aria-label="makeitworks home">
          <img src="/logo-white.png" alt="makeitworks" className="footer-logo" />
        </a>
        <p>© 2026 makeitworks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
