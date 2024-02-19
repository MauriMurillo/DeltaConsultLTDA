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
  } = useContext(DeltaContext);
  useEffect(() => {
    setShowOptionMenu(false);
    setShowSubMenu(false);
    setShowMobileMenu(false);
    if (selectedSection === "") {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(selectedSection);
      if (element) {
        element.scrollIntoView(false);
      }
    }
  }, [
    pathname,
    selectedSection,
    setShowMobileMenu,
    setShowOptionMenu,
    setShowSubMenu,
  ]);
  return null;
};

export { ScrollToTop };
