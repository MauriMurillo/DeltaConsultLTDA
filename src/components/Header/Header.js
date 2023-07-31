import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../Assets/Icons/menu-sharp.svg";
import logoDelta from "../../Assets/Images/ISOLOGO DELTA BLANCO.png";
import "./Header.css";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { MenuScreen } from "../MenuScreen/MenuScreen";
import { MenuList } from "./MenuList";

function Header() {
  const { screenSize, showFullMenu, setShowFullMenu } =
    useContext(DeltaContext);

  if (screenSize.width <= 900) {
    return (
      <nav className="navBar">
        <div className="imageContainer">
          <NavLink to={"/"} onClick={() => setShowFullMenu(false)}>
            <img alt="logo Delta" src={logoDelta}></img>
          </NavLink>
        </div>
        {showFullMenu ? (
          <MenuScreen>
            <MenuList orientation="Vertical"></MenuList>
          </MenuScreen>
        ) : null}
        <div className="showMenuButton">
          <img
            src={menu}
            alt="show menu"
            onClick={() => {
              if (showFullMenu) {
                setShowFullMenu(false);
              } else {
                setShowFullMenu(true);
              }
            }}
          ></img>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navBar">
        <div className="imageContainer">
          <NavLink to={"/"} onClick={() => setShowFullMenu(false)}>
            <img alt="logo Delta" src={logoDelta}></img>
          </NavLink>
        </div>
        <MenuList orientation="Horizontal"></MenuList>
      </nav>
    );
  }
}

export { Header };
