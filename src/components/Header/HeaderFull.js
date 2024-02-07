import React from "react";
import { NavLink } from "react-router-dom";
import logoDelta from "../../Assets/Logos/ISOLOGO DELTA BLANCO.png";
import "./Header.css";
import { MenuList } from "./MenuList/MenuList";
import { MiDelta } from "./MiDelta";
function HeaderFull() {
  return (
    <nav className="navBar">
      <div className="imageContainer">
        <NavLink to={"/"}>
          <img alt="logo Delta" src={logoDelta}></img>
        </NavLink>
      </div>
      <MenuList orientation="Horizontal"></MenuList>
      <MiDelta></MiDelta>
    </nav>
  );
}

export { HeaderFull };
