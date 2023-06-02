import React from "react";
import TextSpace from "../textSpace/TextSpace";
import "./styleHome.scss";
import Explore from "../explore/Explore";

const Home = () => {
  return (
    <div>
      <div className="home__Main">
      <TextSpace />
      <Explore/>
      </div>
    </div>
  );
};

export default Home;
