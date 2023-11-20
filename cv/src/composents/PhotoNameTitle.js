import React from 'react';
import 'C:/Users/DELL/Desktop/TpReact/cv/src/elementcss/PhotoNomPrenom.css';
const PhotoNameTitle = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/photocv.jpeg`} alt="img" />
      <h2>Ahmed Jabbour</h2>
      <p>Data Analyste in @Lesaffre</p>
    </div>
  );
};

export default PhotoNameTitle;
