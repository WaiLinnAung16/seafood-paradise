import React from "react";
import DemoMeal from "./DemoMeal";
import Hero from "./Hero";
import MiniCards from "./MiniCards";
import BlogContainer from "./BlogContainer";

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
