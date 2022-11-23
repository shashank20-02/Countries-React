import React, { useEffect } from "react";
import InputBar from "../components/InputBar";
import { useSelector } from "react-redux";
import CountryCard from "../components/CountryCard";
import { useDispatch } from "react-redux";
import {
  FetchCountries,
  setCountry,
  setStatus,
  STATUS,
} from "../store/DataSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(FetchCountries());
    return () => {
      dispatch(setCountry([]));
      dispatch(setStatus(STATUS.IDLE));
    };
  }, [dispatch]);
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`w-full h-screen box-border ${
        theme === "Light"
          ? "bg-LightBack text-LightText"
          : "bg-DarkBack text-DarkText"
      }`}
    >
      <div className="w-full h-full lg:px-20 py-8 px-4 overflow-y-scroll">
        <InputBar />
        {countries && (
          <div className="w-full mb-20">
            <div className="w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-x-20 lg:px-0 px-4 gap-y-16">
              {countries.map((item, index) => (
                <CountryCard
                  key={index}
                  name={item.name.official}
                  image={item.flags.png}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
