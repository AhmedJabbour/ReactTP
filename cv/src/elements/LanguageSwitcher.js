// components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('fr')}>Français</Button>
    </div>
  );
};

export default LanguageSwitcher;
