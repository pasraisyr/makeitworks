import React from 'react';
import aboutUsImg from '../assets/about_us-CJR0q7g5.png';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Make It Works Sdn. Bhd. specializes in delivering practical, efficient, and
            sustainable solutions that improve the performance, longevity, and
            value of buildings and infrastructure. We believe successful project
            delivery is the result of smart planning, structured workflows, and
            disciplined site execution.
          </p>
        </div>
        <div className="about-image-container">
          <img src={aboutUsImg} className="about-image" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
