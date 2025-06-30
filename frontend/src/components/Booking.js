import React from 'react'
import { useTranslation } from 'react-i18next';
import Card from './Card'
import lemon from '../assets/lemon.png'
import call from '../assets/call.png'
import id from '../assets/id.png'

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div>
        <div>
            <div>
                <h1 className='font-semibold text-4xl md:text-center px-10 my-4'>{t('booking.title')}</h1>
            </div>
            <div>
                <p className='md:text-center px-10 my-3 font-normal text-gray-600'>{t('booking.description')}</p>
            </div>
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
        
      </div>
        </div>
    </div>
  )
}

export default Booking