// CVPage.js
import React from 'react';
import PhotoNameTitle from './composents/PhotoNameTitle';
import Contact from './composents/Contact';
import Skills from './composents/Skills';
import Languages from './composents/Languages';
import Interests from './composents/Interests';
import Certifications from './composents/Certifications';
import ProfessionalExperience from './composents/ProfessionalExperience';
import Education from './composents/Education';
import Projects from './composents/Projects';

const CvPageEn = () => {
  return (
    <div className="cv-container">
    <div className="left-column">
      <PhotoNameTitle />
      <Contact />
      <Skills />
      <Languages />
      <Interests />
      <Certifications />
    </div>
    <div className="right-column">
      <ProfessionalExperience />
      <Education />
      <Projects />
    </div>
  </div>
  );
};

export default CvPageEn;
