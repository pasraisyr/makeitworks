import React, { useState } from 'react';
import contactMapImg from '../assets/contact_map-hJSBBJy7.png';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonePrefix: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your submission has been received.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-section-title">
          Let's Work <span className="text-bold">Together!</span>
        </h2>
      </div>

      <div className="contact-container">
        {/* Form Column */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              className="form-input" 
              placeholder="Name" 
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              className="form-input" 
              placeholder="Email" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group phone-group">
            <select 
              name="phonePrefix"
              className="form-select" 
              value={formData.phonePrefix}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="+60">+60 (MY)</option>
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+65">+65 (SG)</option>
            </select>
            <input 
              type="tel" 
              name="phone"
              className="form-input phone-input" 
              placeholder="Phone" 
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-submit-container">
            <button type="submit" className="form-submit-btn">Submit</button>
          </div>
        </form>

        {/* Map Column */}
        <div className="contact-map-container">
          <a 
            className="map-link" 
            href="https://maps.google.com/?q=Jalan+Setia+Perdana+BA+U13/BA,+Setia+Alam,+Shah+Alam,+Selangor" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="map-badge">Open in Maps ↗</div>
            <img className="map-image" src={contactMapImg} alt="Office Location Map" />
          </a>
        </div>

        {/* Info Column */}
        <div className="contact-info">
          {/* Address */}
          <div className="info-item">
            <div className="info-icon-container">
              <svg 
                className="info-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="info-text">
              <p>No 13-2F,</p>
              <p>Jalan Setia Perdana BA U13/BA,</p>
              <p>Setia Alam, 40170 Shah Alam,</p>
              <p>Selangor</p>
            </div>
          </div>

          {/* Phone */}
          <div className="info-item">
            <div className="info-icon-container">
              <svg 
                className="info-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div className="info-text">
              <a href="tel:+60199898977" className="contact-link">+6019 9898977</a>
            </div>
          </div>

          {/* Email */}
          <div className="info-item">
            <div className="info-icon-container">
              <svg 
                className="info-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="info-text">
              <a href="mailto:makeitworkssdnbhd@gmail.com" className="contact-link">
                makeitworkssdnbhd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
