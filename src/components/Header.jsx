import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 justify-between items-center px-6 md:px-10 font-ubuntu bg-white">
      <div className="w-1/2 md:w-1/3 flex justify-start md:justify-center">
        <img
          className="h-14 md:h-16 cursor-pointer"
          src="/amrf-logo.svg"
          alt="Logo"
        />
      </div>

      <nav className="hidden md:flex md:justify-center md:w-1/3">
        <ul className="flex space-x-10">
          <li
            className="hover:text-[#CD4242] cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:text-[#CD4242] cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="hover:text-[#CD4242] cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <li
            className="hover:text-[#CD4242] cursor-pointer"
            onClick={() => scrollToSection("faq")}
          >
            FAQs
          </li>
        </ul>
      </nav>

      <div className="w-1/2 md:w-1/3 flex justify-end md:justify-center">
        <button
          className="relative bg-[#CD4242] w-24 md:w-32 h-10 rounded-md text-white overflow-hidden group"
          onClick={() => scrollToSection("contact")}
        >
          <span className="absolute inset-0 bg-[#CD4242] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
          <span className="absolute inset-0 bg-[#005BAA] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">Contact Us</span>
        </button>

        <button
          className="ml-3 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-9 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-9 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col py-4">
            <li
              className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#CD4242] cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#CD4242] cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#CD4242] cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#CD4242] cursor-pointer"
              onClick={() => scrollToSection("faq")}
            >
              FAQs
            </li>
          </ul>
          <div className="absolute h-screen w-full" onClick={toggleMenu}></div>
        </div>
      )}
    </header>
  );
};

export default Header;
