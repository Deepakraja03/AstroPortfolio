import React from "react";
import { useTranslation } from 'react-i18next';
import PlanetCard from "./PlanetCard";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet5 from "../assets/planet5.png";

const Planet = () => {
  const { t } = useTranslation();

  return (

    

    <div>
        <h1 className='font-bold pb-3 reddit-sans text-black text-3xl text-center sm:pb-5 md:pt-10 md:pb-5'>{t('predictions.title')}</h1>
        <p className='text-black quicksand-font text-base pb-10 text-center md:px-32  lg:px-80 md:pb-20 sm:pb-20 px-3'>{t('predictions.description')}</p>
        
        <PlanetCard 
        imgSrc={planet1}
        title={t('predictions.guruTransit.title')} 
        description={t('predictions.guruTransit.description')} 
        imgWidth='100px' 
        imgHeight='130px'
      />

      <PlanetCard
        imgSrc={planet2}
        title={t('predictions.shaniTransit.title')}
        description={t('predictions.shaniTransit.description')}
        imgWidth="100px"
        imgHeight="130px"
      />

      <PlanetCard
        imgSrc={planet5}
        title={t('predictions.rahuKetuTransit.title')}
        description={t('predictions.rahuKetuTransit.description')}
        imgWidth="180px"
        imgHeight="130px"
      />
    </div>
   
  );
};

export default Planet;
