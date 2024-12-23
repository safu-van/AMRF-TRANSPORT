import React from "react";

const Services = () => {
  return (
    <div className="w-full px-5 md:px-10 mb-10 text-white font-ubuntu">
      <div className="w-full bg-[#005BAA] rounded-lg">
        <div className="h-1/3 flex justify-center items-center py-14">
          <span className="text-3xl font-semibold">Our Services</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-5 pb-10">
          <div className="w-full sm:w-[16rem] lg:w-64 p-6 md:p-8 rounded-lg shadow-custom space-y-3 bg-white text-black transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f0f9ff]">
            <img
              src="/truck.png"
              className="h-12 mx-auto mb-4"
              alt="Land Freight"
            />
            <h1 className="text-lg md:text-xl text-center">Land Freight</h1>
            <p className="text-sm text-gray-500 text-center">
              To consistently deliver on time, we'll help you manage your entire
              surface supply chain.
            </p>
          </div>
          <div className="w-full sm:w-[16rem] lg:w-64 p-6 md:p-8 rounded-lg shadow-custom space-y-3 bg-white text-black transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f0f9ff]">
            <img
              src="/ship.png"
              className="h-12 mx-auto mb-4"
              alt="Sea Freight"
            />
            <h1 className="text-lg md:text-xl text-center">Sea Freight</h1>
            <p className="text-sm text-gray-500 text-center">
              One of the most reliable, secure, and economical shipping methods
              is sea freight.
            </p>
          </div>
          <div className="w-full sm:w-[16rem] lg:w-64 p-6 md:p-8 rounded-lg shadow-custom space-y-3 bg-white text-black transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f0f9ff]">
            <img
              src="/flight.png"
              className="h-12 mx-auto mb-4"
              alt="Air Freight"
            />
            <h1 className="text-lg md:text-xl text-center">Air Freight</h1>
            <p className="text-sm text-gray-500 text-center">
              AMRF is your go-to resource for dependable air freight services
              that can adapt to your changing needs.
            </p>
          </div>
          <div className="w-full sm:w-[16rem] lg:w-64 p-6 md:p-8 rounded-lg shadow-custom space-y-3 bg-white text-black transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f0f9ff]">
            <img
              src="/paper.png"
              className="h-12 mx-auto mb-4"
              alt="Customs Clearance"
            />
            <h1 className="text-lg md:text-xl text-center">
              Customs Clearance
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Our customs clearance specialists reduce the risk of route border
              delays, so your shipments arrive at the time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
