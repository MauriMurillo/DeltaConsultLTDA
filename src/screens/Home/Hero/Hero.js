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
      className="heroContainer"
      style={{
        backgroundImage: `url(${homeHeroContent[heroPosition].imageURL})`,
      }}
    >
      <div className="textContainer">
        <p id="heroTitle" className="title animate__animated animate__fast">
          {homeHeroContent[heroPosition].titulo}
        </p>
        <p id="heroText" className="text animate__animated animate__fast">
          {homeHeroContent[heroPosition].texto}
        </p>
      </div>
      <div className="imageContainer"></div>
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
