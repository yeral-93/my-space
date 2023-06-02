import React, { useEffect, useState } from "react";
import "./styleDestination.scss";
import { get } from "../../../services/ApiSpace";


const Destination = () => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null); // Nuevo estado para almacenar el objeto seleccionado

  const getLinksDestination = async () => {
    const response = await get("destination");
    setLinks(response);
    setSelectedLink(response[0]); // Establecer el primer objeto como seleccionado inicialmente
  };

  useEffect(() => {
    getLinksDestination();
  }, []);

  const handleLinkSelect = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="DivDestination">
      <div className="DivDestination__title">
              <h3 className="DivDestination__01">01</h3>
              <h4 className="DivDestination__02">Pick your destination</h4>
            </div>
      <div className="divLinksDestination">
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              className={selectedLink === link ? "active" : ""}
              onClick={() => handleLinkSelect(link)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedLink && (
        <div className="DivDestination__body" key={selectedLink.id}>
          <section className="DivDestination__titleAndImg">
            <div>
              <figure>
                <img src={selectedLink.img} alt="" />
              </figure>
            </div>
          </section>
          <section className="DivDestination__information">
            <div className="DivDestination__paragraph">
              <h2>{selectedLink.name}</h2>
              <p>{selectedLink.info}</p>
              <hr />
              <div className="DivDestination__paragraph1">
                <div>
                  <h5>{selectedLink.distance}</h5>
                  <h4>{selectedLink.distance_info}</h4>
                </div>
                <div>
                  <h5>{selectedLink.time}</h5>
                  <h4>{selectedLink.time_info}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Destination;


