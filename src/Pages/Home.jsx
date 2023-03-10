import React from "react";
import DemoMeal from "../Components/DemoMeal";
import Hero from "../Components/Hero";
import MiniCards from "../Components/MiniCards";
import RandomMenu from "../Components/RandomMenu";

const Home = () => {
  return (
    <div>
      <Hero />
      <MiniCards />
      <DemoMeal />
      <RandomMenu />
    </div>
  );
};

export default Home;
