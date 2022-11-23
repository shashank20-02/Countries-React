import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import CountryPage from "../pages/CountryPage";
const Routing1 = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:name" element={<CountryPage />}></Route>
      </Routes>
    </div>
  );
};

export default Routing1;
