import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[35rem]">
      {/* Video as background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Full overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/70 to-transparent"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-end md:justify-center items-start h-full px-5 md:px-20 py-20">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to <br className="flex md:hidden" />{" "}
          <span className="text-[#CD4242]">AMRF Transport</span>
        </h1>
        <p className="text-lg text-white mb-4 max-w-md">
          Your trusted partner for reliable, efficient, and professional
          transport services.
        </p>
        <button className="relative bg-[#CD4242] px-6 py-2 rounded-md text-white overflow-hidden group">
          <span className="absolute inset-0 bg-[#005BAA] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
          <span className="absolute inset-0 bg-[#CD4242] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">Discover Our Services</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
