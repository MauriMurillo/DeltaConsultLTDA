import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { DeltaContext } from "../../../Contexts/DeltaContext";
import "./hero.css";
import { ContentContext } from "../../../Contexts/ContentContext";
function Hero() {
  const { heroPosition, forwardHero, rewindHero } = useContext(DeltaContext);
  const { homeHeroContent } = useContext(ContentContext);
  return (
    <div className="heroContainer">
      <div className="textContainer">
        <p className="title">{homeHeroContent[heroPosition].titulo}</p>
        <p className="text">{homeHeroContent[heroPosition].texto}</p>
      </div>
      <div className="imageContainer">
        <div
          className="imageHero"
          style={{
            backgroundImage: `url(${homeHeroContent[heroPosition].imageURL})`,
          }}
        ></div>
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
