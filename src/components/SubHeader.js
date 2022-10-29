import "./SubHeader.css";
import RDV from "../assets/subheader/rdv.svg";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <section className="subHeader">
      <div className="subHeader-container">
        <div className="subHeader-container-col">
          <div className="subHeader-container-heading">
            <img src={RDV} alt="rendez-vous" />
            <h3 className="subHeader-title">Rendez-vous</h3>
          </div>
          <div className="subHeader-container-content">
            <p>
              Vous pouvez prendre rendez-vous par téléphone ou email. 
            </p>
            <Link className="subHeader-link" to="">Infos contact</Link>
          </div>
        </div>
        <div className="subHeader-container-col">
          <div className="subHeader-container-heading">
            <img src={RDV} alt="rendez-vous" />
            <h3 className="subHeader-title">Adresse</h3>
          </div>
          <div className="subHeader-container-content">
            <p>Vous pouvez prendre rendez-vous par téléphone ou email.</p>
            <Link className="subHeader-link" to="">Voir sur la carte</Link>
          </div>
        </div>
        <div className="subHeader-container-col">
          <div className="subHeader-container-heading">
            <img src={RDV} alt="rendez-vous" />
            <h3 className="subHeader-title">Infos</h3>
          </div>
          <div className="subHeader-container-content">
            <p>
              Vous pouvez prendre rendez-vous 
              par téléphone Vous 
              pouvez prendre
              rendez-vous par téléphone
            </p>
            <Link className="subHeader-link" to="">Infos contact</Link>
          </div>
        </div>
        <div className="subHeader-container-col">
          <div className="subHeader-container-heading">
            <img src={RDV} alt="rendez-vous" />
            <h3 className="subHeader-title">Horaires</h3>
          </div>
          <div className="subHeader-container-content">
            <p>
              Vous pouvez prendre 
              séances se déroulent 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
