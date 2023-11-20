import React from 'react';
import '../elementcss/Projets.css';

const Projets = () => {
  return (
    <div className="projets">
      <h3 className="section-title">Projects</h3>
      <ul>
        <li>
          <strong>Python Project:</strong> Analysis of the evolution of the Covid-19 pandemic.
        </li>
        <li>
          <strong>Development of a desktop application ROTG:</strong> for Operations Research and Graph Theory. (Python, R)
        </li>
        <li>
          <strong>Creation of a web video conferencing application:</strong> (Angular, TypeScript, Spring Boot, Express.js).
        </li>
        <li>
          <strong>Implementation of a project on road safety in France:</strong> (Language R)
          <br />
          {`{Data [cleansing-Analyzing-Processing]}`}
        </li>
        <li>
          <strong>Development of a video game "Chess":</strong> (Language C++ / Framework QT)
        </li>
        <li>
          <strong>Development of a desktop application for School Management:</strong> (ASP.NET).
        </li>
        <li>
          <strong>Development of a multi-platform mobile e-commerce application:</strong> with Flutter and Firebase.
        </li>
        <li>
          <strong>Research Project on Vulnerabilities and Exploitation:</strong> Detect, Exploit, and Protect (Metasploit).
        </li>
      </ul>
    </div>
  );
};

export default Projets;
