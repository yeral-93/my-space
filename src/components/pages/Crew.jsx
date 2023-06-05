
import React, { useEffect, useState } from "react";
import "../../stylePages/styleCrew.scss";
import { get } from "../../services/ApiSpace";
import "../../stylePages/styleCrew.scss";

export const Crew = () => {
  const [persons, handlePerson] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Nuevo estado para el índice actual

  const getLinks = async () => {
    const getlink = await get("crew");
    handlePerson(getlink);
  };

  useEffect(() => {
    getLinks();
  }, []);

  const handleButtonClick = (index) => {
    setCurrentIndex(index); // Establecer el índice actual al hacer clic en el botón correspondiente
  };

  const person = persons[currentIndex]; // Obtener el objeto actual basado en el índice

  return (
    <div className="containerCrew">
      <div className="containerCrew__Map">
        <div className="containerCrew__information">
          <div className="containerCrew__subtitle">
            <h3>02</h3>
            <h4>{person?.tittle}</h4>
          </div>
          <div className="containerCrew__paragraph">
            <h2>{person?.occupation}</h2>
            <h1>{person?.name}</h1>
            <p>{person?.info_crew}</p>
          </div>
          <div className="containerCrew__button">
            {persons.map((person, index) => (
              <button key={person.id}  className={currentIndex === index ? "activeCrew" : ""} onClick={() => handleButtonClick(index)}>
              </button>
            ))}
          </div>
        </div>
        <div className="containerCrew__image">
          <figure>
            <img src={person?.img} alt={person?.name} />
          </figure>
        </div>
      </div>
      </div>
    )}

export default Crew;
