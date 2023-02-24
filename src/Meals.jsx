import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

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
    <div className=" bg-accent">
      <div className=" grid grid-cols-4 gap-8 container mx-auto">
        {meals?.map((card) => (
          <Card key={card.idMeal} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
