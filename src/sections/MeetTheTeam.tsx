import React from 'react';

export const MeetTheTeam: React.FC = () => {
  const avatarIcon = (
    <svg 
      className="team-avatar-icon" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );

  return (
    <section id="team" className="team-section">
      <div className="team-header">
        <h2 className="team-section-title">
          Meet the <span className="text-bold">Team</span>
        </h2>
        <p className="team-section-subtitle">
          At Make It Works Sdn Bhd, our strength comes from a multi-disciplinary team with
          real industry experience in construction, engineering and facilities management. Each
          team member brings unique expertise that supports our core philosophy: Think - Plan - Execute.
        </p>
      </div>

      <div className="team-container">
        {/* CEO */}
        <div className="team-card">
          <div className="team-image-container">
            {avatarIcon}
          </div>
          <div className="team-content">
            <h3 className="team-name">Nurul Fauziana Abu Bakar</h3>
            <span className="team-role">Chief Executive Officer</span>
            <div className="team-credentials">
              <span className="team-cred-item">Master of Science in Facilities Management (UTM)</span>
              <span className="team-cred-item">B.Eng (Hons) Civil Engineering (UMP)</span>
            </div>
            <ul className="team-bio-list">
              <li>
                With experience as a Technical Director (2017 - 2025), she leads all technical
                operations, engineering planning, maintenance management, sustainability
                initiatives, and system efficiency improvements.
              </li>
              <li>
                Her background spans facilities management, infrastructure works, and construction
                coordination.
              </li>
            </ul>
          </div>
        </div>

        {/* Construction Manager */}
        <div className="team-card">
          <div className="team-image-container">
            {avatarIcon}
          </div>
          <div className="team-content">
            <h3 className="team-name">Muhammad Naqib Othman</h3>
            <span className="team-role">Construction Manager</span>
            <div className="team-credentials">
              <span className="team-cred-item">B.Eng (Hons) Civil Engineering (UTHM)</span>
              <span className="team-cred-item">Diploma in Civil Engineering (PSA)</span>
            </div>
            <ul className="team-bio-list">
              <li>
                Experienced in housing and industrial development projects, site inspections, IBS
                coordination, CIDB inspections, contractor supervision and material compliance checks.
              </li>
              <li>
                Involved in factory development (Phase 1 & 2) and 100-unit residential construction in
                Taman Jaya.
              </li>
            </ul>
          </div>
        </div>

        {/* Project Manager */}
        <div className="team-card">
          <div className="team-image-container">
            {avatarIcon}
          </div>
          <div className="team-content">
            <h3 className="team-name">Rafizan Rahmat</h3>
            <span className="team-role">Project Manager</span>
            <div className="team-credentials">
              <span className="team-cred-item">Diploma in Civil Engineering (PSA)</span>
            </div>
            <ul className="team-bio-list">
              <li>
                Overseeing the maintenance, operations, and safety of a building's physical
                infrastructure and services.
              </li>
              <li>Monitor and coordinate the progress of all on-site activities.</li>
              <li>Ensuring the facility complies with all health, safety and environmental regulations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
