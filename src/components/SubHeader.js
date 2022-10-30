import "./SubHeader.css";
import { Link } from "react-router-dom";
import data from "../data/subheader.texts";


const SubHeader = () => {
  return (
    <section className="subHeader">
      <div className="subHeader-container">
      { data.map((col, id) => (
        <div className="subHeader-container-col" key={id}>
          <div className="subHeader-container-heading">
            <img src={col.icon} alt="rendez-vous" />
            <h3 className="subHeader-title">{col.title}</h3>
          </div>
          <div className="subHeader-container-content">
            <p>
              {col.content} 
            </p>
            <Link className="subHeader-link" to="">{col.link}</Link>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default SubHeader;
