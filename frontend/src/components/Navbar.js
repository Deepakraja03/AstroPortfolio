import { useState } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import Moon from '../assets/moon.png'
import Recline from '../assets/recline.png'
import MobileMenu from './MobileMenu';
import LanguageToggle from './LanguageToggle';
import { Link, useNavigate  } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleServiceClick = () => {
    navigate('/', { state: { scrollToService: true } });
  };

  return (
    <div>
      
        <div className="mb-3 ">
      <img src={Recline} alt="recline" />
      </div>
      <div className="relative flex justify-between px-5 md:px-10">
        <div className="flex ">
        <a href='/' ><img className="absolute" src={Moon} height={50} width={100} alt="moon" /></a>
          <a href='/' ><h1 className="text-amber-500  ml-4  mt-8 md:mt-6 text-3xl md:text-4xl font-bold">Astro Sri</h1></a>
        </div>
        <div className="flex mt-8 md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden items-center md:flex lg:gap-8 md:gap-4 md:mt-7">
          <Link to="/" className="text-black hover:scale-95 text-xl">
            {t('nav.home')}
          </Link>
          <Link to="/about" className="text-black hover:scale-95 text-xl">
            {t('nav.about')}
          </Link>
          <button onClick={handleServiceClick} className="text-black hover:scale-95 text-xl">
            {t('nav.service')}
          </button>
          <Link to="/display" className="text-black hover:scale-95 text-xl">
            {t('nav.blogs')}
          </Link>
          <LanguageToggle />
          <a href='/contact' ><button className="text-amber-500 p-2 px-4 bg-stone-800 hover:bg-stone-700 hover:scale-95 rounded text-xl">
            {t('nav.contactUs')}
          </button></a>
        </nav>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};


export default Navbar