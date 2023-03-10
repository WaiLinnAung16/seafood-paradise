import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import ShowHideIcon from "./ShowHideIcon";
import ShowHideIngre from "./ShowHideIngre";
const RandomMenu = () => {
  const [ingredient, setIngredients] = useState([]);
  const [random, setRandom] = useState({});
  let [show, setShow] = useState(false);
  const handler = () => {
    setShow((show = !show));
  };
  let [showIngre, setShowIngre] = useState(true);
  const handler2 = () => {
    setShowIngre((showIngre = !showIngre));
  };
  const ingredients = [
    {
      id: 1,
      ing: `${random?.strIngredient1}`,
    },
    {
      id: 2,
      ing: `${random?.strIngredient2}`,
    },
    {
      id: 3,
      ing: `${random?.strIngredient3}`,
    },
    {
      id: 4,
      ing: `${random?.strIngredient4}`,
    },
    {
      id: 5,
      ing: `${random?.strIngredient5}`,
    },
  ];
  const fetchApi = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const { meals } = await api.json();
    console.log(meals[0]);
    setRandom(meals[0]);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    setIngredients(ingredients);
    console.log(ingredient);
  }, [random]);

  return (
    <div className=" py-20 mb-[230px]">
      <h1 className=" font-bold text-slate-100 text-3xl uppercase text-center mb-16">
        Sample Menu
      </h1>
      <div className=" container mx-auto flex justify-center items-center gap-10">
        <div>
          <img
            src={random?.strMealThumb}
            alt=""
            className=" w-[400px] rounded-md"
          />
        </div>
        <div className=" w-[80%] h-[400px] text-white flex flex-col justify-center items-start">
          <h1 className=" text-2xl font-semibold mb-3">{random?.strMeal}</h1>
          <h4 className=" bg-info px-2 rounded text-secondary text-sm font-bold mb-4">
            {random?.strCategory}
          </h4>
          <div className="text-lg font-bold items-center gap-2 flex mb-2 transition-all">
            <h1 className="uppercase text-green-500">Instruction</h1>
            <ShowHideIcon show={show} handler={handler} />
          </div>
          <p
            className={`leading-7 text-slate-200 mb-3 ${
              show ? "flex" : "hidden"
            }`}
          >
            {random?.strInstructions?.substring(0, 800)}...
          </p>
          <h1 className=" text-lg font-bold mb-2 text-yellow-500 uppercase flex items-center gap-2">
            Ingredients
            <ShowHideIngre showIngre={showIngre} handler2={handler2} />
          </h1>
          <ul className={`flex gap-4 ${!showIngre && "hidden"}`}>
            {ingredient?.map((i) => {
              return (
                <li key={i.id} className=" flex items-center gap-1">
                  <TiTick />
                  {i?.ing}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RandomMenu;
