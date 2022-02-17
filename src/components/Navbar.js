import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useResultContext } from "../contexts/ResultContextProvider";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const {
    results,
    isLoading,
    getResults,
    searchTerm,
    setSearchTerm,
    setSearchClicked,
    searchClicked,
  } = useResultContext();

  const searchInputRef = useRef(null);

  const setSearchType = (e, searchTerm) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
    setSearchClicked(searchTerm);
  };
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to={"/"}>
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Goggl 🔍
          </p>
        </Link>
        <form onSubmit={(e) => setSearchType(e, searchInputRef.current.value)}>
          <input
            type="text"
            className="bg-transparent rounded-xl bg-gray-300 dark:bg-gray-800 placeholder:text-black  dark:placeholder:text-white  text-black dark:text-white px-5 py-2"
            placeholder="Search"
            ref={searchInputRef}
          />
          <button type="submit" style={{ display: "none" }}>
            Search
          </button>
        </form>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-500  dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
