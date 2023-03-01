import React from "react";
import underline from "../assets/underline.svg";
import Blog from "./Blog";
const BlogContainer = () => {
  return (
    <div className=" container mx-auto pb-20">
      <h1 className=" font-bold text-secondary text-3xl uppercase relative w-[150px] mx-auto mb-16">
        Blogs
        <img
          src={underline}
          alt=""
          className=" h-3 absolute -bottom-2 left-0"
        />
      </h1>
      <Blog />
    </div>
  );
};

export default BlogContainer;
