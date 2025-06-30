import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import customer1 from "../assets/customer1.png";
import double from "../assets/double.png";
import line from "../assets/Line.png";

const TestimonialSection = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      <div>
        <h1 className="reddit-sans font-bold text-3xl lg:text-3xl text-center sm:pt-20 sm:pb-2">
          {t('testimonials.title')}
        </h1>
        <div className="flex justify-center pb-10">
          <img src={line} width={50} height={50} alt="Line" />
        </div>
      </div>

      <div className="quicksand-font flex-row lg:grid lg:grid-cols-3 px-5 sm:gap-10 items-center sm:px-5 md:px-10 lg:px-16 mb-10">
        <div className="lg:pl-24 md:pl-5 flex justify-center">
          <img className=" h-32 w-32 md:w-64 md:h-64"
            src={customer1}
            alt="Customer"
          />
        </div>
        <div className="bg-orange-500 p-2 mt-6 md:mt-0 lg:col-span-2 rounded-2xl">
          <div className="p-3">
            <img className=" h-6 w-6 md:w-12 md:h-12" src={double} alt="Double Quotes" />
          </div>
          <p className="text-white p-3 md:text-lg lg:pt-5 sm:px-5 sm:pb-5 lg:px-10 lg:pb-8">
            {testimonials[currentTestimonial]}
          </p>
        </div>
        <div className="col-span-3 flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-4 w-4 mx-1 rounded-full ${
                currentTestimonial === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
