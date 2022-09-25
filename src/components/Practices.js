import "./Practices.css";

const Practices = () => {
  return (
    <div className="practices-root">
      <h2 className="section-title">Mes pratiques</h2>
      <div className="cards">
        <div className="card">
          <h3>Réflexothérapie</h3>
          <button>+</button>
          <p>
            Déroulé des séances, indications thétapeutiques, techniques, tarifs,
            prise de rendez-vous, retrouvez toutes les informations
          </p>
          <button>En savoir +</button>
        </div>
        <div className="card">
          <h3>Coaching</h3>
          <button>+</button>
          <p>
            Bénéficiez d’un accompagnement personnalisé en bien-être et
            développement personnel! Séances, tarifs, rendez-vous, retrouvez
            toutes les informations
          </p>
          <button>En savoir +</button>
        </div>
        <div className="card">
          <h3>Formations</h3>
          <button>+</button>
          <p>
            Mes engagements associatifs et mon expertise dans l'accueil et
            l’écoute des victimes de violences sont au cœur de mes activités.
            C’est pourquoi en tant que formatrice agréée, je propose des
            formations adaptées à tout public.
          </p>
          <button>En savoir +</button>
        </div>
      </div>
    </div>
  );
};

export default Practices;
