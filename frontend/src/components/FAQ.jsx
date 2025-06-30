import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 rounded-lg p-4 bg-[#FFB02E]">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
        onClick={toggleFAQ}
      >
        <span>{question}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true });

  return (
    <div className="w-full md:w-[60%] py-8">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQ;
