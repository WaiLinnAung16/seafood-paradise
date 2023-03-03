import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-primary py-16 fixed bottom-0 w-full -z-10">
      <section className=" container mx-auto flex justify-between items-start">
        <h1 className=" font-bold text-xl text-white">
          Seafood
          <span className=" text-info">Paradise</span>
        </h1>
        <div className=" w-2/5">
          <div className=" flex flex-col gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className=" py-2 pl-4 rounded outline-none  shadow-md focus:shadow"
            />
            <textarea
              rows="5"
              placeholder="Leave a comment here..."
              className=" py-2 pl-4 rounded outline-none  shadow-md focus:shadow"
            ></textarea>
          </div>
          <button className=" px-8 py-2 bg-info text-white rounded mt-4">
            Send
          </button>
        </div>
        <div className=" flex items-center gap-5 text-white text-3xl cursor-pointer">
          <FaFacebookSquare className="transition hover:scale-125" />
          <FaInstagramSquare className="transition hover:scale-125" />
          <FaTwitterSquare className="transition hover:scale-125" />
          <FaGithubSquare className="transition hover:scale-125" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
