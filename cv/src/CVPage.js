// CVPage.js
import React from 'react';
import PhotoNomPrenom from './elements/PhotoNomPrenom';
import Coordonnees from './elements/Coordonnees';
import Competences from './elements/Competences';
import Langues from './elements/Langues';
import CentresInteret from './elements/CentresInteret';
import Certifications from './elements/Certifications';
import ExperienceProfessionnelle from './elements/ExperienceProfessionnelle';
import Formation from './elements/Formation';
import Projets from './elements/Projets';
import './elementcss/CVPage.css';

const CVPage = () => {
    return (
      <div className="cv-container">
        <div className="left-column">
          <PhotoNomPrenom />
          <Coordonnees />
          <Competences />
          <Langues />
          <CentresInteret />
          <Certifications />
        </div>
        <div className="right-column">
          <ExperienceProfessionnelle />
          <Formation />
          <Projets />
        </div>
      </div>
    );
  };
  
  export default CVPage;
