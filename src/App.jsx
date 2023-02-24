import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Meals from "./Meals";

const App = () => {
  return (
    <div className=" font-primary">
      <Navbar />
      <div className=" py-9"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Meals />
    </div>
  );
};

export default App;
