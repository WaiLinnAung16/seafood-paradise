import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="my-5">
      <div
        className="rounded-md h-[380px] shadow overflow-hidden relative bg-accent cursor-pointer transition duration-300
   transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary"
      >
        <div className="">
          <img
            src={card.strMealThumb}
            alt=""
            className="w-full h-52 object-cover transition-all duration-300 transform hover:scale-110"
          />
        </div>
        <div className="text-center mt-8">
          <p className=" font-semibold text-xl">{card.strMeal}</p>
        </div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-5 text-white">
          <Link to={`/detail/${card.idMeal}`}>
            <button className="flex items-center justify-center gap-3  py-3 px-10 rounded bg-primary transition-all hover:shadow hover:shadow-primary hover:font-bold hover:ring-2 hover:ring-primary active:bg-white active:text-primary ">
              Show Detail
              <TbReportSearch className=" text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
