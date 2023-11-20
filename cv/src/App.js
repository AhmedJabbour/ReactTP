import React, { useState } from 'react';
import CVPage from './CVPage';
import CvPageEn from './CvPageEn';
import './App.css';

const App = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  return (
    <div className="app">
      {isEnglish ? <CvPageEn /> : <CVPage />}
      <button onClick={toggleLanguage}> Switch Language</button>
    </div>
  );
};

export default App;
