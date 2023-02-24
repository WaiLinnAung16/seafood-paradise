import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <div className=" ">
        <div>
          <img src={card.strMealThumb} alt="" className=" h-52" />
        </div>
        <div>
          <p>{card.strMeal}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
