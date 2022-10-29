import { NavLink } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ title, text, id }) => {
  return (
    <div
      className="articleCard"
      
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${cardData.picture})`,
      // }}
    >
      <h3 className="card-title">{title}</h3>
      <p className="card-text" dangerouslySetInnerHTML={{__html: text && text}} ></p>
      <NavLink to={`/blog/${id}`} className="card-button">Lire l'article</NavLink>
    </div>
  );
};

export default ArticleCard;
