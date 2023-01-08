import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import CITOYENNE from "../../../assets/partners/collectif.jpeg";
import ROUATIERE from "../../../assets/partners/banniere-rouatière.jpg";
import EIR from "../../../assets/partners/eir-logo.jpg";
import FRANCEVICTIME from "../../../assets/partners/france-victime.jpg";
import OPUS from "../../../assets/partners/Logo-Opus-Fabrica.svg";
import NLP from "../../../assets/partners/nlp.jpeg";

import "./PartnersCarousel.css";

const partners = [ EIR, FRANCEVICTIME, OPUS, NLP, ROUATIERE, CITOYENNE,];

const PartnersCarousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="partners-carousel">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginLeft: "3rem",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginRight: "3rem",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 2,
            minWidth: 1468,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {partners.map((partner, id) => {
          return (
            <div className="logo-container">
              <img
                src={partner}
                alt="partner"
                key={id}
                className="partner-logo"
              />
            </div>
          );
        })}
      </ReactSimplyCarousel>
    </div>
  );
};

export default PartnersCarousel;
