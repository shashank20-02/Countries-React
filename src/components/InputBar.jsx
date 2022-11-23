import React, { useState } from "react";
import { IoSearch, IoChevronDown } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchCountriesByFilter,
  FetchCountriesBySearch,
} from "../store/DataSlice";
const InputBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const region = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [search, setSearch] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchCountriesBySearch(search));
  };

  const HandleFilter = (filter) => {
    dispatch(FetchCountriesByFilter(filter));
  };
  return (
    <div className="w-full lg:flex items-center justify-between mb-8">
      <div
        className={`lg:w-1/3 w-full h-12 lg:mb-0 mb-8 relative flex items-center shadow-md rounded-sm ${
          theme === "Light"
            ? "bg-LightCard text-LightInput"
            : "bg-DarkCard text-LightInput"
        } `}
      >
        <form
          className="flex items-center"
          onSubmit={(e) => {
            HandleSubmit(e);
          }}
        >
          <IoSearch className="ml-8 font-Nunito text-[22px]" />
          <input
            type="text"
            className={`w-full h-full border-none px-8 font-Nunito font-[600] ${
              theme === "Light" ? "bg-LightCard" : "bg-DarkCard"
            } focus:outline-none`}
            placeholder="Search for a Country"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </form>
      </div>
      <div
        className={`lg:w-1/6 w-2/3 h-12 shadow-md rounded-sm ${
          theme === "Light"
            ? "bg-LightCard text-LightText"
            : "bg-DarkCard text-DarkText"
        }`}
      >
        <button
          className="w-full h-full px-6 font-Nunito text-[14px] font-[600] flex items-center justify-between"
          onClick={() => {
            setActive(!active);
          }}
        >
          Filter By Region <IoChevronDown />
        </button>
        <div
          className={`w-full z-10 bg-inherit mt-2 rounded-md shadow-lg ${
            active === true ? "block" : "hidden"
          }`}
        >
          <div className="w-full bg-inherit z-10 flex items-center flex-col">
            {region.map((item, i) => (
              <button
                onClick={() => {
                  HandleFilter(item);
                }}
                className="w-full z-10 bg-inherit px-6 py-1 flex items-start"
                key={i}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
