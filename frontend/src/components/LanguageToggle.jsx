import React from "react";

const LanguageToggle = () => {
  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else {
      alert("Google Translate not loaded yet. Please wait a second and try again.");
    }
  };

  return (
    <div className="flex justify-end gap-2 p-4">
      <button
        onClick={() => changeLanguage("en")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ta")}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Tamil
      </button>
    </div>
  );
};

export default LanguageToggle;