import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

const SearchMenu = () => {
  const { name } = useParams();
  const [searchMenu, setSearchMenu] = useState([]);
  const fetchSearch = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await api.json();
    setSearchMenu(data.meals);
  };
  useEffect(() => {
    fetchSearch();
  }, []);
  return (
    <div className="mb-[230px] py-10  min-h-screen">
      <div className=" w-96 mx-auto">
        <Link
          to={"/menu"}
          className=" flex justify-center items-center gap-2 mb-6 text-medium text-info/80 cursor-pointer hover:text-info"
        >
          <BsArrowLeftCircleFill />
          <h1 className="font-bold">Back to Menu</h1>
        </Link>
      </div>
      <h1 className=" font-semibold text-slate-100 text-2xl text-center mb-8">
        <span className=" font-medium">Search :</span> {name}
      </h1>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-3 lg:mx-0 container xl:mx-auto">
        {searchMenu?.map((meal) => (
          <Card card={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
