import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#005BAA] text-white font-ubuntu">
      <div className="w-full max-w-screen-xl mx-auto py-10 px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <img
              className="h-16 md:h-28 cursor-pointer bg-white rounded-lg mb-4"
              src="/amrf-logo.svg"
              alt="Logo"
            />
            <p className="text-gray-300 text-center md:text-left">
              Providing reliable freight solutions globally.
            </p>
          </div>

          <div className="hidden md:flex flex-col space-y-2 md:ml-10">
            <h2 className="text-xl font-semibold mb-1">Quick Links</h2>
            <span
              className="text-sm text-gray-300 cursor-pointer hover:text-white"
              onClick={() => scrollToSection("home")}
            >
              Home
            </span>
            <span
              className="text-sm text-gray-300 cursor-pointer hover:text-white"
              onClick={() => scrollToSection("about")}
            >
              About
            </span>
            <span
              className="text-sm text-gray-300 cursor-pointer hover:text-white"
              onClick={() => scrollToSection("services")}
            >
              Services
            </span>
            <span
              className="text-sm text-gray-300 cursor-pointer hover:text-white"
              onClick={() => scrollToSection("faq")}
            >
              FAQs
            </span>
          </div>

          <div className="hidden md:flex flex-col space-y-2">
            <h2 className="text-xl font-semibold mb-1">How can we help you?</h2>
            <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
              Land Freight
            </span>
            <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
              Sea Freight
            </span>
            <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
              Air Freight
            </span>
            <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
              Customs Clearance
            </span>
            <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
              Ship Chandling
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-semibold mb-1">Get In Touch</h2>
            <div className="flex gap-2 items-start flex-wrap">
              <img className="h-5 flex-shrink-0" src="/mail.png" alt="..." />
              <span className="text-sm text-gray-300 cursor-pointer hover:text-white break-all max-w-full">
                operation@amrftransport.com
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img className="h-5 flex-shrink-0" src="/phone.png" alt="..." />
              <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
                +971 52 978 7246
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="h-5 flex-shrink-0"
                src="/location.png"
                alt="..."
              />
              <span className="text-sm text-gray-300 cursor-pointer hover:text-white">
                Al Nahda, Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 border-t-[0.1px] border-gray-500 text-center text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
          <span className="text-white font-medium">AMRF TRANSPORT LLC</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
