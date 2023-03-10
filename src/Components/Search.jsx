import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/searchMenu/" + search);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-80 md:w-96 pl-5 py-2 rounded-lg outline-none group-hover/item:ring-1 group-hover/item:ring-primary"
          placeholder="What do you want to cook?"
        />
        <button type="submit">
          <BiSearchAlt className="text-2xl text-white bg-secondary h-10 w-10 p-2 cursor-pointer rounded-r-md absolute bottom-0 right-0" />
        </button>
      </form>
    </>
  );
};

export default Search;
