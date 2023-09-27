import React from "react";
import { Socials } from "../components/Footer/Socials";
import logo from "../../Assets/Images/Logos/ISOLOGO DELTA BLANCO.png";
function Contact() {
  return (
    <div className="contactContainer">
      <div className="imageContainer">
        <img alt="logo" src={logo} />
      </div>
      <p className="contactDescription">
        Delta Consult Ltda. Somos una firma constituida en Bolivia para efectuar
        trabajos y servicios profesionales en las areas de auditoría y
        consultoría.
      </p>
      <Socials />
    </div>
  );
}

export { Contact };
