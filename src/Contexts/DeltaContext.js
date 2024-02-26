import React from "react";
import { useEffect, useState } from "react";
const DeltaContext = React.createContext();

function DeltaProvider(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false); //Whether to show the menu on mobile

  const [showOptionMenu, setShowOptionMenu] = useState(false); //Whether to show individual menu
  const [showSubMenu, setShowSubMenu] = useState(false); //Whether to show subMenu

  const [selectedOption, setSelectedOption] = useState(""); //Selected Option, In header
  const [selectedItem, setSelectedItem] = useState(""); //selected item in the services submenu
  const [selectedContent, setSelectedContent] = useState(""); //content to be displayed in services or industries page
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  // Funcion para responder desde el render a cambios en el viewport

  // Para implementar el envio de correos en los formularios, Javascript aqui, hacer con el cesar
  function sendMailContact(formData) {}

  function sendMailResume(formData) {}

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
        screenSize,
        sendMailContact,
        sendMailResume,
      }}
    >
      {props.children}
    </DeltaContext.Provider>
  );
}

export { DeltaContext, DeltaProvider };
