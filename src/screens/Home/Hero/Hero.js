import React, { useContext, useState, useEffect } from "react";
import "animate.css";
import "./hero.css";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function Hero(props) {
  const { heroContent } = props;

  const [heroPosition, setHeroPosition] = useState(0);
  const [change, setChange] = useState(false);
  const { screenSize } = useContext(DeltaContext);

  useEffect(() => {
    setChange(false);
    const next = (heroPosition + 1) % heroContent.length;
    const move = setTimeout(() => {
      setChange(true);
      setTimeout(() => {
        setHeroPosition(next);
      }, 1000);
    }, 15000);
    return () => clearTimeout(move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroPosition, heroContent]);

  const variants = {
    leaving: {
      opacity: 0.2,
      transition: { duration: 1 },
    },
    active: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      className="heroContainer noTop"
      variants={variants}
      initial={"active"}
      animate={change ? "leaving" : "active"}
    >
      {/* PC */}
      {screenSize.width > 1150 ? (
        <img
          src={heroContent[heroPosition].imagePC}
          id="heroImage"
          className="heroBack"
          alt="background"
        />
      ) : null}
      {/* Laptop */}
      {screenSize.width > 950 && screenSize.width <= 1150 ? (
        <img
          src={heroContent[heroPosition].imagePCP}
          id="heroImage"
          className="heroBack"
          alt="background"
        />
      ) : null}
      {/* Tablet */}
      {screenSize.width > 600 && screenSize.width <= 950 ? (
        <img
          src={heroContent[heroPosition].imageTB}
          id="heroImage"
          className="heroBack"
          alt="background"
        />
      ) : null}
      {screenSize.width <= 600 ? (
        <img
          src={heroContent[heroPosition].imageCEL}
          id="heroImage"
          className="heroBack"
          alt="background"
        />
      ) : null}

      <div className="textContainer">
        <p id="heroTitle" className="heroTitle">
          {heroContent[heroPosition].title}
        </p>
        <p id="heroText" className="heroText">
          {heroContent[heroPosition].text}
        </p>
        <NavLink
          to={heroContent[heroPosition].path}
          className=""
          id="heroButton"
        >
          <p>{heroContent[heroPosition].button}</p>
        </NavLink>
      </div>
    </motion.div>
  );
}
export { Hero };
