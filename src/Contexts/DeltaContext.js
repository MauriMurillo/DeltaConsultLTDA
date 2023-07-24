import React from "react";
import { useEffect, useState } from "react";
const DeltaContext = React.createContext();

function DeltaProvider(props) {
  // const [navBarVisible, setNavBarVisible] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false)
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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
