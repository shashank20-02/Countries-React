import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CountryCard = ({ image, name, population, region, capital }) => {
  const { theme } = useSelector((state) => state.theme);
  const ints = Intl.NumberFormat("en-US");
  return (
    <div
      className={`w-full h-[22rem] rounded-md shadow-md ${
        theme === "Light"
          ? "bg-LightCard text-LightText"
          : "bg-DarkCard text-DarkText"
      }`}
    >
      <Link to={`/country/${name}`} className="w-full h-full">
        <div className="w-full h-1/2 rounded-t-md overflow-hidden">
          <img src={image} alt="/" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-2/3">
          <div className="w-full h-full px-8 py-4">
            <h1 className=" font-Nunito font-[800] text-[20px] py-2 truncate">
              {name}
            </h1>
            <p className=" font-Nunito font-[300] text-[14px]">
              <span className="font-[600] py-4">Population : </span>
              {ints.format(population)} <br />
              <span className="font-[600] py-4">Region : </span> {region} <br />
              <span className="font-[600] py-4">Capital : </span> {capital}
              <br />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
