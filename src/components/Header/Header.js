import React, { useContext } from "react";
import "./Header.css";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderFull } from "./HeaderFull";
import { OptionMenu } from "./OptionMenu/OptionMenu";

function Header() {
  const { screenSize, showOptionMenu } = useContext(DeltaContext);

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
        {showOptionMenu ? <OptionMenu /> : null}
      </React.Fragment>
    );
  }
}

export { Header };
