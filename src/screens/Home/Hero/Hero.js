import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "animate.css";

import { DeltaContext } from "../../../Contexts/DeltaContext";
import "./hero.css";
import { ContentContext } from "../../../Contexts/ContentContext";
function Hero() {
  const { heroPosition, forwardHero, rewindHero } = useContext(DeltaContext);
  const { homeHeroContent } = useContext(ContentContext);
  return (
    <div
      className="heroContainer top"
      style={{
        backgroundColor: "red",
      }}
    >
      <div className="textContainer">
        <p id="heroTitle" className="title animate__animated animate__fast">
          {homeHeroContent[heroPosition].titulo}
        </p>
        <img alt="sms logo" className="logoHero" />
        <a href="/#/SMS" className="buttonSMS">
          <p>Vamos</p>
        </a>
      </div>
      <div className="imageContainer">
        <img alt="sms hero" src={homeHeroContent[heroPosition].imageURL} />
      </div>
      <div className="arrow forward" onClick={forwardHero}>
        <IoIosArrowForward size={24} />
      </div>
      <div className="arrow rewind" onClick={rewindHero}>
        <IoIosArrowBack size={24} />
      </div>
    </div>
  );
}
export { Hero };
