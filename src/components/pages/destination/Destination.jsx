import React, { useEffect, useState } from "react";
import "./styleDestination.scss";
import { get } from "../../../services/ApiSpace";
import DestinationNavBar from "./DestinationNavBar";


const Destination = () => {

  const [link, handleLink] = useState([]);
  const getLinksDestination = async () => {
    const getlink = await get("destination");
    handleLink(getlink);
  };

  useEffect(() => {
    getLinksDestination();
    console.log(link);
  }, []);
  return (
    <div className="DivDestination">
      {link.map((link) => (
       <div className="DivDestination__body">
        <section className="DivDestination__titleAndImg">
          <div className="DivDestination__title">
            <h3>01</h3>
            <h3>{link.tittle}</h3>
          </div>
          <div>
            <figure>
              <img src={link.img} alt="" />
            </figure>
          </div>
        </section>
        <section className="DivDestination__information">
        <DestinationNavBar/>
          <div className="DivDestination__paragraph">
            <h2>{link.name}</h2>
            <p>{link.info}</p>
            <hr />
            <div className="DivDestination__paragraph1">
            <div>
              <h5>{link.distance}</h5>
              <h4>{link.distance_info}</h4>
            </div>
            <div>
              <h5>{link.time}</h5>
              <h4>{link.time_info}</h4>
            </div>
          </div>
          </div>
        </section>
        
       </div> 
      ))}
    </div>
  );
};

export default Destination;
