import { useEffect, useState } from "react";
import { get } from "../../services/ApiSpace";
import "../../stylePages/styleTechnology.scss";
import { NavLink } from "react-router-dom";
const Technology = () => {
  const [tech, handletech] = useState([]);
  const getLinks = async () => {
    const getlink = await get("technology");
    handletech(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(tech);
  }, []);

  return (
    <article className="article">
      {tech.map((image) => (
        <div key={image.id}>
          <div className="article__tittle">
            <h2>03</h2>
            <h2>{image.tittle}</h2>
          </div>
          <div className="article__container">
          <li key={image.id}>
            <NavLink to= {`/${image.id}`} className={ ({isActive, isPending}) => isPending? "navlink": isActive? "navlink active": "navlink"
             }
            >
             <strong>{image.id}</strong> {image.name}
            </NavLink>
          </li>
            <div className="article__information">
              <h3>{image.sub_tittle}</h3>
              <h1>{image.info_techology_t}</h1>
              <p>{image.info_techology_p}</p>
            </div>
            <img src={image.img} alt={image.title} />
          </div>
        </div>
      ))}
      
    </article>
  );
};

export default Technology;
