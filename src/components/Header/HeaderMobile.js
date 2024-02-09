import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../Assets/Icons/utilIcons/Menu.svg";
import logoDelta from "../../Assets/Logos/ISOLOGO DELTA BLANCO.png";
import "./Header.css";
import { MenuScreen } from "../MenuScreen/MenuScreen";
import { MenuList } from "./MenuList/MenuList";
import { MiDelta } from "./MiDelta";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { MobileOptionMenu } from "./MobileOptionMenu/MobileOptionMenu";

function HeaderMobile() {
  const { showMobileMenu, setShowMobileMenu, showOptionMenu } =
    useContext(DeltaContext);
  return (
    <div className="navBar">
      <div className="imageContainer">
        <NavLink to={"/"} onClick={() => setShowMobileMenu(false)}>
          <img alt="logo Delta" src={logoDelta}></img>
        </NavLink>
      </div>
      {showMobileMenu ? (
        <MenuScreen>
          {showOptionMenu ? (
            <MobileOptionMenu />
          ) : (
            <MenuList orientation="Vertical" />
          )}
          <MiDelta></MiDelta>
        </MenuScreen>
      ) : null}
      <div className="showMenuButton">
        <img
          src={menu}
          alt="show menu"
          onClick={() => {
            if (showMobileMenu) {
              setShowMobileMenu(false);
            } else {
              setShowMobileMenu(true);
            }
          }}
        ></img>
      </div>
    </div>
  );
}

export { HeaderMobile };
