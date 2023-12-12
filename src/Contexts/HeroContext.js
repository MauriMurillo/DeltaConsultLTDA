import React from "react";

import PCNORMAL02 from "../Assets/Images/SECCION1/PC LA PAZ.jpg";
import PCNORMAL01 from "../Assets/Images/SECCION1/PC SANTA CRUZ.jpg";
import PCNORMAL03 from "../Assets/Images/SECCION1/PC UYUNI 2.jpg";
import PCPEQUENA02 from "../Assets/Images/SECCION1/LAPTOP LP.jpg";
import PCPEQUENA01 from "../Assets/Images/SECCION1/LAPTOP SCZ.jpg";
import PCPEQUENA03 from "../Assets/Images/SECCION1/LAPTOP UYUNI.jpg";
import TABLET02 from "../Assets/Images/SECCION1/TABLET LPZ.jpg";
import TABLET01 from "../Assets/Images/SECCION1/TABLET SCZ.jpg";
import TABLET03 from "../Assets/Images/SECCION1/TABLET UYUNI.jpg";
import CELULAR02 from "../Assets/Images/SECCION1/CELULAR LPZ.jpg";
import CELULAR01 from "../Assets/Images/SECCION1/CELULAR SCZ.jpg";
import CELULAR03 from "../Assets/Images/SECCION1/CELULAR UYUNI.jpg";

const HeroContext = React.createContext();

function HeroProvider(props) {
  const homeHeroContent = [
    {
      imagePC: PCNORMAL01,
      imagePCP: PCPEQUENA01,
      imageTB: TABLET01,
      imageCEL: CELULAR01,
      title: "Bienvenidos a Delta Consult",
      text: "Somos una firma de servicios de auditoría y consultoría, miembro de la red SMS Latinoamérica.",
      button: "Explora",
      path: "/SMS",
    },
    {
      imagePC: PCNORMAL02,
      imagePCP: PCPEQUENA02,
      imageTB: TABLET02,
      imageCEL: CELULAR02,
      title: "Liderando el mercado desde 1976",
      text: "Son 48 años brindando servicios de auditoría y consultoría en Bolivia.",
      button: "Explora",
      path: "/SMS",
    },
    {
      imagePC: PCNORMAL03,
      imagePCP: PCPEQUENA03,
      imageTB: TABLET03,
      imageCEL: CELULAR03,
      title: "Te ofrecemos servicios de calidad",
      text: "Son varios clientes de múltiples rubros los que confían en nuestra experiencia",
      button: "Explora",
      path: "/SMS",
    },
  ];

  return (
    <HeroContext.Provider
      value={{
        homeHeroContent,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}

export { HeroContext, HeroProvider };
