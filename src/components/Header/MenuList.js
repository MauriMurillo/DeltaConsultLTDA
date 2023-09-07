import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DeltaContext } from "../../Contexts/DeltaContext";

function MenuList(props) {
  const { orientation } = props;
  const { setShowFullMenu } = useContext(DeltaContext);
  return (
    <div className={`listContainer${orientation}`}>
      <div className={`listScreens${orientation} menuLinks`}>
        <div>
          <NavLink to={"/services"} onClick={() => setShowFullMenu(false)}>
            SERVICIOS
          </NavLink>
        </div>
        <div>
          <NavLink to={"/aboutUs"} onClick={() => setShowFullMenu(false)}>
            NOSOTROS
          </NavLink>
        </div>
        <div>
          <NavLink to={"/SMS"} onClick={() => setShowFullMenu(false)}>
            SMS LATAM
          </NavLink>
        </div>
        <div>
          <NavLink to={"/contact"} onClick={() => setShowFullMenu(false)}>
            CONTACTO
          </NavLink>
        </div>
        <div>
          <NavLink to={"/MiDelta"} onClick={() => setShowFullMenu(false)}>
            MiDELTA
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export { MenuList };
