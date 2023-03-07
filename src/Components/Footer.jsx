import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-primary py-12 fixed bottom-0 w-full -z-10">
      <section className=" container mx-auto flex flex-col items-center gap-7">
        <h1 className=" font-bold text-3xl text-white">
          Seafood
          <span className=" text-info">Paradise</span>
        </h1>
        <div className=" flex items-center gap-5 text-white text-3xl cursor-pointer">
          <FaFacebookSquare className="transition rounded hover:scale-125 hover:ring-2 hover:ring-blue-500" />
          <FaInstagramSquare className="transition rounded hover:scale-125 hover:ring-2 hover:ring-rose-600" />
          <FaTwitterSquare className="transition rounded hover:scale-125 hover:ring-2 hover:ring-sky-700" />
          <FaGithubSquare className="transition rounded hover:scale-125 hover:ring-2 hover:ring-zinc-500" />
        </div>
        <p className=" text-white text-sm">&copy; 2023 All rights reserved.</p>
      </section>
    </div>
  );
};

export default Footer;
