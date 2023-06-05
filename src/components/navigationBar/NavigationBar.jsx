import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../services/ApiSpace";
import Star from "../../assets/layout/start.png";
import Line from "../../assets/layout/RectanglePño.png";
import "./styleNavigationBar.scss";
import Hamburger from "../../assets/icons/icon-hamburguer.png";
import Close from "../../assets/icons/icon-close.svg";

export const NavigationBar = () => {
  const [users, handleUsers] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const getLinks = async () => {
    const getlink = await get("principal_navBar");
    handleUsers(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(users);
  }, []);

  return (
    <nav className="navbar">
      <figure>
        <img className="navbar__Start" src={Star} alt="estrella" />
        <img className="navbar__Line" src={Line} alt="Linea" />
      </figure>
      <figure>
        <img 
          style={{ visibility: isMenuOpen ? "hidden" : 'visible' }}
          className="navbar__hamburguer"
          src={Hamburger}
          alt="menu hamburgesa"
          onClick={toggleMenu}
        />
        <img
         style={{ visibility: isMenuOpen ? "visible" : 'hidden' }}
          className="navbar__close"
          src={Close}
          alt="close"
          onClick={toggleMenu}
        />
      </figure>
      <ul style={{ visibility: isMenuOpen ? "visible" : 'hidden' }}>
        {users.map((link) => (
          <li key={link.id}>
            <NavLink
              to={`/${link.link}`}
              className={({ isActive, isPending }) =>
                isPending ? "navlink" : isActive ? "navlink active" : "navlink"
              }
              onClick={toggleMenu}
            >
              <strong>{link.id}</strong> {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
