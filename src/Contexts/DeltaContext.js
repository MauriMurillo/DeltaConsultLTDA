import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";
const DeltaContext = React.createContext();

function DeltaProvider(props) {
  const { homeHeroContent } = useContext(ContentContext);

  const [showFullMenu, setShowFullMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [heroPosition, setHeroPosition] = useState(0);

  // Funcion para responder desde el render a cambios en el viewport
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  // ----------------------------------------------------------

  //Funcion para el manejo del hero en el home

  const animationClassOut = "animate__fadeOutRightBig";
  const animationClass = "animate__fadeInRightBig";

  function forwardHero() {
    const animatedTitle = document.getElementById("heroTitle");
    const animatedText = document.getElementById("heroText");
    const next = (heroPosition + 1) % homeHeroContent.length;
    animatedTitle.classList.remove(animationClassOut);
    animatedText.classList.remove(animationClassOut);
    animatedTitle.classList.remove(animationClass);
    animatedText.classList.remove(animationClass);
    animatedTitle.classList.add(animationClassOut);
    animatedText.classList.add(animationClassOut);
    console.log("animation out");
    setTimeout(() => setHeroPosition(next), 801);
  }
  function rewindHero() {
    const animatedTitle = document.getElementById("heroTitle");
    const animatedText = document.getElementById("heroText");
    const next =
      heroPosition === 0 ? homeHeroContent.length - 1 : heroPosition - 1;
    animatedTitle.classList.remove(animationClassOut);
    animatedText.classList.remove(animationClassOut);
    animatedTitle.classList.remove(animationClass);
    animatedText.classList.remove(animationClass);
    animatedTitle.classList.add(animationClassOut);
    animatedText.classList.add(animationClassOut);
    setTimeout(() => setHeroPosition(next), 801);
  }
  useEffect(() => {
    const animatedTitle = document.getElementById("heroTitle");
    const animatedText = document.getElementById("heroText");

    setTimeout(() => {
      animatedTitle.classList.remove(animationClassOut);
      animatedText.classList.remove(animationClassOut);
      animatedTitle.classList.remove(animationClass);
      animatedText.classList.remove(animationClass);
      animatedTitle.classList.add(animationClass);
      animatedText.classList.add(animationClass);
    }, 50);

    const next = (heroPosition + 1) % homeHeroContent.length;
    const move = setTimeout(() => {
      if (animatedText && animatedTitle) {
        animatedTitle.classList.remove(animationClass);
        animatedText.classList.remove(animationClass);
        animatedTitle.classList.remove(animationClassOut);
        animatedText.classList.remove(animationClassOut);
        animatedTitle.classList.add(animationClassOut);
        animatedText.classList.add(animationClassOut);
      }
      setTimeout(() => {
        setHeroPosition(next);
      }, 801);
    }, 6000);
    return () => clearTimeout(move);
  }, [heroPosition, homeHeroContent]);

  // useEffect(() => {

  // }, [heroPosition]);

  return (
    <DeltaContext.Provider
      value={{
        showFullMenu,
        setShowFullMenu,
        screenSize,
        heroPosition,
        forwardHero,
        rewindHero,
      }}
    >
      {props.children}
    </DeltaContext.Provider>
  );
}

export { DeltaContext, DeltaProvider };
