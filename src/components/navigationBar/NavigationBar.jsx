import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../services/ApiSpace";
import Star from "../../assets/start.png";
import Line from "../../assets/RectanglePño.png";
import "./styleNavigationBar.scss";
export const NavigationBar = () => {
  const [users, handleUsers] = useState([]);
  const getLinks = async () => {
    const getlink = await get("principal_navBar");
    handleUsers(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(users)
  }, []);

  return (
    <nav className="navbar">
      <figure>
        <img className="navbar__Start" src={Star} alt="estrella" />
        <img className="navbar__Line" src={Line} alt="Linea" />
      </figure>
      <ul>
        {users.map((link) => (
          <li key={link.id}>
            <NavLink to= {`/${link.link}`} className={ ({isActive, isPending}) => isPending? "navlink": isActive? "navlink active": "navlink"
             }
            >
              {link.id} {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
