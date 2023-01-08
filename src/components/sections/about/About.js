import Section from "../template/Section";
import PORTRAIT from "../../../assets/portrait.png";
import "./About.css";
import CTAButton from "../../ui-kit/CTAButton";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const About = () => {
  return (
    <Section>
      <div className="about-container">
        <img
          src={PORTRAIT}
          alt="portrait de Leila"
          className="leila-portrait"
        />
        <div className="about-text-card">
          <h2 className="about-title">Bienvenue! je suis Leila El Ghanane</h2>
          <p>
            Réflexothérapeute certifiée depuis 2017 installée à Carcassonne , je
            vous propose des séances de réflexologie combinée / réflexologie
            plantaire.
          </p>
          <span>
            Vous souffrez de douleurs, de troubles liés au stress et vous
            souhaitez retrouver détente physique et psychique?
          </span>
          <p>
            Je vous accompagne dans une démarche de bien-être au mieux-être à
            travers un coaching personnalisé.
          </p>
          <p>
            Vous trouverez ici plus d’informations sur mes differentes
            pratiques, n’hésitez pas à me contacter pour toutes questions. Et en
            attendant....
          </p>
          <span>Prennez soin de vous!</span>
          <ul className="about-list">
            <li>Réflexothérapie/Réflexologie Combinée</li>
            <li>Massage et pose Ventouses</li>
            <li>
              Tensions musculaires, lombalgies, fatigue passagère, stress,
              drainage lymphatique, sevrage tabagique...
            </li>
            <li>Ecoute et accompagnement</li>
            <li>méthode combinée Sonia Fischmann</li>
            <li>Certification professionnelle « ventouses Shen-Ti »</li>
          </ul>
          <div className="about-button-section">
            <CTAButton><AnchorLink href="#contact" className="contact-anchor" >Contact</AnchorLink></CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
