import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { settheme } from "../store/ThemeSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const HandleClick = () => {
    theme === "Light"
      ? dispatch(settheme("Dark"))
      : dispatch(settheme("Light"));
  };
  return (
    <div
      className={`w-full h-[70px] relative top-0 shadow-md ${
        theme === "Light"
          ? "bg-LightCard text-LightText"
          : "bg-DarkCard text-DarkText"
      }`}
    >
      <div className="w-full h-full lg:px-20 px-4 flex items-center justify-between">
        <h1 className=" font-Nunito font-[800] lg:text-[20px] text-[14px]">
          Where in the World?
        </h1>
        <button
          onClick={() => {
            HandleClick();
          }}
          className="flex items-center font-Nunito font-[600]"
        >
          {theme === "Light" ? (
            <IoMoonOutline className="mx-1 my-1" />
          ) : (
            <IoMoon className="m-1" />
          )}
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
