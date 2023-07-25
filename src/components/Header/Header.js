import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./Header.css";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { MenuScreen } from "../MenuScreen/MenuScreen";
import { MenuList } from "./MenuList";

function Header() {
  const { screenSize, showFullMenu, setShowFullMenu } =
    useContext(DeltaContext);

  if (screenSize.width <= 800) {
    return (
      <nav className="navBar">
        <div className="imageContainer">
          <NavLink to={"/"}/>
        </div>
        {showFullMenu ? (
          <MenuScreen>
            <MenuList orientation="Vertical"></MenuList>
          </MenuScreen>
        ) : null}
        <div className="showMenuButton">
          <FaBars size={32} color="white" onClick={() => setShowFullMenu(true)}>
            {" "}
            Menu{" "}
          </FaBars>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navBar">
        <div className="imageContainer">
          <NavLink to={"/"}/>
        </div>
        <MenuList orientation="Horizontal"></MenuList>
      </nav>
    );
  }
}

export { Header };
