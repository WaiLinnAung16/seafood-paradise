import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import ShowHideIcon from "../Components/ShowHideIcon";
import ShowHideIngre from "../Components/ShowHideIngre";
import {BsArrowLeftCircleFill, BsYoutube} from 'react-icons/bs'
const Detail = () => {
  const [ingredient, setIngredients] = useState([]);
  const { id } = useParams();
  const [detail,setDetail] = useState({});
  let [show, setShow] = useState(true);
  const handler = () => {
    setShow((show = !show));
  };
  let [showIngre, setShowIngre] = useState(true);
  const handler2 = () => {
    setShowIngre((showIngre = !showIngre));
  };
  useEffect(()=>{
    const ingredients = [
      {
        id: 1,
        ing: detail.strIngredient1,
      },
      {
        id: 2,
        ing: detail.strIngredient2,
      },
      {
        id: 3,
        ing: detail.strIngredient3,
      },
      {
        id: 4,
        ing: detail.strIngredient4,
      },
      {
        id: 5,
        ing: detail.strIngredient5,
      },
    ];
    setIngredients(ingredients)
  },[detail])

  const fetchData = async()=>{
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const {meals} = await api.json();
    setDetail(meals[0]);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className=" h-screen flex justify-center items-center pb-20 mb-[230px]">
     <div>
     <div className=" w-96 mx-auto">
     <Link to={'/menu'} className=' flex justify-center items-center gap-2 mb-6 text-info/60 cursor-pointer hover:text-info'>
      <BsArrowLeftCircleFill/>
      <h1 className="font-bold text-sm">Back to Menu</h1>
     </Link>
     </div>
     <h1 className="font-bold text-slate-100 text-3xl uppercase text-center mb-10">{detail?.strMeal}</h1>
      <div className=" container mx-auto flex justify-center items-center gap-10">
        <div>
          <img
            src={detail?.strMealThumb}
            alt=""
            className=" w-[400px] rounded-md"
          />
        </div>
        <div className=" w-[80%] h-[400px] text-white flex flex-col justify-center items-start">
          <div className="text-lg font-bold items-center gap-2 flex mb-2 transition-all">
            <h1 className="uppercase text-green-500">Instruction</h1>
            <ShowHideIcon show={show} handler={handler} />
          </div>
          <p
            className={`leading-7 text-slate-200 mb-3 ${
              show ? "flex" : "hidden"
            }`}
          >
            {detail?.strInstructions}
          </p>
          <h1 className=" text-lg font-bold mb-2 text-yellow-500 uppercase flex items-center gap-2">
            Ingredients
            <ShowHideIngre showIngre={showIngre} handler2={handler2} />
          </h1>
          <ul className={`flex gap-4 ${!showIngre && "hidden"}`}>
            {ingredient.map((i) => {
              return (
                <li key={i.id} className=" flex items-center gap-1">
                  <TiTick />
                  {i.ing}
                </li>
              );
            })}
          </ul>
          <div>
          <a href={detail?.strYoutube} className=" flex items-center gap-2 mt-4">
            <BsYoutube className=" text-red-600 text-2xl"/>
            <p className=" text-sm">Watch on YouTube</p>
          </a>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Detail;
