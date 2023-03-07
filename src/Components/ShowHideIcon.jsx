import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ShowHideIcon = ({ show, handler }) => {
  return (
    <div>
      <AiFillEye
        className={`p-1 bg-primary text-3xl rounded-full ring-1 ring-white transition hover:bg-white hover:text-primary ${
          show ? "flex" : "hidden"
        }`}
        onClick={() => handler()}
      />
      <AiFillEyeInvisible
        className={`p-1 bg-primary text-3xl rounded-full ring-1 ring-white transition hover:bg-white hover:text-primary ${
          show && "hidden"
        }`}
        onClick={() => handler()}
      />
    </div>
  );
};

export default ShowHideIcon;
