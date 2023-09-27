import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { Office } from "./Office";
import { Socials } from "./Socials";
import { Rights } from "./Rights";
import { ContentContext } from "../../Contexts/ContentContext";
import { DeltaContext } from "../../Contexts/DeltaContext";

import logo from "../../Assets/Images/Logos/ISOLOGO DELTA BLANCO.png";

function Footer() {
  const { offices } = useContext(ContentContext);
  const { screenSize } = useContext(DeltaContext);
  return (
    <div className="footer">
      <div className="footerContainer">
        {screenSize.width > 1150 || screenSize.width <= 950 ? (
          <div className="logoFooter">
            <img alt="logo" src={logo} />
          </div>
        ) : null}

        {screenSize.width > 1150 || screenSize.width <= 950 ? (
          <p className="contactDescription">
            Somos una firma constituida en Bolivia para efectuar trabajos y
            servicios profesionales en las areas de auditoría y consultoría.
          </p>
        ) : null}

        {screenSize.width <= 1000 ? (
          <div className="linkContact">
            <NavLink to={"/contact"}>
              <p>Contacto de nuestras oficinas en Bolivia</p>
            </NavLink>
          </div>
        ) : null}

        <Socials />

        {screenSize.width > 1000
          ? offices.map(function (officeItem) {
              return <Office content={officeItem} />;
            })
          : null}
      </div>
      <Rights />
    </div>
  );
}

export { Footer };
