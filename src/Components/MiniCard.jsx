import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const MiniCard = () => {
  return (
    <div className="w-[300px] md:w-[250px] h-[250px] -mt-20 p-5 bg-accent text-gray-900 flex flex-col justify-center items-center rounded-md shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-info hover:shadow-xl hover:-translate-y-2 hover:ring hover:ring-secondary">
      <div className=" p-5 shadow-lg rounded-full ring-2 ring-secondary">
        <VscWorkspaceTrusted className=" text-2xl text-gray-800" />
      </div>
      <p className=" font-bold  text-lg uppercase mt-5 mb-3">Trust</p>
      <p className="  font-bold text-sm text-center tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
    </div>
  );
};

export default MiniCard;
