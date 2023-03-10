import React from "react";
import lines from "../assets/lines.svg";
import lines2 from "../assets/lines2.svg";

const Hero = () => {
  return (
    <div className="h-[850px] w-full bg-cover bg-no-repeat bg-[url('./bg.jpg')] bg-center lg:bg-top">
      <div className=" bg-secondary h-full bg-opacity-50 flex justify-center pb-24">
        <h3 className="font-semibold text-7xl md:text-8xl lg:text-9xl text-white flex flex-col justify-center items-center">
          <span className="tracking-wide relative">
            Easy
            <img src={lines} alt="" className="h-14 absolute -top-7 -left-9" />
          </span>
          <span className="tracking-wide ">Seafood</span>
          <span className="tracking-wide mb-5 relative">
            Recipe
            <img
              src={lines2}
              alt=""
              className="h-9 md:h-12 absolute -bottom-5 -right-7 md:-right-10"
            />
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl">is here</span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
