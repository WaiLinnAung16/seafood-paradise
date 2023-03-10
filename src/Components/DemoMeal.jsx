import React, { useEffect, useState } from "react";
import DemoMealCard from "./DemoMealCard";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const DemoMeal = () => {
  const [meals, setMeals] = useState([]);

  const getData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const data = await api.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className=" container mx-auto py-20 flex flex-col items-center px-5 md:px-0">
          <div className="mb-16">
            <h1 className=" font-bold text-slate-100 text-3xl uppercase">
              Popular Dishes
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 xl:grid-cols-4 gap-8">
            {meals?.map(
              (meal, i) => i < 4 && <DemoMealCard key={i} meal={meal} />
            )}
          </div>

          <Link to={"/menu"}>
            <button className="flex items-center justify-center gap-3 mt-10 mx-auto py-4 px-8 bg-white ring-1 ring-primary font-semibold rounded transition-all hover:bg-primary hover:ring-white hover:text-white">
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
