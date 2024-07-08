import React, { useEffect, useState } from "react";
import youtube from "../Images/youtube.png";
import hamburger from "../Images/hamburger.png";
import userImage from "../Images/userImage.png";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { addSearchCache } from "../Utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();


  const cacheData = useSelector((state) => state.search.cache);

  const performSearch = () => {
    navigate(`/results?search_query=${searchQuery}`)
    clearSearch()
  }

  const handleToggle = () => {
    dispatch(toogleMenu());
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        if (cacheData[searchQuery]) {
          setSuggestions(cacheData[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery,cacheData]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const responseText = await response.text();
      const dataArray = responseText
        .replace("[", "")
        .replace("]", "")
        .split('","')
        .map((item) => item.replace(/"/g, "").trim()).slice(1,9);
      const newSuggestions = dataArray;
      setSuggestions(newSuggestions);
      dispatch(
        addSearchCache({
          [searchQuery]: newSuggestions,
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center py-1 lg:p-4 lg:py-3 bg-white shadow-md">
        <div className="flex items-center">
          <img
            onClick={handleToggle}
            className="h-5 px-3 lg:h-7 lg:px-2 cursor-pointer"
            alt="Hamburger"
            src={hamburger}
          />
          <Link to="/">
          <img
            className="h-5 lg:h-7 lg:px-2 cursor-pointer"
            alt="YouTube"
            src={youtube}
          /></Link>
        </div>
        <div className="flex items-center justify-center flex-grow relative">
          <div className="flex items-center lg:w-4/12 lg:mx-0 ml-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="text-xs lg:text-base border border-r-0 border-gray-300 rounded-l-full w-6/12 py-1 px-2 lg:py-2 lg:px-4 lg:w-full focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="lg:text-xl  py-1 px-2 lg:py-[6px] lg:px-4 bg-transparent border border-r-0 border-l-0 border-gray-300 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
            <button 
            onClick={performSearch}
            className="text-xs lg:text-base bg-gray-100 border border-gray-300 rounded-r-full py-1 px-2 lg:py-2 lg:px-4 hover:bg-gray-200">
              Search
            </button>
          </div>
          {suggestions.length > 0 && (
            <div className="absolute top-12 bg-white shadow-lg border border-gray-300 lg:w-4/12 rounded-lg z-10">
              <ul className="list-none p-2">
                {suggestions.map((suggestion, index) => (
                  <Link to={"results/?search_query="+suggestion} onClick={clearSearch}><li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li></Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <img className="h-8 px-2 cursor-pointer" alt="User" src={userImage} />
        </div>
      </div>
    </>
  );
};

export default Head;
