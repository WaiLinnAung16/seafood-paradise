import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";
const Card = ({ card }) => {
  return (
    <div className="my-5">
      <div className="rounded-md h-[380px] shadow-lg overflow-hidden relative bg-accent">
        <div className="">
          <img
            src={card.strMealThumb}
            alt=""
            className="w-full h-52 object-cover transition-all duration-150 transform hover:scale-110"
          />
        </div>
        <div className="text-center mt-8">
          <p className=" font-semibold text-xl">{card.strMeal}</p>
        </div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-5 text-white">
          <button className="flex items-center justify-center gap-3  py-2 px-5 rounded bg-primary transition-all hover:shadow hover:shadow-primary hover:scale-105">
            Show Recipe
            <TbReportSearch className=" text-xl" />
          </button>
          <button className="flex items-center justify-center gap-3 font-semibold text-black py-2 px-4 rounded border border-secondary transition-all hover:shadow hover:bg-secondary hover:text-white hover:shadow-info hover:scale-105">
            Save
            <BiBookmark className=" text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
