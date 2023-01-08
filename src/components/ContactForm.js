import "./ContactForm.css";
import CTAButton from "./ui-kit/CTAButton";

const ContactForm = () => {
  return (
    <div className="contact-form-root">
      <form className="contact-form">
        <label className="contact-label">Votre nom</label>
        <input type="text" name="name" className="contact-input" />
        <label className="contact-label">Votre mail</label>
        <input type="email" name="email" className="contact-input" />
        <label className="contact-label">Votre numéro de téléphone</label>
        <input type="text" name="phone" className="contact-input" />
        <label className="contact-label">Votre message</label>
        <textarea className="contact-textarea"></textarea>
        <div className="contact-form-button-section">
          <CTAButton type="submit">Envoyer</CTAButton>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
