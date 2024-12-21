import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex h-auto md:h-24 md:justify-between items-center px-6 md:px-10 font-ubuntu bg-white shadow-md">
      {/* Logo Section */}
      <div className="w-1/2 md:w-1/3 flex justify-start md:justify-center py-4 md:py-0 ">
        <img
          className="h-14 md:h-20 cursor-pointer"
          src="amrf-logo.svg"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex md:justify-center md:w-1/3">
        <ul className="flex space-x-10">
          <li className="hover:text-[#CC4242] cursor-pointer">Home</li>
          <li className="hover:text-[#CC4242] cursor-pointer">About</li>
          <li className="hover:text-[#CC4242] cursor-pointer">Service</li>
          <li className="hover:text-[#CC4242] cursor-pointer">FAQs</li>
        </ul>
      </nav>

      {/* Contact Us Button */}
      <div className="w-1/2 md:w-1/3 flex justify-end md:justify-center py-4 md:py-0">
        <button className="relative bg-[#CC4242] w-24 md:w-32 h-10 rounded-md text-white overflow-hidden group">
          <span className="absolute inset-0 bg-[#CC4242] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
          <span className="absolute inset-0 bg-[#005BAA] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">Contact Us</span>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ml-3 flex items-center">
        <button className="focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            // Cross Icon
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
            // Hamburger Icon
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col px-6 space-y-4 py-4">
            <li className="text-gray-700 hover:text-[#CC4242] cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-[#CC4242] cursor-pointer">
              About
            </li>
            <li className="text-gray-700 hover:text-[#CC4242] cursor-pointer">
              Services
            </li>
            <li className="text-gray-700 hover:text-[#CC4242] cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
