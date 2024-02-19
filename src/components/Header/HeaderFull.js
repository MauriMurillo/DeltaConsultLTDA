import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoDelta from "../../Assets/Logos/ISOLOGO DELTA BLANCO.png";
import "./Header.css";
import { MenuList } from "./MenuList/MenuList";
import { MiDelta } from "./MiDelta";
import { OptionMenu } from "./OptionMenu/OptionMenu";
import { DeltaContext } from "../../Contexts/DeltaContext";

function HeaderFull() {
  const { showOptionMenu } = useContext(DeltaContext);
  return (
    <nav className="superNav noTop wide">
      <div className="navBar">
        <div className="imageContainer">
          <NavLink to={"/"}>
            <img alt="logo Delta" src={logoDelta}></img>
          </NavLink>
        </div>
        <MenuList orientation="Horizontal"></MenuList>
        <MiDelta></MiDelta>
      </div>
      {showOptionMenu ? <OptionMenu /> : null}
    </nav>
  );
}

export { HeaderFull };
