import Section from "../template/Section";
import "./warning.css";

const Warning = () => {
  return (
    <Section>
      <div className="warning">
        <div className="warning-text-container">
          <h3>
            Ces techniques ne se substituent pas à la consultation, la pose d’un
            diagnostic et le traitement par un professionnel de santé.
          </h3>
          <p>
            Elles peuvent rentrer dans le cadre d’une thérapie complémentaire.
            <br /> La Réflexothérapie-Réflexologie ne « guérit » pas de
            pathologie, elle soulage les symptômes qui peuvent y être liés.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Warning;
