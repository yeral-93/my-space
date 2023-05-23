import React from "react";
import TextSpace from "../textSpace/TextSpace";
import "./styleHome.scss";
import Explore from "../explore/Explore";
import Layout from "../layout/Layout";
const Home = () => {
  return (
    <div>
      <Layout/>
      <TextSpace />
      <Explore/>
    </div>
  );
};

export default Home;
