 import "./EditArticleCard.css"

export const EditCard = ({article}) => {
  return (
    <div className="editCard">
      {/* <div className="editcard__header">
        <p className="editCard__header--date">date</p>
        <div className="editCard__header--tag">divers</div>
      </div> */}
      <div className="editCard__image" />
      <div className="editCard__description">
        <h3 className="editCard__title">{article.title}</h3>
        <p className="editCard__header--date">date</p>
        <div className="editCard__header--tag">divers</div>
        <div className="editCard__btns">
          <button className="editCard__btn--edit">Editer</button>
          <button className="editCard__btn--remove">Suprimer</button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
