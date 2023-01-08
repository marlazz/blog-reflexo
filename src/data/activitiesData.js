import REFLEXO from "../assets/activities/reflexo/reflexology.png";
import HANDS from "../assets/activities/reflexo/Oil Massage.svg";
import TABLE from "../assets/activities/reflexo/massage_table.svg";
import AROMA from "../assets/activities/reflexo/aroma.svg";
import FEET from "../assets/activities/reflexo/feet.svg";
import COACHING from "../assets/activities/coaching/sea.png";
import TRAINER from "../assets/activities/coaching/trainer.svg";
import THERAPY from "../assets/activities/coaching/therapy.svg";
import FORMATION from "../assets/activities/formations/team.png";
import TRUST from "../assets/activities/formations/trust.svg";
import PDF from "../assets/activities/formations/DWG.svg";
import TRAINING from "../assets/activities/formations/training.svg";

const activitiesData = [
  {
    image: REFLEXO,
    id: "reflexologie",
    title: "Réflexologie",
    textFirstLine: "Découvrez les bienfaits de la reflexothérapie grâce aux scéances de réflexologie combinée, utilisant differentes techniques ancestrales...",
    textSecondLine: "Déroulé des séances, indications thétapeutiques, techniques, tarifs, prise de rendez-vous, retrouvez ici toutes les informations",
    features: [
      { icon: HANDS, title: "feature de truc sympa", text: "lorem ipsum dolor sit amet" },
      { icon: TABLE, title: "feature", text: "lorem ipsum dolor sit amet" },
      { icon: AROMA, title: "feature", text: "lorem ipsum dolor sit amet" },
      { icon: FEET, title: "feature", text: "lorem ipsum dolor sit amet" },
    ],
    link: "/reflexologie",
  },
  {
    image: COACHING,
    id: "coaching",
    title: "Coaching bien-être",
    textFirstLine: "Bénéficiez d'un accompagnement personnalisé pour vous accompagner dans votre démarche de bien-être",
    features: [
      { icon: TRAINER, title: "feature", text: "lorem ipsum dolor sit amet" },
      { icon: THERAPY, title: "feature", text: "lorem ipsum dolor sit amet" },
    ],
    link: "/coaching",
  },
  {
    image: FORMATION,
    id: "formations",
    title: "Formations",
    textFirstLine: "Formatrice professionnelle agrée, je vous propose des formations sur mesure adaptées à tous public",
    features: [
      { icon: TRAINING, title: "feature", text: "lorem ipsum dolor sit amet" },
      { icon: PDF, title: "feature", text: "lorem ipsum dolor sit amet" },
      // { icon: TRUST, title: "feature", text: "lorem ipsum dolor sit amet" },
    ],
    link: "formation",
  },
];

export default activitiesData;
