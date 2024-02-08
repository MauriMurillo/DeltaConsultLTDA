import React, { useContext } from "react";
import "./MenuList.css";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";

function MenuList(props) {
  const { orientation } = props;
  const {
    setShowOptionMenu,
    setShowSubMenu,
    setSelectedOption,
    setSelectedItem,
  } = useContext(DeltaContext);
  return (
    <div className={`listScreens${orientation}`}>
      <div
        onClick={() => {
          setSelectedOption("SERVICIOS");
          setSelectedItem("");
          setShowSubMenu(false);
          setShowOptionMenu(true);
        }}
      >
        SERVICIOS
      </div>
      <div
        onClick={() => {
          setSelectedOption("NOSOTROS");
          setShowSubMenu(false);
          setShowOptionMenu(true);
        }}
      >
        NOSOTROS
      </div>
      <div
        onClick={() => {
          setSelectedOption("INDUSTRIAS");
          setShowSubMenu(false);
          setShowOptionMenu(true);
        }}
      >
        INDUSTRIAS
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setShowOptionMenu(false);
        }}
      >
        <NavLink to={"/SMS"}> SMS LATAM</NavLink>
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setShowOptionMenu(false);
        }}
      >
        <NavLink to={"/Contacto"}> CONTACTO</NavLink>
      </div>
    </div>
  );
}

export { MenuList };
