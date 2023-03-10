import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
    );
    const { meals } = await api.json();
    console.log(meals);
    setDetail(meals);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" py-96">
      <img src={detail?.strMealThumb} alt="" />
    </div>
  );
};

export default Detail;
