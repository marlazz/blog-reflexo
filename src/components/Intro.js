import PORTRAIT from "../assets/leila.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <img src={PORTRAIT} alt="portrait de Leila Elghanan" className="intro-portrait" />
      <div className="text-container">
        <h2 className="intro-title">Bienvenue! je suis Leila El Ghanane</h2>
        <hr className="decoration"/>
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
          Vous trouverez ici plus d’informations sur mes differentes pratiques,
          n’hésitez pas à me contacter pour toutes questions. Et en
          attendant....
        </p>
        <span>Prennez soin de vous!</span>
        <ul className="intro-list">
          <li>Réflexothérapie/Réflexologie Combinée</li>
          <li>Massage et pose Ventouses</li>
          <li>Tensions musculaires, lombalgies, fatigue passagère, stress, drainage lymphatique, sevrage tabagique...</li>
          <li>Ecoute et accompagnement</li>
          <li>méthode combinée Sonia Fischmann</li>
          <li>Certification professionnelle « ventouses Shen-Ti »</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
