import React, { useContext } from "react";
import "./MenuList.css";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";

function MenuList(props) {
  const { orientation } = props;
  const { setShowOptionMenu, setSelectedOption } = useContext(DeltaContext);
  return (
    <div className={`listContainer${orientation}`}>
      <div className={`listScreens${orientation}`}>
        <div
          onClick={() => {
            setSelectedOption("SERVICIOS");
            setShowOptionMenu(true);
          }}
        >
          SERVICIOS
        </div>
        <div
          onClick={() => {
            setSelectedOption("NOSOTROS");
            setShowOptionMenu(true);
          }}
        >
          NOSOTROS
        </div>
        <div
          onClick={() => {
            setSelectedOption("INDUSTRIAS");
            setShowOptionMenu(true);
          }}
        >
          INDUSTRIAS
        </div>
        <div
          onClick={() => {
            setShowOptionMenu(false);
          }}
        >
          <NavLink to={"/SMS"}> SMS LATAM</NavLink>
        </div>
        <div
          onClick={() => {
            setShowOptionMenu(false);
          }}
        >
          <NavLink to={"/Contacto"}> CONTACTO</NavLink>
        </div>
      </div>
    </div>
  );
}

export { MenuList };
