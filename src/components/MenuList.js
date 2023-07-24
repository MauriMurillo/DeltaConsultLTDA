import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../Contexts/DeltaContext";

function MenuList(props) {
  const { orientation } = props;
  const { setShowFullMenu } = useContext(DeltaContext);
  return (
    <div className={`listContainer${orientation}`}>
      <ul className={`listScreens${orientation} screens`}>
        {orientation === "Vertical" ? (
          <li>
            <NavLink to={"/"} onClick={() => setShowFullMenu(false)}>
              INICIO
            </NavLink>
          </li>
        ) : null}

        <li>
          <NavLink to={"/services"} onClick={() => setShowFullMenu(false)}>
            SERVICIOS
          </NavLink>
        </li>
        <li>
          <NavLink to={"/team"} onClick={() => setShowFullMenu(false)}>
            EQUIPO
          </NavLink>
        </li>
        <li>
          <NavLink to={"/aboutUs"} onClick={() => setShowFullMenu(false)}>
            SOBRE NOSOTROS
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} onClick={() => setShowFullMenu(false)}>
            {" "}
            CONTACTO
          </NavLink>
        </li>
        <li>
          <NavLink to={"/SMS"} onClick={() => setShowFullMenu(false)}>
            RED SMS
          </NavLink>
        </li>
        <li>
          <NavLink to={"/IFAC"} onClick={() => setShowFullMenu(false)}>
            {" "}
            IFAC
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { MenuList };
