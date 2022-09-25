import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-root">
      <div className="form-header">
        <p className="form-intro">
            Vous avez des questions ? Vous souhaitez prendre rendez-vous? Ecrivez moi et je répondrais le plus rapidemant possible
        </p>
      </div>
      <form>
        <label className="form-label">Votre nom</label>
        <input type="text" name="name" />
        <label className="form-label">Votre mail</label>
        <input type="email" name="email" />        
        <label className="form-label">Votre numéro de téléphone</label>
        <input type="text" name="phone" />
        <label className="form-label">Votre message</label>
        <textarea></textarea>
        <button className="form-button">Envoyer</button>
      </form>
    </div>
  );
};
export default ContactForm;
