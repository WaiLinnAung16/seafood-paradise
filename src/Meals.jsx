import React, { useEffect, useRef, useState } from "react";
import Card from "./Components/Card";
import { BiFilterAlt, BiSearch, BiSearchAlt } from "react-icons/bi";
import Search from "./Components/Search";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const getData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const data = await api.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" mb-[230px]">
      <div className="container mx-auto py-10">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-3 mb-3">
          <h1 className=" text-white font-bold text-3xl uppercase mb-3 lg:mb-0">
            Discover Recipes
          </h1>
          <div className=" relative w-80 md:w-96 group/item">
            <Search />
          </div>
        </div>
        <div className=" grid grid-cols-1 mx-5 md:grid-cols-2 xl:mx-0 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {meals?.map((card) => (
            <Card key={card.idMeal} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
