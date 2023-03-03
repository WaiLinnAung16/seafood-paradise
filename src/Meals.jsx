import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { BiFilterAlt, BiSearch, BiSearchAlt } from "react-icons/bi";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setMeals(data.meals);
  };
  useEffect(() => {
    getData();
    console.log(meals);
  }, []);
  return (
    <div className=" mb-[380px]">
      <div className="container mx-auto py-10">
        <div className=" flex justify-between items-center gap-3">
          <h1 className=" text-white font-bold text-3xl uppercase">
            Discover Recipes
          </h1>
          <div className=" relative w-96 group/item">
            <input
              type="text"
              className="w-96 pl-5 py-2 rounded-lg outline-none group-hover/item:ring-1 group-hover/item:ring-primary"
              placeholder="What do you want to cook?"
            />
            <BiSearchAlt className="text-2xl text-white bg-info h-10 w-10 p-2 cursor-pointer rounded-r-md absolute bottom-0 right-0" />
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-8 ">
          {meals?.map((card) => (
            <Card key={card.idMeal} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
