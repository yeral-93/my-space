import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../services/ApiSpace";
import Star from "../../assets/layout/start.png";
import Line from "../../assets/layout/RectanglePño.png";
import "./styleNavigationBar.scss";
export const NavigationBar = () => {
  const [users, handleUsers] = useState([]);
  const getLinks = async () => {
    const getlink = await get("principal_navBar");
    handleUsers(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(users);
  }, [users]);

  return (
    <nav className="navbar">
      <figure>
        <img className="navbar__Start" src={Star} alt="estrella" />
        <img className="navbar__Line" src={Line} alt="Linea" />
      </figure>
      <ul>
        {users.map((link) => (
          <li key={link.id}>
            <NavLink
              to={`/${link.link}`}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
            >
              <strong>{link.id}</strong> {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
