// src/MobileMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleServiceClick = () => {
    onClose(); // Close the mobile menu
    navigate('/', { state: { scrollToService: true } });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end  p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center mt-8 space-y-4">
        <a href="/" className="text-black text-xl" onClick={onClose}>
          {t('nav.home')}
        </a>
        <a href="/about" className="text-black text-xl" onClick={onClose}>
          {t('nav.about')}
        </a>
        <button onClick={handleServiceClick} className="text-black text-xl">
          {t('nav.service')}
        </button>
        <a href="/display" className="text-black text-xl" onClick={onClose}>
          {t('nav.blogs')}
        </a>
        <LanguageToggle isMobile={true} />
       <a href='/contact'>
        <button
          className="text-amber-500 px-2 py-1 bg-stone-800 rounded-sm text-xl"
          onClick={onClose}
        >
          {t('nav.contactUs')}
        </button></a>
      </nav>
    </div>
  );
};

export default MobileMenu;
