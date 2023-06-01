import React from "react";
import './styleExplore.scss'
import exploreHover from "../../assets/icons/explore_hover.png";
const Explore = () => {
  return (
    <>
    <img src={exploreHover} className= "hoverExplore"alt="sombra" />
    <div className="Container">
        <h5>EXPLORE</h5>
    </div>
    </>
   
  );
};

export default Explore;
