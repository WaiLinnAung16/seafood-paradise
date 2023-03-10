import React, { isValidElement } from "react";
import { BiBookmark } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const active =
    "font-bold border-b-2 border-info py-1 px-3 transition-all duration-150";
  const activeClass = ({ isActive }) => (isActive ? `${active}` : "py-1 px-3");
  return (
    <div className=" bg-primary py-5 text-white z-10 shadow-lg  w-full fixed">
      <div className=" container flex justify-between items-center mx-auto">
        <h1 className=" font-bold text-xl">
          Seafood
          <span className=" text-info">Paradise</span>
        </h1>
        <ul className=" flex items-center gap-8 text-base">
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
        <div className=" flex items-center gap-5 text-2xl">
          <BiBookmark />
          <BsPersonCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
