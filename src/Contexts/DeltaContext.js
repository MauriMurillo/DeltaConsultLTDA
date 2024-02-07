import React from "react";
import { useEffect, useState } from "react";
const DeltaContext = React.createContext();

function DeltaProvider(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedContent, setSelectedContent] = useState("");
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
        showMobileMenu,
        setShowMobileMenu,
        showOptionMenu,
        setShowOptionMenu,
        showSubMenu,
        setShowSubMenu,
        selectedContent,
        selectedOption,
        setSelectedOption,
        setSelectedContent,
        selectedItem,
        setSelectedItem,
        selectedSection,
        setSelectedSection,
        screenSize,
      }}
    >
      {props.children}
    </DeltaContext.Provider>
  );
}

export { DeltaContext, DeltaProvider };
