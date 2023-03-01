import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const MiniCard = () => {
  return (
    <div className="w-[250px] h-[250px] -mt-20 bg-slate-200/95 p-5 flex flex-col justify-center items-center rounded-md shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-2 hover:ring hover:ring-purple-500">
      <div className=" p-5 shadow-lg rounded-full bg-primary/50">
        <VscWorkspaceTrusted className=" text-2xl text-black" />
      </div>
      <p className=" font-bold text-purple-800 text-lg uppercase mt-5 mb-3">
        Trust
      </p>
      <p className=" text-purple-700 font-bold text-sm text-center tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
    </div>
  );
};

export default MiniCard;