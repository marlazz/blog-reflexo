import "./Partners.css";
import CITOYENNE from "../assets/partners/collectif.jpeg";
import ROUATIERE from "../assets/partners/banniere-rouatière.jpg";
import EIR from "../assets/partners/eir-logo.jpg";
import FRANCEVICTIME from "../assets/partners/france-victime.jpg";
import OPUS from "../assets/partners/Logo-Opus-Fabrica.svg";
import NLP from "../assets/partners/nlp.jpeg";

const Partners = () => {
  return (
    <div className="partners-root">
      <h2 className="section-title">Partenaires</h2>
      <div className="logos-container">
        <img src={EIR} alt="partenaire" className="partner-logo" />
        <img src={ROUATIERE} alt="partenaire" className="partner-logo" />
        <img src={FRANCEVICTIME} alt="partenaire" className="partner-logo" />
        <img src={OPUS} alt="partenaire" className="partner-logo" />
        <img src={CITOYENNE} alt="partenaire" className="partner-logo" />
        <img src={NLP} alt="partenaire" className="partner-logo" />
      </div>
    </div>
  );
};

export default Partners;
