import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full h-auto p-4 mt-5 md:mt-0 md:p-14 mb-10 font-ubuntu">
      <div className="w-full h-full">
        <div className="w-full flex flex-col items-center justify-center space-y-2 mb-6 md:mb-14">
          <h1 className="text-2xl md:text-3xl font-semibold">Contact Us</h1>
          <span className="text-sm md:text-base text-gray-500 text-center px-4">
            Have questions or feedback? Send us a message.
          </span>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row relative lg:px-20 xl:px-28">
          <div className="hidden md:block w-full md:w-1/2 h-80 md:h-[37rem] mx-10 relative z-10 -top-5 rounded-xl shadow-xl overflow-hidden">
            <img
              src="/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto bg-gray-50 mx-auto md:mx-10 md:-ml-24 relative z-20 p-6 md:p-8 flex flex-col justify-center space-y-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-medium">
              Let's Chat, Reach Out to Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country={"ae"}
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    height: "44px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "0.375rem",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "transparent",
                    marginLeft: "5px",
                  }}
                  dropdownStyle={{
                    borderRadius: "0.375rem",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button className="relative bg-[#CD4242] w-full h-10 rounded-md text-white overflow-hidden group">
                <span className="absolute inset-0 bg-[#CD4242] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
                <span className="absolute inset-0 bg-[#005BAA] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
