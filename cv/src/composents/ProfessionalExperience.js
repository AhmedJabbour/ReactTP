import React from 'react';
import 'C:/Users/DELL/Desktop/TpReact/cv/src/elementcss/ExperienceProfessionnelle.css';

const ProfessionalExperience = () => {
  return (
    <div className="experience-professionnelle">
      <h3 className="section-title">Professional Experience</h3>

      <div className="experience-item">
        <p>
          <strong>Internship (Full Stack Engineer)</strong>
          <br />
          Company: Screenday
          <br />
          July 2022 – September 2022
          <br />
          Fes, MOROCCO
        </p>
        <p>
          <strong>Mission</strong>
          <ul>
            <li>In-depth understanding of user needs.</li>
            <li>Design and development of a dental cabinet management application.</li>
            <li>Integration of Power BI Embedded dashboards into the application.</li>
            <li>Display of key performance indicators.</li>
            <li>Implementation of an interactive and informative interface for users.</li>
          </ul>
        </p>
        <p>
          <strong>Technologies Used</strong>
          <br />
          PHP, HTML, CSS, Bootstrap, MySQL, Microsoft Excel, Power BI Embedded.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
