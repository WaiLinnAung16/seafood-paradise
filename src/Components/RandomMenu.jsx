import React, { useEffect, useState } from "react";
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

  const fetchApi = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const { meals } = await api.json();
    setRandom(meals[0]);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
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
    setIngredients(ingredients);
  }, [random]);

  return (
    <div className=" py-20 mb-[230px]">
      <h1 className=" font-bold text-slate-100 text-3xl uppercase text-center mb-16">
        Sample Menu
      </h1>
      <div className=" container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
        <div>
          <img
            src={random?.strMealThumb}
            alt=""
            className=" w-[80%] mx-auto lg:mx-0 lg:w-[400px] rounded-md"
          />
        </div>
        <div className=" w-[95%] lg:w-[80%] h-[400px] text-white flex flex-col justify-center items-start">
          <h1 className=" text-2xl font-semibold mb-3">{random?.strMeal}</h1>
          <h4 className=" bg-info px-2 rounded text-secondary text-sm font-bold mb-4">
            {random?.strCategory}
          </h4>
          <div className="text-lg font-bold items-center gap-2 flex mb-5 md:mb-2 transition-all">
            <h1 className="uppercase text-green-500">Instruction</h1>
            <ShowHideIcon show={show} handler={handler} />
          </div>
          <p
            className={`leading-7 text-slate-200 mb-3 overflow-y-scroll ${
              show ? "flex" : "hidden"
            }`}
          >
            {random?.strInstructions}
          </p>
          <h1 className=" text-lg font-bold mb-5 mt-2 md:mt-0 md:mb-2 text-yellow-500 uppercase flex items-center gap-2">
            Ingredients
            <ShowHideIngre showIngre={showIngre} handler2={handler2} />
          </h1>
          <ul
            className={`flex flex-wrap lg:flex-row gap-4 ${
              !showIngre && "hidden"
            }`}
          >
            {ingredient?.map((i) => {
              return (
                <li key={i.id} className=" flex flex-row items-center gap-1">
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
