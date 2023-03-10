import React from "react";
import MiniCard from "./MiniCard";

const MiniCards = () => {
  return (
    <div className=" pb-20">
      <div className=" flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:px-5 justify-center items-center gap-24 lg:gap-10 container mx-auto">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
};

export default MiniCards;
