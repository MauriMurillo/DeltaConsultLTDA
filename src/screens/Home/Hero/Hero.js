import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import "./hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import left from "../../../Assets/Images/Logos/blue_left.png";
import right from "../../../Assets/Images/Logos/blue_right.png";
import { HeroContext } from "../../../Contexts/HeroContext";

function Hero() {
  const [heroPosition, setHeroPosition] = useState(0);
  const { homeHeroContent } = useContext(HeroContext);

  const animationClassOut = "animate__fadeOutLeftBig";
  const animationClass = "animate__fadeInRightBig";

  const animate = (elementID, classIn, classOut) => {
    const element = document.getElementById(elementID);
    if (element) {
      element.classList.remove(classIn);
      element.classList.remove(classOut);
      element.classList.add(classIn);
    }
  };

  const forwardHero = () => {
    const next = (heroPosition + 1) % homeHeroContent.length;
    animate("heroText", animationClassOut, animationClass);
    animate("heroButton", animationClassOut, animationClass);
    animate("heroImage", animationClassOut, animationClass);
    setTimeout(() => {
      animate("heroText", animationClass, animationClassOut);
      animate("heroButton", animationClass, animationClassOut);
      animate("heroImage", animationClass, animationClassOut);
    }, 800);
    setTimeout(() => setHeroPosition(next), 801);
  };
  const rewindHero = () => {
    const next =
      heroPosition === 0 ? homeHeroContent.length - 1 : heroPosition - 1;
    animate("heroText", animationClassOut, animationClass);
    animate("heroButton", animationClassOut, animationClass);
    animate("heroImage", animationClassOut, animationClass);
    setTimeout(() => {
      animate("heroText", animationClass, animationClassOut);
      animate("heroButton", animationClass, animationClassOut);
      animate("heroImage", animationClass, animationClassOut);
    }, 800);
    setTimeout(() => setHeroPosition(next), 801);
  };

  useEffect(() => {
    animate("heroText", animationClass, animationClassOut);
    animate("heroButton", animationClass, animationClassOut);
    animate("heroImage", animationClass, animationClassOut);

    const next = (heroPosition + 1) % homeHeroContent.length;
    const move = setTimeout(() => {
      animate("heroText", animationClassOut, animationClass);
      animate("heroButton", animationClassOut, animationClass);
      animate("heroImage", animationClassOut, animationClass);
      setTimeout(() => {
        setHeroPosition(next);
      }, 801);
    }, 17000);
    return () => clearTimeout(move);
  }, [heroPosition, homeHeroContent]);

  return (
    <div className="heroContainer top">
      <div className="textContainer">
        <p id="heroText" className="heroText animate__animated">
          <img src={right} alt="decor" />
          {homeHeroContent[heroPosition].text}
          <img src={left} alt="decor" />
        </p>
        <NavLink
          to={homeHeroContent[heroPosition].path}
          id="heroButton"
          className="animate__animated"
        >
          <p>{homeHeroContent[heroPosition].button}</p>
        </NavLink>
      </div>
      <div className="imageContainer">
        <img
          id="heroImage"
          className="animate__animated"
          alt="sms hero"
          src={homeHeroContent[heroPosition].imagePC}
        />
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
