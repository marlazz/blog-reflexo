import { Link } from "react-router-dom";
import LOGOWHITEBG from "../assets/a.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__home" to="/">
        <img className="logo" src={LOGOWHITEBG} alt="logo colibri" />
        <p>Leila El Ghanane, Réflexothérapeute</p>
      </Link>
      <nav className="navbar__menu">
        <Link className="navbar__menu--item" to="/reflexologie">
          {" "}
          Reflexologie{" "}
        </Link>
        <Link className="navbar__menu--item" to="/coaching">
          {" "}
          Coaching{" "}
        </Link>
        <Link className="navbar__menu--item" to="/formation">
          {" "}
          Formation{" "}
        </Link>
        <Link className="navbar__menu--item" to="/blog">
          {" "}
          Blog{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
