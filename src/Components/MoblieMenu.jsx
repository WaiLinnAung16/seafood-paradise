import React from "react";
import { NavLink } from "react-router-dom";

const MoblieMenu = ({ activeClass, menuBar }) => {
  return (
    <div
      className={` h-[300px] flex md:hidden justify-center items-center ${
        !menuBar && "hidden"
      }`}
    >
      <ul className={`flex flex-col items-center gap-8 text-base `}>
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
    </div>
  );
};

export default MoblieMenu;
