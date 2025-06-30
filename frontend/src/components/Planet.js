import React from "react";
import PlanetCard from "./PlanetCard";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet5 from "../assets/planet5.png";

const Planet = () => {
  return (

    

    <div>
        <h1 className='font-bold pb-3 reddit-sans text-black text-3xl text-center sm:pb-5 md:pt-10 md:pb-5'>General Predictions</h1>
        <p className='text-black quicksand-font text-base pb-10 text-center md:px-32  lg:px-80 md:pb-20 sm:pb-20 px-3'>Astrologer is here to provide solutions for all your astrological needs. We offer a variety of services ranging
from horoscopes, astrology consultation, numerology to tarot card reading. </p>
        
        <PlanetCard 
        imgSrc={planet1}
        title='Guru Transit' 
        description='Ask what does Venus transit signifies for you, love life, relationship, pleasure, luxuries.' 
        imgWidth='100px' 
        imgHeight='130px'
      />

      <PlanetCard
        imgSrc={planet2}
        title="Shani Transit"
        description="Know the impact of Shani transit, expect
        great changes, profits and fulfillment of
        desire."
        imgWidth="100px"
        imgHeight="130px"
      />

      <PlanetCard
        imgSrc={planet5}
        title="Rahu Ketu Transit"
        description="Discuss Rahu Ketu transit, how it will
        influence you and get remedy to receive
        benefits."
        imgWidth="180px"
        imgHeight="130px"
      />
    </div>
   
  );
};

export default Planet;
