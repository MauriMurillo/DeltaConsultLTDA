import React, { useContext, useState, useEffect } from "react";
import "animate.css";
import "./hero.css";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { NavLink } from "react-router-dom";
function Hero(props) {
  const { heroContent } = props;

  const [heroPosition, setHeroPosition] = useState(0);
  const { screenSize } = useContext(DeltaContext);

  useEffect(() => {
    //animate in
    const next = (heroPosition + 1) % heroContent.length;
    const move = setTimeout(() => {
      //animateOut
      setTimeout(() => {
        setHeroPosition(next);
      }, 300);
    }, 15000);
    return () => clearTimeout(move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroPosition, heroContent]);

  return (
    <div className="heroContainer noTop">
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
        <NavLink
          to={heroContent[heroPosition].path}
          className="Button animate__animated_Mauri"
          id="heroButton"
        >
          <p>
            {heroContent[heroPosition].button}
          </p>
        </NavLink>
      </div>
    </div>
  );
}
export { Hero };
