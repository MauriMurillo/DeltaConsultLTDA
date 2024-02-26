import React, { useContext } from "react";
import "./MenuList.css";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";

function MenuList(props) {
  const { orientation } = props;
  const {
    setShowOptionMenu,
    setSelectedOption,
    showOptionMenu,
    selectedOption,
    setShowSubMenu,
    setShowMobileMenu,
    setSelectedItem,
    setSelectedContent,
  } = useContext(DeltaContext);
  return (
    <div className={`listScreens${orientation}`}>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setSelectedItem("");
          showOptionMenu && selectedOption === "SERVICIOS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("SERVICIOS");
        }}
      >
        <div>SERVICIOS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setSelectedItem("");
          showOptionMenu && selectedOption === "NOSOTROS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("NOSOTROS");
        }}
      >
        <div>NOSOTROS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setSelectedItem("");
          showOptionMenu && selectedOption === "INDUSTRIAS"
            ? setShowOptionMenu(false)
            : setShowOptionMenu(true);
          setSelectedOption("INDUSTRIAS");
        }}
      >
        <div>INDUSTRIAS</div>
        {orientation === "Vertical" ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setShowOptionMenu(false);
          setShowMobileMenu(false);
          setSelectedItem("");
          setSelectedContent("");
          setSelectedOption("SMS");
          window.scrollTo(0, 0);
        }}
      >
        <NavLink to={"/SMS"}> SMS LATAM</NavLink>
      </div>
      <div
        onClick={() => {
          setShowSubMenu(false);
          setShowOptionMenu(false);
          setShowMobileMenu(false);
          setSelectedItem("");
          setSelectedContent("");
          setSelectedOption("CONTACTO");
          window.scrollTo(0, 0);
        }}
      >
        <NavLink to={"/Contacto"}> CONTACTO</NavLink>
      </div>
    </div>
  );
}

export { MenuList };
