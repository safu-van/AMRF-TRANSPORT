import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full px-4 xl:px-20 py-8 md:py-14">
      <div className="flex flex-col md:flex-row w-full lg:gap-8">
        <div className="w-1/2 hidden md:flex flex-row">
          <div className="flex-1 py-8 lg:pl-8 pr-2">
            <img
              className="h-full w-full object-cover rounded-[2rem]"
              src="/ab-3.jpg"
              alt="..."
            />
          </div>
          <div className="flex flex-col flex-1 py-8 pl-2 lg:pr-8">
            <div className="flex-[3] pb-2">
              <img
                className="h-full w-full object-cover rounded-[2rem]"
                src="/ab-2.jpg"
                alt="..."
              />
            </div>
            <div className="flex-[1] pt-2">
              <img
                className="h-full w-full object-cover rounded-[2rem]"
                src="/ab-1.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-8 px-4 lg:px-10 space-y-3 font-ubuntu">
          <div className="flex items-center justify-center md:justify-normal space-x-1 text-[#CD4242]">
            <BsFillInfoCircleFill className="text-lg" />
            <span className="text-base">About Us</span>
          </div>

          <h1 className="text-2xl md:text-3xl text-center md:text-start font-semibold text-[#005BAA]">
            Delivering Excellence in Global Freight Solutions
          </h1>

          <p className="text-md text-gray-500">
            At <span className="text-[#CD4242]">AMRF TRANSPORT LLC</span>, we
            are committed to providing reliable, efficient, and cost-effective
            freight solutions tailored to your needs. With a strong foundation
            in land freight, air freight, sea freight, and customs clearance, we
            have built a reputation for delivering excellence across every
            corner of the globe. Our dedicated team works around the clock to
            ensure that your shipments arrive safely and on time, backed by
            cutting-edge technology and a customer-first approach.
          </p>

          <p className="text-md text-gray-500">
            With years of experience in the logistics industry, AMRF Transport
            LLC has become a trusted partner for businesses of all sizes.
            Whether it's managing complex supply chains or handling sensitive
            cargo, we pride ourselves on delivering seamless solutions with
            transparency and integrity. Let us take care of your transportation
            needs so you can focus on growing your business. At AMRF, your
            success drives us forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
