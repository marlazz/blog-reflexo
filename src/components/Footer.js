import "./Footer.css";
import FACEBOOK  from "../assets/social-media/facebook.svg";
import INSTAGRAM  from "../assets/social-media/instagram.svg";
import LINKEDIN  from "../assets/social-media/linkedin.svg";
import TWITTER  from "../assets/social-media/twitter.svg";

const Footer = () => {
  return <div className="footer">
    <div className="footer-sm-container">
    <img src={FACEBOOK} alt="facebook" className="social-media-icon"/>
    <img src={LINKEDIN} alt="facebook" className="social-media-icon"/>
    <img src={TWITTER} alt="facebook" className="social-media-icon"/>
    <img src={INSTAGRAM} alt="facebook" className="social-media-icon"/>
    </div>
  </div>;
};

export default Footer;
