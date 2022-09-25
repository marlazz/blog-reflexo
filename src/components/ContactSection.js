import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section-root">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <ContactForm />
        <ContactInfos />
      </div>
    </div>
  );
};

export default ContactSection;
