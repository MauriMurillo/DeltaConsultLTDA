import React from "react";
const ContentContext = React.createContext();

function ContentProvider(props) {
  const offices = [
    {
      ciudad: "LA PAZ",
      direccion: "C. Méndez Arcos #831 - Edif. Delta - Z. Sopocachi",
      telefono: "(+591-2) 2427222",
      mail: "deltaconsult@dcl.com.bo",
      mapLink: "https://goo.gl/maps/5Y46ZDYoUQtQL92x5"
    },
    {
      ciudad: "SANTA CRUZ",
      direccion: "C. Fermin Peralta #110 - Edif. Delta - Z. EQUIPETROL",
      telefono: "(+591-3) 3454756",
      mail: "deltascz@dcl.com.bo",
      mapLink: "https://goo.gl/maps/ZBkzaSGN7K3RDGkf9"
    },
    {
      ciudad: "COCHABAMBA",
      direccion:
        "Calle Los Molles, MZ.035 Edificio Delta PB Nº847 - Zona Cala Cala",
      telefono: "(591)-72044457",
      mail: "zvillca@dcl.com.bo",
      mapLink: "https://goo.gl/maps/NUT77m3tGa78EmKr9"
    },
  ];

  const homeHeroContent = [
    {
      imageURL: "/img/hero1.png",
      titulo: "!BIENVENIDOS A DCL!",
      texto:
        "Delta Consult es una firma nacional de servicios de auditoría y consultoría, miembros de SMS Latinoamérica.",
    },
    {
      imageURL: "/img/hero1.png",
      titulo: "46 AÑOS",
      texto:
        "de experiencia nos hacen una firma referente a nivel nacional en asesoramiento tributario y consultoría gerencial",
    },
    {
      imageURL: "/img/hero1.png",
      titulo: "MAS ALLA DEL NOMBRE",
      texto:
        "En un mercado competitivo, creemos que nuestra mayor fortaleza reside en nuestros profesionales, capaces de enfrentar los desafíos en el negocio de nuestros clientes",
    },
  ];

  return (
    <ContentContext.Provider
      value={{
        offices,
        homeHeroContent,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
}

export { ContentContext, ContentProvider };
