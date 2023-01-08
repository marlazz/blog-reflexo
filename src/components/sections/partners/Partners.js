import PartnersCarousel from "./PartnersCarousel";
import Section from "../template/Section";

import "./Partners.css";

const Partners = () => {
  return (
    <Section>
      <div className="partners-section">
        <h2>Partenaires</h2>
        <PartnersCarousel/>
      </div>
    </Section>
  );
};

export default Partners;
