import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";
const DeltaContext = React.createContext();

function DeltaProvider(props) {
  const {homeHeroContent} = useContext(ContentContext)


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
  function forwardHero(){
    const next = (heroPosition + 1) % homeHeroContent.length;
    setHeroPosition(next);
  }
  function rewindHero(){
    const next = heroPosition === 0 ? homeHeroContent.length-1 : heroPosition-1;
    setHeroPosition(next)
  }
  useEffect(()=>{
    const next = (heroPosition + 1) % homeHeroContent.length;
    const move = setTimeout(()=>setHeroPosition(next), 6000);
    return () => clearTimeout(move);
  },[heroPosition, homeHeroContent]);

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
