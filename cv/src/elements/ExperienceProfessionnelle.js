// ExperienceProfessionnelle.js
import React from 'react';
import 'C:/Users/DELL/Desktop/TpReact/cv/src/elementcss/ExperienceProfessionnelle.css';
const ExperienceProfessionnelle = () => {
    return (
      <div className="experience-professionnelle">
        <h3 className="section-title">Expérience Professionnelle</h3>

        <div className="experience-item">
          <p>
            <strong>Stage (Full stack engineer)</strong>
            <br />
            L'entreprise Screenday
            <br />
            Juillet 2022 – Septembre 2022
            <br />
            Fes, MAROC
          </p>
          <p>
            <strong>Mission</strong>
            <ul>
              <li>Compréhension approfondie des besoins des utilisateurs.</li>
              <li>Conception et développement d'une application de gestion de cabinet dentaire.</li>
              <li>Intégration de tableaux de bord Power BI Embedded dans l'application.</li>
              <li>Affichage d'indicateurs clés de performance.</li>
              <li>Mise en place d'une interface interactive et informative pour les utilisateurs.</li>
            </ul>
          </p>
          <p>
            <strong>Technologies utilisées</strong>
            <br />
            PHP, HTML, CSS, Bootstrap, MySQL, Microsoft Excel, Power BI Embedded.
          </p>
        </div>
      </div>
    );
  };

export default ExperienceProfessionnelle;
