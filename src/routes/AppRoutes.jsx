import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Destination from "../components/pages/destination/Destination";
import { Crew } from "../components/pages/Crew"
import Technology from "../components/pages/Technology";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"}  element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="destination"  element={<Destination/>} />
            <Route path="crew"  element={<Crew/>} />
            <Route path="technology"  element={<Technology/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
