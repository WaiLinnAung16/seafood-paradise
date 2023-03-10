import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Detail from "./Pages/Detail";
import SearchMenu from "./Components/SearchMenu";

const App = () => {
  return (
    <div className=" font-primary bg-gradient-to-b from-primary via-primary to-secondary relative min-w-full">
      <Navbar />
      <div className=" py-9"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/searchMenu/:name" element={<SearchMenu />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
