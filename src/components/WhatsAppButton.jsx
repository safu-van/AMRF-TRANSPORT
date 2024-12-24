import React from "react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/+919188552541", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-4 z-50 rounded-full w-16 h-16 flex items-center justify-center"
    >
      <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-14 h-14 " />
    </button>
  );
};

export default WhatsAppButton;
