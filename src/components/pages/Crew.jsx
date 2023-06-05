// import { useEffect, useState } from "react";
// import { get } from "../../services/ApiSpace";
// import "../../stylePages/styleTechnology.scss";
// import { NavLink } from "react-router-dom";
// const Crew = () => {
//   const [tech, handletech] = useState([]);
//   const getLinks = async () => {
//     const getlink = await get("crew");
//     handletech(getlink);
//   };

//   useEffect(() => {
//     getLinks();
//     console.log(tech);
//   }, []);

//   return (
//     <article className="article">
//       {tech.map((image) => (
//         <div key={image.id}>
//           <div className="article__tittle">
//             <h2>03</h2>
//             <h2>{image.tittle}</h2>
//           </div>
//           <div className="article__container">
//           <li key={image.id}>
//             <NavLink to= {`/${image.id}`} className={ ({isActive, isPending}) => isPending? "navlink": isActive? "navlink active": "navlink"
//              }
//             >
//              <strong>{image.id}</strong> {image.name}
//             </NavLink>
//           </li>
//             <div className="article__information">
//               <h3>{image.sub_tittle}</h3>
//               <h1>{image.info_techology_t}</h1>
//               <p>{image.info_techology_p}</p>
//             </div>
//             <img src={image.img} alt={image.title} />
//           </div>
//         </div>
//       ))}
      
//     </article>
//   );
// };

// export default Crew;
import React, { useState,useEffect } from 'react';
import '../../stylePages/styleCrew.scss';
// import { crew as crewData } from "../../../../miniback-space/db.json";


const Crew = () => {
  const crewData = [
    {
      id: "00",
      title: "Meet your crew",
      img: "https://i.ibb.co/P4Tz9Bh/douglas.png",
      occupation: "Commander",
      name: "Douglas Hurley",
      info_crew: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      id: "01",
      title: "Meet your crew",
      img: "https://i.ibb.co/F523hWW/mark.png",
      occupation: "Mission Specialist",
      name: "MARK SHUTTLEWORTH",
      info_crew: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      id: "02",
      title: "Meet your crew",
      img: "https://i.ibb.co/vcsnKPZ/victor.png",
      occupation: "PILOT",
      name: "Victor Glover",
      info_crew: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      id: "03",
      title: "Meet your crew",
      img: "https://i.ibb.co/sQFYbMn/anoushheh.png",
      occupation: "Flight Engineer",
      name: "Anousheh Ansari",
      info_crew: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ];
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const seleccionarElemento = (elemento) => {
    setElementoSeleccionado(elemento);
  };

  const resetearSeleccion = () => {
    setElementoSeleccionado(null);
  };

  const ComponenteSeleccionado = ({ elemento }) => {
    return (
      <div>
        <h2>02</h2>
        <h2>Meet your crew</h2>
        <img src={elemento.img} alt={elemento.name} />
        <h3>{elemento.occupation}</h3>
        <h4>{elemento.name}</h4>
        <p>{elemento.info_crew}</p>
      </div>
    );
  };

  return (
    <div>
              <h2>Elemento Fijo</h2>
        <img src="ruta-de-la-imagen" alt="Título del elemento fijo" />
        <h3>Ocupación del elemento fijo</h3>
        <h4>Nombre del elemento fijo</h4>
        <p>Información del elemento fijo</p>
      
      {crewData.map((crewMember) => (
        <button key={crewMember.id} onClick={() => seleccionarElemento(crewMember)}>
          {crewMember.name}
        </button>
      ))}

      {elementoSeleccionado ? (
        <div>
          <button onClick={resetearSeleccion}>Reset</button>
          <ComponenteSeleccionado elemento={elementoSeleccionado} />
        </div>
      ) : null}
    </div>
  );
};

export default Crew;