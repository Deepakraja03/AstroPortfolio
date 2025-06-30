import React from "react";
import { useTranslation } from 'react-i18next';
import Card from "./Card";
import health from "../assets/health.png";
import career from "../assets/career.png";
import legal from "../assets/legal.png";
import love from "../assets/love.png";
import partner from "../assets/partner.png";
import purse from "../assets/purse.png";

const Talk = () => {
  const { t } = useTranslation();

  return (
    <div className=" mx-6 md:mx-14 lg:mx-32">
      <h1 className="reddit-sans font-bold pb-3 text-3xl lg:text-3xl text-center sm:pb-5 md:pb-5">
        {t('talk.title')}
      </h1>
      <p className="text-black quicksand-font text-base pb-7 text-center md:px-32 sm:pb-10  lg:px-80 md:pb-10">
        {t('talk.description')}
      </p>
      <div className=" pt-6 sm:block md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-10 lg:gap-12 ">
        <Card
          title={t('talk.love.title')}
          description={t('talk.love.description')}
          imgSrc={love}
        />

        <Card
          title={t('talk.money.title')}
          description={t('talk.money.description')}
          imgSrc={purse}
        />

        <Card
          title={t('talk.partner.title')}
          description={t('talk.partner.description')}
          imgSrc={partner}
        />

        <Card
          title={t('talk.health.title')}
          description={t('talk.health.description')}
          imgSrc={health}
        />

        <Card
          title={t('talk.career.title')}
          description={t('talk.career.description')}
          imgSrc={career}
        />

        <Card
          title={t('talk.legalIssues.title')}
          description={t('talk.legalIssues.description')}
          imgSrc={legal}
        />
      </div>
    </div>
  );
};

export default Talk;
