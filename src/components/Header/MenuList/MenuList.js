import React, { useContext } from "react";
import "./MenuList.css";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";

function MenuList(props) {
  const { orientation } = props;
  const {
    setShowOptionMenu,
    setShowSubMenu,
    setSelectedOption,
    setSelectedItem,
    showOptionMenu,
    selectedOption,
  } = useContext(DeltaContext);
  return (
    <div className={`listScreens${orientation}`}>
      <div
        onClick={() => {
          showOptionMenu && selectedOption === "SERVICIOS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("SERVICIOS");
          setSelectedItem("");
          setShowSubMenu(false);
        }}
      >
        <div>SERVICIOS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <div
        onClick={() => {
          showOptionMenu && selectedOption === "NOSOTROS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("NOSOTROS");
          setShowSubMenu(false);
        }}
      >
        <div>NOSOTROS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <div
        onClick={() => {
          showOptionMenu && selectedOption === "INDUSTRIAS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("INDUSTRIAS");
          setShowSubMenu(false);
        }}
      >
        <div>INDUSTRIAS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
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
