import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ShowHideIngre = ({ showIngre, handler2 }) => {
  return (
    <div className=" text-white">
      <AiFillEye
        className={`p-1 bg-primary text-3xl rounded-full ring-1 ring-white transition hover:bg-white hover:text-primary ${
          showIngre ? "flex" : "hidden"
        }`}
        onClick={() => handler2()}
      />
      <AiFillEyeInvisible
        className={`p-1 bg-primary text-3xl rounded-full ring-1 ring-white transition hover:bg-white hover:text-primary ${
          showIngre && "hidden"
        }`}
        onClick={() => handler2()}
      />
    </div>
  );
};

export default ShowHideIngre;
