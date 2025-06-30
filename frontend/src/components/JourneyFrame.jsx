import React from "react";
import { useTranslation } from 'react-i18next';
import Rainbow from "../assets/rainbow.png";
import Hands from "../assets/hands.png";
import Gem from "../assets/gem.png";
import Avatar from "../assets/avatar.png";
import Star from "../assets/star1.png";

const JourneyFrame = () => {
  const { t } = useTranslation();
  
  const items = [
    {
      icon: Rainbow,
      title: t('journey.confidentiality.title'),
      text: t('journey.confidentiality.description'),
      side: "left",
    },
    {
      icon: Hands,
      title: t('journey.professionalism.title'),
      text: t('journey.professionalism.description'),
      side: "right",
    },
    {
      icon: Gem,
      title: t('journey.spiritualConnection.title'),
      text: t('journey.spiritualConnection.description'),
      side: "left",
    },
    {
      icon: Avatar,
      title: t('journey.empowerment.title'),
      text: t('journey.empowerment.description'),
      side: "right",
    },
  ];

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-8 ${
            item.side === "right" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex-shrink-0">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyFrame;
