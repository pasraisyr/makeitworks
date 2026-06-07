import React from 'react';
import offerConstructionImg from '../assets/offer_construction-cCh-2Gs7.png';
import offerFacilitiesImg from '../assets/offer_facilities-FhIx8JTH.png';
import offerTechnicalImg from '../assets/offer_technical-3A-IeCxO.png';
import offerBlueprintImg from '../assets/offer_blueprint-CBPAOvwN.png';

export const WhatWeOffer: React.FC = () => {
  return (
    <section id="offer" className="offer-section">
      <div className="offer-header">
        <h2 className="offer-section-title">
          What we <span className="text-bold">Offer</span>
        </h2>
      </div>

      <div className="offer-container">
        {/* Item 1: End-to-End Construction Solutions */}
        <div className="offer-item image-left">
          <div className="offer-image-container">
            <img 
              className="offer-image" 
              src={offerConstructionImg} 
              alt="End-to-End Construction Solutions" 
            />
          </div>
          <div className="offer-content">
            <h3 className="offer-title">End-to-End Construction Solutions</h3>
            <p className="offer-description">
              We combine complete construction services from initial planning to
              project handover. This includes structural works, architectural
              coordination, MEP integration, QA/QC, cost control, contractor
              management, and full compliance with industry standards.
            </p>
            <p className="offer-focus">
              Our focus: quality, precision, and on-time delivery.
            </p>
          </div>
        </div>

        {/* Item 2: Integrated Facilities Management (IFM) */}
        <div className="offer-item image-right">
          <div className="offer-image-container">
            <img 
              className="offer-image" 
              src={offerFacilitiesImg} 
              alt="Integrated Facilities Management (IFM)" 
            />
          </div>
          <div className="offer-content">
            <h3 className="offer-title">Integrated Facilities Management (IFM)</h3>
            <p className="offer-description">
              We manage the full lifecycle and daily operations of buildings through a
              structured, data-driven FM approach. This covers preventive
              maintenance, reactive maintenance, asset lifecycle planning, vendor
              management, and system performance monitoring.
            </p>
            <p className="offer-goal">
              Our goal: improve building performance and minimize downtime.
            </p>
          </div>
        </div>

        {/* Item 3: Technical & Engineering Support */}
        <div className="offer-item image-left">
          <div className="offer-image-container">
            <img 
              className="offer-image" 
              src={offerTechnicalImg} 
              alt="Technical & Engineering Support" 
            />
          </div>
          <div className="offer-content">
            <h3 className="offer-title">Technical & Engineering Support</h3>
            <p className="offer-description">
              Backed by strong FM and engineering expertise, we offer technical
              diagnostics, troubleshooting, root cause analysis, system optimization,
              and engineering assessments for building systems. Every solution we
              provide is practical, efficient and cost-effective.
            </p>
          </div>
        </div>

        {/* Item 4: Project Management & Site Execution */}
        <div className="offer-item image-right">
          <div className="offer-image-container">
            <img 
              className="offer-image" 
              src={offerBlueprintImg} 
              alt="Project Management & Site Execution" 
            />
          </div>
          <div className="offer-content">
            <h3 className="offer-title">Project Management & Site Execution</h3>
            <p className="offer-description">
              We deliver complete project management for both construction and
              facilities management projects, including:
            </p>
            <ul className="offer-list">
              <li>Project planning & scheduling</li>
              <li>Safety & risk management</li>
              <li>Progress reporting & documentation</li>
            </ul>
            <p className="offer-subtext">
              Guided by our methodology Think - Plan - Execute, we deliver every
              project meticulously, systematically and with professional discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
