import "./ContactSection.css";
import ContactForm from "../../ContactForm";
import ContactInfos from "../../ContactInfos";
import GoogleMap from "../../Map";
import Section from "../template/Section";

const ContactSection = () => {
  return (
    <Section>
      <div className="contact-section-root" id="contact">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-form-infos-container">
            <ContactInfos />
            <ContactForm />
          </div>
          <GoogleMap className="google-map" />
          <p> adresse</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
