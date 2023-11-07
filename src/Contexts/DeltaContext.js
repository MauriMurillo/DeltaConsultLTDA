import React from "react";
import { useEffect, useState } from "react";
const DeltaContext = React.createContext();

function DeltaProvider(props) {

  const [showFullMenu, setShowFullMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
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

  return (
    <DeltaContext.Provider
      value={{
        showFullMenu,
        setShowFullMenu,
        screenSize,
      }}
    >
      {props.children}
    </DeltaContext.Provider>
  );
}

export { DeltaContext, DeltaProvider };
