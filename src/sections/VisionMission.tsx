import React from 'react';
import visionMissionBg from '../assets/visionmission-C4elBR_Y.png';

export const VisionMission: React.FC = () => {
  return (
    <section 
      id="vision-mission" 
      className="vision-mission-section"
      style={{ backgroundImage: `url(${visionMissionBg})` }}
    >
      <div className="vision-mission-overlay"></div>
      <div className="vision-mission-container">
        <div className="vision-mission-column">
          <h2 className="vision-mission-title">
            <span className="text-muted">Our </span>Vision
          </h2>
          <p className="vision-mission-text">
            To become a trusted leader in construction and facilities management through
            quality workmanship, technical excellence and consistent performance.
          </p>
        </div>
        <div className="vision-mission-column">
          <h2 className="vision-mission-title">
            <span className="text-muted">Our </span>Mission
          </h2>
          <ul className="vision-mission-list">
            <li>Provide innovative, efficient and cost effective construction solutions.</li>
            <li>Deliver reliable and professional facilities management services.</li>
            <li>Strengthen client confidence through quality, safety and transparency.</li>
            <li>Build long-term relationships through consistent and measurable results.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
