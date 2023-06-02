import React, { useEffect, useState } from "react";
import "../../stylePages/styleTechnology.scss";
import { get } from "../../services/ApiSpace";

const Destination = () => {
  const [tech, setTech] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const getLinks = async () => {
    const getlink = await get("technology");
    setTech(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(tech);
  }, []);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <article className="article">
      {tech.map((image) => (
        <div className="article__link" key={image.id}>
          <div className="article__navigation">
            <span key={image.id} onClick={() => handleClick(image.id)}>
              {image.id}
            </span>
          </div>
          {selectedId === image.id ? (
            <div className="article__information">
              <div className="article__indice">
                <h2>03</h2>
                <h3>{image.tittle}</h3>
              </div>
              <div className="article__cuerpo">
                <div className="article__container">
                  <div className="article__data">
                    <h6>{image.sub_tittle}</h6>
                    <h1>{image.info_techology_t}</h1>
                    <p>{image.info_techology_p}</p>
                  </div>
                </div>
                <div className="article__user">
                  <img src={image.img} alt={image.title} />
                </div>
              </div>
            </div>
          ) : null}
          {/* <div className="article__tittle">
            <h2>03</h2>
            <h2>{image.tittle}</h2>
          </div>
            <img src={image.img} alt={image.title} /> */}
        </div>
      ))}
    </article>
  );
};

export default Destination;
