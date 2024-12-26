import React from "react";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <div className="w-full px-5 md:px-10 mb-10 text-white font-ubuntu">
      <div className="w-full bg-[#005BAA] rounded-lg">
        <div className="h-1/3 flex justify-center items-center py-14">
          <span className="text-3xl font-semibold">Our Services</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-5 pb-10">
          {services.map((item) => (
            <div key={item.id} className="w-full sm:w-[16rem] lg:w-64 p-6 md:p-8 rounded-lg shadow-custom space-y-3 bg-white text-black transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f0f9ff]">
              <img
                src={item.icon}
                className="h-12 mx-auto mb-4"
                alt="Land Freight"
              />
              <h1 className="text-lg md:text-xl text-center">{item.heading}</h1>
              <p className="text-sm text-gray-500 text-center">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
