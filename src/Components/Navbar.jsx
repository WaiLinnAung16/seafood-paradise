import React from "react";
import { BiBookmark } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass =
    "font-bold border-b-2 border-secondary py-1 px-3 transition-all duration-150";
  return (
    <div className=" bg-primary py-5 text-white fixed w-full z-10 shadow-lg">
      <div className=" container flex justify-between items-center mx-auto">
        <h1 className=" font-bold text-xl">
          Seafood
          <span className=" text-secondary">Paradise</span>
        </h1>
        <ul className=" flex items-center gap-8 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : "py-1 px-3"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : "py-1 px-3"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : "py-1 px-3"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${activeClass}` : "py-1 px-3"
            }
          >
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
