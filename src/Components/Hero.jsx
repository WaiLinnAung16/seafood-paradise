import React from "react";
import lines from "../assets/lines.svg";
import lines2 from "../assets/lines2.svg";
import arrow from "../assets/down.svg";
const Hero = () => {
  return (
    <div className=" h-[850px] w-full  bg-[url('/public/bg.jpg')] bg-cover bg-no-repeat">
      <div className=" bg-secondary h-full bg-opacity-40 backdrop-blur-sm flex justify-center items-start">
        <div className=" flex flex-col justify-center items-center py-24">
          {/* <h1 className=" font-extrabold text-7xl text-white mb-10">
            ARE U HUNGRY ?
          </h1> */}
          <h3 className=" font-extrabold text-7xl text-white flex flex-col justify-center items-center">
            <span className="tracking-wide relative">
              Easy
              <img
                src={lines}
                alt=""
                className="h-12 absolute -top-7 -left-9"
              />
            </span>
            <span className="tracking-wide ">Seafood</span>
            <span className="tracking-wide mb-5 relative">
              Recipe
              <img
                src={lines2}
                alt=""
                className="h-10 absolute -bottom-5 -right-10"
              />
            </span>
            <span className=" text-6xl">is here</span>
            <img src={arrow} alt="" className="h-48" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
