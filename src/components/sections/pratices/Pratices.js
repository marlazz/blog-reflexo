import activitiesData from "../../../data/activitiesData";
import "./Practices.css";
import ActivityCard from "../../ActivityCard";
import Section from "../template/Section";

const Practices = () => {
  return (
    <Section>
    <div className="pratices-container">
      <h2 className="practices-title">Prennez soin de vous !</h2>
      <div className="activities-container">
        <ActivityCard activity={activitiesData[0]} />
        <ActivityCard activity={activitiesData[1]} />
        <ActivityCard activity={activitiesData[2]} />
      </div>
    </div>

    </Section>
  );
};

export default Practices;
