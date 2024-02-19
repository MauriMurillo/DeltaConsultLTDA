import React, { useContext } from "react";
import "./Header.css";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderFull } from "./HeaderFull";

function Header() {
  const { screenSize} = useContext(DeltaContext);

  if (screenSize.width <= 950) {
    return (
      <nav className="superNav noTop">
        <HeaderMobile />
      </nav>
    );
  } else {
    return (
      <React.Fragment>
        <HeaderFull />
      </React.Fragment>
    );
  }
}

export { Header };
