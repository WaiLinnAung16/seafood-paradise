import React from "react";
import underline from "../assets/underline.svg";
import Blog from "./Blog";
const BlogContainer = () => {
  return (
    <div className="mb-[340px]">
      <div className=" container mx-auto pb-20 text-center">
        <h1 className=" font-bold text-slate-100 text-3xl uppercase mb-16">
          Blogs
        </h1>
        <Blog />
      </div>
    </div>
  );
};

export default BlogContainer;
