import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoDelta from "../../Assets/Logos/ISOLOGO DELTA BLANCO.png";
import "./Header.css";
import { MenuList } from "./MenuList/MenuList";
import { MiDelta } from "./MiDelta";
import { OptionMenu } from "./OptionMenu/OptionMenu";
import { DeltaContext } from "../../Contexts/DeltaContext";

function HeaderFull() {
  const {
    showOptionMenu,
    setShowSubMenu,
    setShowMobileMenu,
    setShowOptionMenu,
    setSelectedItem,
    setSelectedContent,
    setSelectedOption,
  } = useContext(DeltaContext);
  return (
    <nav className="superNav noTop wide">
      <div className="navBar">
        <div
          className="imageContainer"
          onClick={() => {
            setShowSubMenu(false);
            setShowOptionMenu(false);
            setShowMobileMenu(false);
            setSelectedItem("");
            setSelectedContent("");
            setSelectedOption("INICIO");
            window.scrollTo(0, 0);
          }}
        >
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
