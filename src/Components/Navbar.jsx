import React, { useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { BsListNested, BsPersonCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import MoblieMenu from "./MoblieMenu";

const Navbar = () => {
  const active =
    "font-bold border-b-2 border-info py-1 px-3 transition-all duration-150";
  const activeClass = ({ isActive }) => (isActive ? `${active}` : "py-1 px-3");
  let [menuBar, setMenubar] = useState(false);
  const show = () => {
    setMenubar((menuBar = !menuBar));
  };
  return (
    <div className=" bg-primary px-5 py-5 text-white z-10 shadow-lg  w-full fixed bg-opacity-70 backdrop-blur-xl">
      <div className=" container flex justify-between items-center mx-auto">
        <Link to={"/"}>
          <h1 className=" font-bold text-xl">
            Seafood
            <span className=" text-info">Paradise</span>
          </h1>
        </Link>
        <ul className=" md:flex items-center md:gap-4 lg:gap-8 text-base hidden">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
          <NavLink to="/menu" className={activeClass}>
            Menu
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
        </ul>
        <BsListNested
          className={`md:hidden text-3xl text-white ${
            menuBar ? "hidden" : "block"
          }`}
          onClick={() => show()}
        />
        <RxCross2
          className={`block md:hidden text-3xl text-white ${
            !menuBar && "hidden"
          }`}
          onClick={() => show()}
        />
        <div className=" hidden md:flex items-center gap-5 text-2xl">
          <BiBookmark />
          <BsPersonCircle />
        </div>
      </div>
      <MoblieMenu activeClass={activeClass} menuBar={menuBar}></MoblieMenu>
    </div>
  );
};

export default Navbar;
