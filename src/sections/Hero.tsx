import React from 'react';
import constructionBg from '../assets/construction_bg-BVuZnfgj.png';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="hero-section" 
      style={{ backgroundImage: `url(${constructionBg})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">THINK - PLAN - EXECUTE</h1>
      </div>
    </section>
  );
};

export default Hero;
