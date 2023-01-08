import "./ContactInfos.css";
import CTAButton from "./ui-kit/CTAButton";

const ContactInfos = () => {
  return (
    <div className="contactInfos-root">
        <p>
          Vous pouvez prendre rendez-vous par téléphone ou email. N'hésitez pas
          à me contacter pour toutes demande de devis ou demande d'informations,
          je vous réponrdrais au plus vite!
        </p>
        <CTAButton>06.26.54.22.58</CTAButton>
        <p>Horaires: du lundi au vendredi, de 9h à 18h</p>
        <p>email: leilaelghanane@gmail.com</p>
        <p>15 rue d la république, 11050 Cidrefac</p>
    </div>
  );
};

export default ContactInfos;
