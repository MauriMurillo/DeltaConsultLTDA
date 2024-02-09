import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import "./hero.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { Boton } from "../../../components/Boton/Boton";

function Hero(props) {
  const { heroContent } = props;

  const [heroPosition, setHeroPosition] = useState(0);
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
    const next = (heroPosition + 1) % heroContent.length;
    animateExit();
    setTimeout(() => setHeroPosition(next), 301);
  };
  const rewindHero = () => {
    const next = heroPosition === 0 ? heroContent.length - 1 : heroPosition - 1;
    animateExit();
    setTimeout(() => setHeroPosition(next), 301);
  };

  useEffect(() => {
    animate("heroTitle", animationClass, animationClassOut);
    animate("heroText", animationClass, animationClassOut);
    animate("heroButton", animationClass, animationClassOut);
    animate("heroImage", animationClass, animationClassOut);
    const next = (heroPosition + 1) % heroContent.length;
    const move = setTimeout(() => {
      animateExit();
      setTimeout(() => {
        setHeroPosition(next);
      }, 300);
    }, 10000);
    return () => clearTimeout(move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroPosition, heroContent]);

  return (
    <div className="heroContainer top">
      {/* PC */}
      {screenSize.width > 1150 ? (
        <img
          src={heroContent[heroPosition].imagePC}
          id="heroImage"
          className="animate__animated_Mauri heroBack"
          alt="background"
        />
      ) : null}
      {/* Laptop */}
      {screenSize.width > 950 && screenSize.width <= 1150 ? (
        <img
          src={heroContent[heroPosition].imagePCP}
          id="heroImage"
          className="animate__animated_Mauri heroBack"
          alt="background"
        />
      ) : null}
      {/* Tablet */}
      {screenSize.width > 600 && screenSize.width <= 950 ? (
        <img
          src={heroContent[heroPosition].imageTB}
          id="heroImage"
          className="animate__animated_Mauri heroBack"
          alt="background"
        />
      ) : null}
      {screenSize.width <= 600 ? (
        <img
          src={heroContent[heroPosition].imageCEL}
          id="heroImage"
          className="animate__animated_Mauri heroBack"
          alt="background"
        />
      ) : null}

      <div className="textContainer">
        <p id="heroTitle" className="heroTitle animate__animated_Mauri">
          {heroContent[heroPosition].title}
        </p>
        <p id="heroText" className="heroText animate__animated_Mauri">
          {heroContent[heroPosition].text}
        </p>
        <Boton
          path={heroContent[heroPosition].path}
          name={heroContent[heroPosition].button}
          width={"191px"}
          color={"#FFF"}
          id={"heroButton"}
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
