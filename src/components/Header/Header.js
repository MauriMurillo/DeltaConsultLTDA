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
      <nav>
        <HeaderMobile />
        {showOptionMenu ? <OptionMenu /> : null}
      </nav>
    );
  } else {
    return (
      <nav>
        <HeaderFull />
        {showOptionMenu ? <OptionMenu /> : null}
      </nav>
    );
  }
}

export { Header };
