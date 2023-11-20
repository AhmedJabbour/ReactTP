import React from 'react';
import 'C:/Users/DELL/Desktop/TpReact/cv/src/elementcss/Formation.css';

const Education = () => {
  return (
    <div className="formation">
      <h3 className="section-title">Education</h3>
      <ul>
        <li>
          <strong>Master 2 MIASHS (Mathematics and Computer Science Applied to Human and Social Sciences)</strong>
          <br />
          Web Analyst 
          <br />
          University of Lille, Lille, France
          <br />
          2023-2024
        </li>
        <li>
          <strong>Master 1 in Information Systems Engineering</strong>
          <br />
          Higher School of Engineering in Applied Sciences, Fes - Morocco
          <br />
          2022 – 2023
        </li>
        <li>
          <strong>Bachelor's in Software Engineering (With Honors)</strong>
          <br />
          Higher School of Engineering in Applied Sciences, Fes - Morocco
          <br />
          2019 – 2022
        </li>
      </ul>
    </div>
  );
};

export default Education;
