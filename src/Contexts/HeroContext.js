import React from "react";

import PCNORMAL01 from "../Assets/Images/SECCION1/01PCNORMAL.jpg";
import PCNORMAL02 from "../Assets/Images/SECCION1/02PCNORMAL.jpg";
import PCNORMAL03 from "../Assets/Images/SECCION1/03PCNORMAL.jpg";
import PCNORMAL04 from "../Assets/Images/SECCION1/04PCNORMAL.jpg";
import PCPEQUENA01 from "../Assets/Images/SECCION1/01PCPEQUEÑA.jpg";
import PCPEQUENA02 from "../Assets/Images/SECCION1/02PCPEQUEÑA.jpg";
import PCPEQUENA03 from "../Assets/Images/SECCION1/03PCPEQUEÑA.jpg";
import PCPEQUENA04 from "../Assets/Images/SECCION1/04PCPEQUEÑA.jpg";
import TABLET01 from "../Assets/Images/SECCION1/01TABLET.jpg";
import TABLET02 from "../Assets/Images/SECCION1/02TABLET.jpg";
import TABLET03 from "../Assets/Images/SECCION1/03TABLET.jpg";
import TABLET04 from "../Assets/Images/SECCION1/04TABLET.jpg";
import CELULAR01 from "../Assets/Images/SECCION1/01CELULAR.jpg";
import CELULAR02 from "../Assets/Images/SECCION1/02CELULAR.jpg";
import CELULAR03 from "../Assets/Images/SECCION1/03CELULAR.jpg";
import CELULAR04 from "../Assets/Images/SECCION1/04CELULAR.jpg";

const HeroContext = React.createContext();

function HeroProvider(props) {
  const homeHeroContent = [
    {
      imagePC: PCNORMAL01,
      imagePCP: PCPEQUENA01,
      imageTB: TABLET01,
      imageCEL: CELULAR01,
      text: "Bienvenidos a Delta Consult, firma de servicios de auditoría y consultoría, miembro de la red SMS Latinoamérica.",
      button: "¡ Siguenos !",
      path: "/SMS",
      bold: ["Delta"],
      red: ["SMS Latinoamerica"],
    },
    {
      imagePC: PCNORMAL02,
      imagePCP: PCPEQUENA02,
      imageTB: TABLET02,
      imageCEL: CELULAR02,
      text: "Desde 1976 brindamos servicios profesionales personalizados, son 48 años liderando el mercado de auditoría y consultoría en Bolivia.",
      button: "¡ Descubre !",
      path: "/SMS",
    },
    {
      imagePC: PCNORMAL03,
      imagePCP: PCPEQUENA03,
      imageTB: TABLET03,
      imageCEL: CELULAR03,
      text: "Ofrecemos nuestros servicios a todo tipo de empresas. Son varios clientes de múltiples rubros los que confían en nuestra calidad.",
      button: "¡Explora!",
      path: "/SMS",
    },
    {
      imagePC: PCNORMAL04,
      imagePCP: PCPEQUENA04,
      imageTB: TABLET04,
      imageCEL: CELULAR04,
      text: "SMS Latinoamérica es un red internacional de firmas de auditoría y consultoría, con +100 firmas en el mundo. Formamos parte del IFAC y del Forum of Firms.",
      button: "¡Explora!",
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
