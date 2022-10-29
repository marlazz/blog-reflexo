import cardsData from "../data/cardData";
import ArticleCard from "./ArticleCard";

import "./LastPublications.css";

const LastPublications = () => {
  return (
    <div className="last-publications">
      <h2 className="section-title">Dernières publications</h2>
      <div className="articles-container">
        {cardsData.map((card) => (
          <ArticleCard cardData={card} />
        ))}
      </div>
      <button className="blog-button">Blog</button>
    </div>
  );
};

export default LastPublications;
