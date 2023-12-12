import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import "./hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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

  const animateExit = () => {
    animate("heroText", animationClassOut, animationClass);
    animate("heroButton", animationClassOut, animationClass);
    animate("heroImage", animationClassOut, animationClass);
  };

  const forwardHero = () => {
    const next = (heroPosition + 1) % homeHeroContent.length;
    animateExit();
    setTimeout(() => setHeroPosition(next), 301);
  };
  const rewindHero = () => {
    const next =
      heroPosition === 0 ? homeHeroContent.length - 1 : heroPosition - 1;
    animateExit();
    setTimeout(() => setHeroPosition(next), 301);
  };

  useEffect(() => {
    animate("heroText", animationClass, animationClassOut);
    animate("heroButton", animationClass, animationClassOut);
    animate("heroImage", animationClass, animationClassOut);
    const next = (heroPosition + 1) % homeHeroContent.length;
    const move = setTimeout(() => {
      animateExit();
      setTimeout(() => {
        setHeroPosition(next);
      }, 300);
    }, 19000);
    return () => clearTimeout(move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroPosition, homeHeroContent]);

  return (
    <div className="heroContainer top">
      <img
        alt="background"
        id="heroImage"
        className="animate__animated heroBack"
        src={homeHeroContent[heroPosition].imagePC}
      />
      <div className="textContainer">
        <p id="heroTitle" className="heroTitle animate__animated">
          {homeHeroContent[heroPosition].title}
        </p>
        <p id="heroText" className="heroText animate__animated">
          {homeHeroContent[heroPosition].text}
        </p>
        <NavLink
          to={homeHeroContent[heroPosition].path}
          id="heroButton"
          className="animate__animated"
        >
          <p>{homeHeroContent[heroPosition].button}</p>
        </NavLink>
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
