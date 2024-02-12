import React, { useContext } from "react";
import "./Header.css";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderFull } from "./HeaderFull";

function Header() {
  const { screenSize} = useContext(DeltaContext);

  if (screenSize.width <= 950) {
    return (
      <React.Fragment>
        <HeaderMobile />
      </React.Fragment>
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
