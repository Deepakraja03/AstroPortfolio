import React from "react";
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  const buttonClass = isMobile 
    ? "text-amber-500 px-3 py-1 bg-white hover:bg-gray-100 hover:scale-95 rounded-sm text-sm border border-amber-500"
    : "text-amber-500 px-3 py-1 bg-white hover:bg-gray-100 hover:scale-95 rounded text-sm border border-amber-500";

  return (
    <button
      onClick={toggleLanguage}
      className={buttonClass}
    >
      {i18n.language === 'en' ? t('language.tamil') : t('language.english')}
    </button>
  );
};

export default LanguageToggle;