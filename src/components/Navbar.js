import { Link } from "react-router-dom";
import LOGO from "../assets/logo_small.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__home" to="/">
        <img className="logo" src={LOGO} alt="logo colibri" />
        <p>RÉFLEXOTHÉRAPIE, Carcassonne Et Occitanie</p>
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
          Formations{" "}
        </Link>
        <Link className="navbar__menu--item" to="/blog">
          {" "}
          Actualités{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
