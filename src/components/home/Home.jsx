import React from "react";
import TextSpace from "../textSpace/TextSpace";
import "./styleHome.scss";
import Explore from "../explore/Explore";
import Layout from "../layout/Layout";
const Home = () => {
  return (
    <div>
      <Layout/>
      <div className="home__Main">
      <TextSpace />
      <Explore/>
      </div>
    </div>
  );
};

export default Home;
