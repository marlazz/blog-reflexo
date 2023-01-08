import { Link } from "react-router-dom";
import "./ActivityCard.css";
import CTAButton from "./ui-kit/CTAButton";

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <div
        className="activity-image"
        style={{ backgroundImage: `url(${activity.image})` }}
      />
      <div className="activity-content">
        <h2 className="activity-title">{activity.title}</h2>
        <p className="activity-text">
          {activity.textFirstLine}
          <div className="activity-features-container">
            {activity.features.map((feature, id) => {
              return (
                <div className="activity-feature">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="feature-icon"
                  />
                  <h4>{feature.title}</h4>
                </div>
              );
            })}
          </div>
          {activity.textSecondLine}
        </p>
        <div className="activity-buttons-container">
          <CTAButton>
            <Link className="activity-link" to={activity.link}>
              En savoir +
            </Link>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
