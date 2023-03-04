import React from "react";
import DemoMeal from "../Components/DemoMeal";
import Hero from "../Components/Hero";
import MiniCards from "../Components/MiniCards";
import BlogContainer from "../Components/BlogContainer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <MiniCards />
      <DemoMeal />
      <BlogContainer />
    </div>
  );
};

export default Home;
