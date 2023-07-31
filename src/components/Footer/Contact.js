import React, { useContext } from "react";
import { DeltaContext } from "../../Contexts/DeltaContext";
import { Socials } from "./Socials";
import logo from "../../Assets/Images/ISOLOGO DELTA BLANCO 2 (1).png"
function Contact() {
  const { screenSize } = useContext(DeltaContext);
  return (
    <div className="contactContainer">
      <div className="imageContainer"><img alt="logo" src={logo}/></div>
      <p className="contactDescription">
        Delta Consult Ltda., firma miembro de SMS Latinoamérica, es una Firma de
        servicios profesionales constituida en Bolivia para efectuar trabajos en
        auditoría y consultoría.
      </p>
      {screenSize.width <= 1000 ? <Socials /> : null}
    </div>
  );
}

export { Contact };
