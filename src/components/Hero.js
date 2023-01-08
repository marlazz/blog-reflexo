import LOGO from "../assets/logo_transparent.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import CTAButton from "./ui-kit/CTAButton";
import TEST from "../assets/header-carousel/pexels-cottonbro-studio-3737594.jpg";
import "./Hero2.css";

const Hero = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo-and-title">
          <img src={LOGO} alt="colibri" className="header-logo" />
          <div className="header-text-container">
            <h1 className="header-title">
              Leila El Ghanane,
            </h1>
            <h2 className="header-subtitle">
              Réflexo-thérapeute
            </h2>
            {/* <h2 className="header-subtitle">Prennez soin de vous!</h2> */}
            <CTAButton><AnchorLink href="#contact" className="contact-anchor" >Contact</AnchorLink></CTAButton>
          </div>
        </div>
        <div className="header-illustration" >
          <img src={TEST} alt="reflexo" className="header-illustration-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
