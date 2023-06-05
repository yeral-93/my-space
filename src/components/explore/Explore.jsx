import React from "react";

import './StyleExplore.scss'
import exploreHover from "../../assets/icons/explore_hover.png";

const Explore = () => {
  return (
    <>
      <div className="container">        
          <img src={exploreHover} className="hoverExplore" alt="sombra" />
          <h5>EXPLORE</h5>
      </div>
    </>
   
  );
};

export default Explore;
