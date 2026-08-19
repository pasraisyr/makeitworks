import React, { useState, useEffect } from 'react';

export const NavHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'vision-mission', 'offer', 'team', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const mappedSection = sections[i] === 'vision-mission' ? 'about' : sections[i];
          setActiveSection(mappedSection);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <a className="logo-link" href="#home" onClick={closeMobileMenu} aria-label="makeitworks home">
          <img 
            src={scrolled || mobileMenuOpen ? "/logo-dark.png" : "/logo-white.png"} 
            alt="makeitworks" 
            className="logo-img" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-nav">
          <li>
            <a 
              href="#home" 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#offer" 
              className={`nav-item ${activeSection === 'offer' ? 'active' : ''}`}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              className={`nav-item ${activeSection === 'team' ? 'active' : ''}`}
            >
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-btn">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      >
        <nav 
          className="mobile-menu-drawer" 
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile Navigation"
        >
          <ul className="mobile-nav-list">
            <li>
              <a 
                href="#home" 
                className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#offer" 
                className={`mobile-nav-item ${activeSection === 'offer' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className={`mobile-nav-item ${activeSection === 'team' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Team
              </a>
            </li>
            <li className="mobile-nav-btn-item">
              <a 
                href="#contact" 
                className="mobile-nav-btn"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;

