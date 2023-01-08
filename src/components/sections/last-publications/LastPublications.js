import { Link } from "react-router-dom";
import cardsData from "../../../data/cardData";

import "./LastPublications.css";
import ArticleCard from "../../ArticleCard";
import Section from "../template/Section";
import CTAButton from "../../ui-kit/CTAButton";

const LastPublications = () => {
  return (
    <Section>
      <div className="last-publications">
        <h2 className="last-publications-title">Actualités</h2>
        <p className="last-publications-intro">
          Retrouvez ici les dernières publications de mon espace blog où je
          partage mes actualités, lectures, évenements, vie associative...{" "}
          <br />
          Bonne lecture!
        </p>
        <div className="articles-container">
          {cardsData.map((card) => (
            <ArticleCard article={card} />
          ))}
          <div className="button-container">
            <Link to="/blog" className="contact-anchor">
              <CTAButton>Tous les articles</CTAButton>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LastPublications;
