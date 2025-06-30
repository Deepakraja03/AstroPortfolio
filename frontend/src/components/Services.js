import React from "react";
import { useTranslation } from 'react-i18next';
import Card from "./Card";
import lemon from "../assets/lemon.png";
import id from "../assets/id.png";
import call from "../assets/call.png";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <h1 className='font-bold reddit-sans text-black text-3xl text-center mb-2 sm:pb-5 pt-10 md:pb-5 '>{t('services.title')}</h1>
      <p className='text-black quicksand-font text-base text-center md:px-32 mb-5  sm:pb-10 lg:px-80 md:pb-10 px-3'>
        {t('services.description')}
      </p>
      <div className='px-10 sm:block md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 sm:px-40 md:px-7 md:gap-10 lg:gap-12 lg:px-5'>
        <Card
          title={t('services.pariharams.title')}
          description={t('services.pariharams.description')}
          imgSrc={call}
          buttonText={t('services.pariharams.button')}
          buttonLink={`/display?category=Pariharams`}
        />
        
        <Card
          title={t('services.talkChat.title')}
          description={t('services.talkChat.description')}
          imgSrc={call}
          buttonText={t('services.talkChat.button')}
          buttonLink={`/display?category=Talk & Chat`}
        />
        <Card
          title={t('services.horoscope.title')}
          description={t('services.horoscope.description')}
          imgSrc={lemon}
          buttonText={t('services.horoscope.button')}
          buttonLink={`/display?category=Horoscope`}
        />
        <Card
          title={t('services.marriageMatching.title')}
          description={t('services.marriageMatching.description')}
          imgSrc={id}
          buttonText={t('services.marriageMatching.button')}
          buttonLink={`/display?category=Marriage Matching`}
        />
        <Card
          title={t('services.childBirth.title')}
          description={t('services.childBirth.description')}
          imgSrc={call}
          buttonText={t('services.childBirth.button')}
          buttonLink={`/display?category=Child Birth`}
        />

        <Card
          title={t('services.aboutCareer.title')}
          description={t('services.aboutCareer.description')}
          imgSrc={lemon}
          buttonText={t('services.aboutCareer.button')}
          buttonLink={`/display?category=About Career`}
        />
        <Card
          title={t('services.strengthWeak.title')}
          description={t('services.strengthWeak.description')}
          imgSrc={id}
          buttonText={t('services.strengthWeak.button')}
          buttonLink={`/display?category=Strength & Weak`} 
        />
      </div>
    </div>
  );
};

export default Services;
