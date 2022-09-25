import "./ContactInfos.css";
import GoogleMap from "./Map";

const ContactInfos = () => {
  return (
    <div className="contactInfos-root">
      <button className="phone-button">06.26.54.22.58</button>
      <p>15 rue d la république, 11050 Cidrefac</p>
      <GoogleMap />
      <p>Horaires: du lundi au vendredi, de 9h à 18h</p>
    </div>
  );
};

export default ContactInfos;
