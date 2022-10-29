import "./Hero.css";
import LOGO from "../assets/logo_transparent.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-logoAndText">
        <img src={LOGO} alt="mon logo est un colibri" className="hero-logo" />
        <div className="hero-textcontainer">
          <h1 className="hero-title">Leila El Ghanane</h1>
          <h2 className="hero-subtitle">Réflexo-thérapeute</h2>
          <div className="hero-innernav">
            <span>Réflexologie</span>
            <hr />
            <span>Coaching Bien-Être</span>
            <hr />
            <span>Formations</span>
          </div>
        </div>
      </div>
      <button className="big-cta">Prennez soin de vous!</button>
    </div>
  );
};

export default Hero;
