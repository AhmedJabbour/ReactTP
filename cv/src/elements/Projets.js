
import React from 'react';
import '../elementcss/Projets.css';
import '../elementcss/CVPage.css';
const Projets = () => {
    return (
      <div className="projets">
        <h3 className="section-title">Projets</h3>
        <ul>
          <li>
            <strong>Projet Python:</strong> Analyse de l'évolution de la pandémie Covid-19.
          </li>
          <li>
            <strong>Développement d'une application desktop ROTG:</strong> pour la Recherche
            Opérationnelle et la Théorie des Graphes. (Python, R)
          </li>
          <li>
            <strong>Création d’une application web de vidéo conférence:</strong> (Angular, TypeScript, Spring Boot, Express.js).
          </li>
          <li>
            <strong>Réalisation d'un projet sur la sécurité routière en France:</strong> (Langage R)
            <br />
            {`{Data [cleansing-Analysing-Processing]}`}
          </li>
          <li>
            <strong>Réalisation d'un Jeu Vidéo « Chess »:</strong> (Langage C++ / Framework QT)
          </li>
          <li>
            <strong>Réalisation d'une application desktop pour la Gestion d’École:</strong> (ASP.NET).
          </li>
          <li>
            <strong>Développement d'une application mobile de commerce électronique multiplateforme:</strong> avec Flutter et Firebase.
          </li>
          <li>
            <strong>Projet de Recherche de Vulnérabilités et Exploitation:</strong> Détecter, Exploiter et Protéger (Metasploit).
          </li>
        </ul>
      </div>
    );
  };
  
export default Projets;
