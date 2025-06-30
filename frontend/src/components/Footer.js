import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FFB02E] mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between items-center gap-8">
        {/* Branding and Contact */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
          <h1 className="text-3xl reddit-sans text-white font-bold">{t('footer.brand')}</h1>
          <div className="bg-white rounded-3xl px-6 py-3 shadow-md flex items-center">
            <span className="font-semibold text-base md:text-lg text-center">
              {t('footer.contactText')} <br className="block md:hidden" />
              <span className="font-bold reddit-sans text-xl md:text-2xl">{t('footer.phoneNumber')}</span>
            </span>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white/80 border-l-4 border-[#FFB02E] rounded-xl p-6 max-w-md shadow-sm">
            <h2 className="font-bold reddit-sans text-xl mb-2 text-[#FFB02E]">{t('footer.disclaimer.title')}</h2>
            <p className="font-medium quicksand-font text-gray-700 text-sm md:text-base">
              {t('footer.disclaimer.text')}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white py-4 bg-[#FFB02E]/90 border-t border-white/20">
        &copy; {new Date().getFullYear()} {t('footer.brand')}. {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
