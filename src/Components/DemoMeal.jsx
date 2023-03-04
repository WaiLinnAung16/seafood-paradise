import axios from "axios";
import React, { useEffect, useState } from "react";
import DemoMealCard from "./DemoMealCard";
import underline from "../assets/underline.svg";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
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
      <div className="">
        <div className=" container mx-auto py-20 flex flex-col items-center">
          <div className="mb-16">
            <h1 className=" font-bold text-slate-100 text-3xl uppercase">
              Popular Dishes
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {meals?.map(
              (meal, i) => i < 4 && <DemoMealCard key={i} meal={meal} />
            )}
          </div>

          <Link to={"/menu"}>
            <button className="flex items-center justify-center gap-3 mt-10 mx-auto block py-4 px-8 bg-white ring-1 ring-primary font-semibold rounded transition-all hover:bg-primary hover:ring-white hover:text-white">
              View others
              <IoMdArrowRoundForward className=" text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DemoMeal;
