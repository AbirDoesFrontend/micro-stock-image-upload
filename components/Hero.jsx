import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <div className="relative flexCenter">
      <div className="absolute text-center z-10 sm:space-y-9 px-8 sm:px-44 lg:px-64">
        <h1 className="font-bold text-sm sm:bold-20 lg:bold-32 text-white">
          The best free stock photos, royalty-free images shared by
          creators.
        </h1>
        <div className="relative bg-green-50 rounded-full h-[30px] lg:h-[60px] w-full p-[18px] lg:p-[28px] flex items-center mt-2">
          <input
            type="text"
            placeholder="Search for free photos"
            className="bg-transparent border-none outline-none w-full placeholder-white focus:placeholder-transparent placeholder:medium-14 sm:placeholder:bold-18 text-white"
          />
          <button>
            <SearchIcon style={{ color: 'white' }} />
          </button>
        </div>
      </div>
      <img
        src="/hero-bg.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
};

export default Hero;
