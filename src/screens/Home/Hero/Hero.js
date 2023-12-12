import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import "./hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HeroContext } from "../../../Contexts/HeroContext";
import { DeltaContext } from "../../../Contexts/DeltaContext";
function Hero() {
  const [heroPosition, setHeroPosition] = useState(0);
  const { homeHeroContent } = useContext(HeroContext);
  const { screenSize } = useContext(DeltaContext);
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
    animate("heroTitle", animationClassOut, animationClass);
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
    animate("heroTitle", animationClass, animationClassOut);
    animate("heroText", animationClass, animationClassOut);
    animate("heroButton", animationClass, animationClassOut);
    animate("heroImage", animationClass, animationClassOut);
    const next = (heroPosition + 1) % homeHeroContent.length;
    const move = setTimeout(() => {
      animateExit();
      setTimeout(() => {
        setHeroPosition(next);
      }, 300);
    }, 10000);
    return () => clearTimeout(move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroPosition, homeHeroContent]);

  return (
    <div className="heroContainer top">
      {/* PC */}
      {screenSize.width > 1150 ? (
        <img
          src={homeHeroContent[heroPosition].imagePC}
          id="heroImage"
          className="animate__animated heroBack"
          alt="background"
        />
      ) : null}
      {/* Laptop */}
      {screenSize.width > 950 && screenSize.width <= 1150 ? (
        <img
          src={homeHeroContent[heroPosition].imagePCP}
          id="heroImage"
          className="animate__animated heroBack"
          alt="background"
        />
      ) : null}
      {/* Tablet */}
      {screenSize.width > 600 && screenSize.width <= 950 ? (
        <img
          src={homeHeroContent[heroPosition].imageTB}
          id="heroImage"
          className="animate__animated heroBack"
          alt="background"
        />
      ) : null}
      {screenSize.width <= 600 ? (
        <img
          src={homeHeroContent[heroPosition].imageCEL}
          id="heroImage"
          className="animate__animated heroBack"
          alt="background"
        />
      ) : null}

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
