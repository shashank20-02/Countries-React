import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../pages/Loading";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  fetchCountry,
  setCountry,
  setStatus,
  STATUS,
} from "../store/CountrySlice";
const CountryPage = () => {
  const ints = Intl.NumberFormat("en-US");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.country);
  const { theme } = useSelector((state) => state.theme);
  const { name } = useParams();
  useEffect(() => {
    dispatch(fetchCountry(name));
    return () => {
      dispatch(setCountry({}));
      dispatch(setStatus(STATUS.IDLE));
    };
  }, [dispatch, name]);

  return (
    <div
      className={`w-full h-full ${
        theme === "Light"
          ? " bg-LightBack text-LightText"
          : " bg-DarkBack text-DarkText"
      }`}
    >
      {status === STATUS.LOADING || status === STATUS.IDLE ? (
        <Loading />
      ) : (
        <div className="w-full h-full">
          {data && (
            <div className="w-full h-full lg:px-32 px-4 py-8 ">
              <div className="w-full h-12 mb-16">
                <button
                  className={`w-32 h-full shadow-lg rounded-md flex items-center justify-center ${
                    theme === "Light" ? " bg-LightCard" : "bg-DarkCard"
                  } `}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <IoArrowBackSharp className="mr-4" />{" "}
                  <span className=" font-Nunito font-[300]">Back</span>
                </button>
              </div>
              <div className="w-full lg:h-[40vh] h-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-y-2">
                <div className="w-full h-full">
                  <img
                    src={data.flags.png}
                    className="w-full h-full object-cover self-center"
                    alt="/"
                  />
                </div>
                <div className="w-full h-full font-Nunito font-[700] lg:px-8 px-0 py-4 text-ellipsis whitespace-pre">
                  <div className="w-full">
                    <h1 className="font-[800] text-[25px] py-4">
                      {data.name.official}
                    </h1>
                  </div>
                  <div className="lg:w-full lg:flex items-center lg:justify-between mb-2 lg:text-[16px] text-[18px]">
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Native Name:{" "}
                      <span className="font-[300]">{data.name.common}</span>
                    </p>
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Top Level Domain:{" "}
                      <span className="font-[300]">{data.tld[0]}</span>
                    </p>
                  </div>
                  <div className="lg:w-full lg:flex items-center lg:justify-between mb-2 lg:text-[16px] text-[18px]">
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Population:{" "}
                      <span className="font-[300]">
                        {ints.format(data.population)}
                      </span>
                    </p>
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Currencies:{" "}
                      {Object.keys(data.currencies).map((item, i) => (
                        <span className="font-[300]" key={i}>
                          {data.currencies[item].name}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="lg:w-full lg:flex items-center lg:justify-between mb-2 lg:text-[16px] text-[18px]">
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Region: <span className="font-[300]">{data.region}</span>
                    </p>
                    <p className="lg:w-1/2 w-full lg:mb-0 mb-2">
                      Languages:{" "}
                      {Object.keys(data.languages).map((item, i) => (
                        <span key={i} className="font-[300] ml-1">
                          {i !== Object.keys(data.languages).length - 1
                            ? data.languages[item] + ","
                            : data.languages[item]}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="lg:w-full lg:flex items-center mb-2 lg:text-[16px] text-[18px]">
                    <p className="w-full lg:mb-0 mb-2">
                      Sub Region:{" "}
                      <span className="font-[300]">{data.subregion}</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center mb-2 text-[16px]">
                    <p className="w-full lg:mb-0 mb-2">
                      Capital:{" "}
                      {data.capital.map((item, i) => (
                        <span className="font-[300]" key={i}>
                          {item}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryPage;
