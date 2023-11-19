// PhotoNomPrenom.js
import React from 'react';
import 'C:/Users/DELL/Desktop/TpReact/cv/src/elementcss/PhotoNomPrenom.css';
const PhotoNomPrenom = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/photocv.jpeg`} alt="img" />
      <h2>Ahmed Jabbour</h2>
      <p>Data Analyste chez @Lesaffre</p>
    </div>
  );
};

export default PhotoNomPrenom;
