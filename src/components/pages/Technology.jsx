import React, { useEffect, useState } from "react";
import { get } from "../../services/ApiSpace";
import "../../stylePages/styleTechnology.scss";

const Technology = () => {
  const [tech, setTech] = useState([]);
  const [selectedButton, setSelectedButton] = useState(""); // Inicialmente sin valor

  const getLinks = async () => {
    const getlink = await get("technology");
    setTech(getlink);
    setSelectedButton(getlink[0]?.id); // Establecer el primer botón como seleccionado
  };

  useEffect(() => {
    getLinks();
  }, []);

  const handleButtonSelect = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const selectedTech = tech.find((link) => link.id === selectedButton);

  return (
    <div className="containerTechnology">
      <div className="containerTechnology__subtitle">
        <h3>03</h3>
        <h4>SPACE LAUNCH 101</h4>
      </div>
      <div className="containerTechnology__map">
        <div className="containerTechnology__button">
          {tech.map((link) => (
            <button
              key={link.id}
              onClick={() => handleButtonSelect(link.id)}
              className={selectedButton === link.id ? "activetechno" : ""}
            >
              {link.id}
            </button>
          ))}
        </div>
        {selectedTech && (
          <div className="containerTechnology__paragraph">
            <h6>{selectedTech.sub_tittle}</h6>
            <h1>{selectedTech.info_techology_t}</h1>
            <p>{selectedTech.info_techology_p}</p>
          </div>
        )}
        {selectedTech && (
          <div className="containerTechnology__img">
            <figure className="containerTechnology__noresponsive">
              <img src={selectedTech.img} alt={selectedTech.info_techology_t} />
            </figure>
            <div className="containerTechnology__responsive">
              <figure>
                <img
                  src={selectedTech.responsive}
                  alt={selectedTech.info_techology_t}
                />
              </figure>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technology;


