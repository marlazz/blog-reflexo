import { NavLink } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
    <div style={{ backgroundImage: `url(${article.picture})` }} className="articleCard-picture"/>
      <div className="articleCard-text">
        <h3 className="card-title">{article.title}</h3>
        <p>
          publié le 11/11/2022, <br />
          par Leila Elghanane
        </p>
        <div className="articleCard-bottom-container">
            <NavLink to={`/blog/${article.id}`}>Lire l'article</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
