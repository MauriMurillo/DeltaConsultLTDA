import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DeltaContext } from "./Contexts/DeltaContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const {
    selectedSection,
    setShowOptionMenu,
    setShowSubMenu,
    setShowMobileMenu,
    selectedOption
  } = useContext(DeltaContext);
  useEffect(() => {
    setShowOptionMenu(false);
    setShowSubMenu(false);
    setShowMobileMenu(false);
    if (selectedSection !== "" && selectedOption === "NOSOTROS") {
      const element = document.getElementById(selectedSection);
      if (element) {
        element.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, selectedOption, selectedSection, setShowMobileMenu, setShowOptionMenu, setShowSubMenu]);
  return null;
};

export { ScrollToTop };
