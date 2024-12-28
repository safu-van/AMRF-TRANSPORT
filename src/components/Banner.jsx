import React from "react";

const Banner = () => {
  const scrollIntoServices = () => {
    const element = document.getElementById("services");
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[40rem] md:h-[43rem] will-change-transform">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "translateZ(0)" }}
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/45 backdrop-filter backdrop-blur-[0px]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end md:justify-end items-start h-full px-5 md:px-28 py-20 font-ubuntu">
        <h1 className="text-4xl font-semibold text-white mb-4">
          Welcome to <br className="flex md:hidden" />
          <span className="text-[#CD4242]">AMRF TRANSPORT</span>
        </h1>
        <p className="text-sm md:text-lg text-white mb-4 max-w-md">
          Your trusted partner for reliable, efficient, and professional
          transport services.
        </p>
        <button
          className="relative bg-[#CD4242] px-6 py-2 rounded-md text-white overflow-hidden group"
          onClick={scrollIntoServices}
        >
          <span className="absolute inset-0 bg-[#005BAA] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
          <span className="absolute inset-0 bg-[#CD4242] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">Discover Our Services</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
