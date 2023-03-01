import axios from "axios";
import React, { useEffect, useState } from "react";
import DemoMealCard from "./DemoMealCard";
import underline from "../assets/underline.svg";
import { IoMdArrowRoundForward } from "react-icons/io";
const DemoMeal = () => {
  const [meals, setMeals] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setMeals(data.meals);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" container mx-auto py-20">
        <div className="mb-16">
          <h1 className=" font-bold text-secondary text-3xl uppercase relative w-96 mx-auto">
            Popular Dishes
            <img
              src={underline}
              alt=""
              className=" h-3 absolute -bottom-2 left-0"
            />
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {meals?.map(
            (meal, i) => i < 4 && <DemoMealCard key={i} meal={meal} />
          )}
        </div>
        <button className="flex items-center justify-center gap-3 mt-10 mx-auto py-4 px-8 bg-white ring-1 ring-purple-500 font-semibold rounded transition-all hover:bg-purple-600 hover:ring-white hover:text-white">
          View others
          <IoMdArrowRoundForward className=" text-xl" />
        </button>
      </div>
    </>
  );
};

export default DemoMeal;
