import React from "react";
import MiniCard from "./MiniCard";

const MiniCards = () => {
  return (
    <div className=" pb-20">
      <div className=" flex justify-center items-center gap-10 container mx-auto">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
};

export default MiniCards;
