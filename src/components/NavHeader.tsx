import React, { useState, useEffect } from 'react';

export const NavHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a className="logo-link" href="#home">
          <svg className="logo-svg" viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="20" fill="#dc2626" fontSize="20" fontWeight="900" fontFamily="Outfit">
              make
              <tspan fill={scrolled ? "#0f172a" : "#ffffff"}>it</tspan>
              works
            </text>
            <text 
              x="0" 
              y="32" 
              className="logo-subtext" 
              fontSize="5.2" 
              fontWeight="700" 
              letterSpacing="1.2" 
              fontFamily="Plus Jakarta Sans"
            >
              THINK - PLAN - EXECUTE
            </text>
          </svg>
        </a>

        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-item active">Home</a>
          </li>
          <li>
            <a href="#contact" className="nav-btn">Contact Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavHeader;
