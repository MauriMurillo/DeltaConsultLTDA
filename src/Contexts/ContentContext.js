import React from "react";
import hero1 from "../Assets/Images/HomeImages/hero1.png";
import hero2 from "../Assets/Images/HomeImages/hero2.png";
import hero3 from "../Assets/Images/HomeImages/hero3.png";
import people from "../Assets/Icons/stats/people.svg";
import profesional from "../Assets/Icons/stats/profesional.svg";
import bars from "../Assets/Icons/stats/Bars.svg";
import stars from "../Assets/Icons/stats/Stars.svg";

import world from "../Assets/Icons/stats/World.svg";
import person from "../Assets/Icons/stats/Person.svg"
import tool from "../Assets/Icons/stats/Tool.svg"
import up from "../Assets/Icons/stats/Up.svg"

const ContentContext = React.createContext();

function ContentProvider(props) {
  const offices = [
    {
      ciudad: "LA PAZ",
      direccion: "C. Méndez Arcos #831 - Edif. Delta - Z. Sopocachi",
      telefono: "(+591-2) 2427222",
      mail: "deltaconsult@dcl.com.bo",
      mapLink: "https://goo.gl/maps/5Y46ZDYoUQtQL92x5",
      embed: (
        <iframe
          title="Delta La Paz"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15300.869291984887!2d-68.1305497!3d-16.5151226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20886e3b40bd%3A0x33c60274bab7a6!2sDelta%20Consult%20Ltda.!5e0!3m2!1ses-419!2sbo!4v1691480311681!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      ciudad: "SANTA CRUZ",
      direccion: "C. Fermin Peralta #110 - Edif. Delta - Z. EQUIPETROL",
      telefono: "(+591-3) 3454756",
      mail: "deltascz@dcl.com.bo",
      mapLink: "https://goo.gl/maps/ZBkzaSGN7K3RDGkf9",
      embed: (
        <iframe
          title="Delta Santa Cruz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.6720228623267!2d-63.1968408!3d-17.7600864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7f3fa740101%3A0xa8f15c0904502987!2sDelta%20Consult%20Ltda.!5e0!3m2!1ses-419!2sbo!4v1691480277691!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      ciudad: "COCHABAMBA",
      direccion:
        "Calle Los Molles, MZ.035 Edificio Delta PB Nº847 - Zona Cala Cala",
      telefono: "(591)-72044457",
      mail: "zvillca@dcl.com.bo",
      mapLink: "https://goo.gl/maps/NUT77m3tGa78EmKr9",
      embed: (
        <iframe
          title="Delta Cochabamba"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9339042687793!2d-66.17080580000001!3d-17.3669132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3753b4acb8d53%3A0xed5f6ce2391c54d8!2sEdificio%20delta%20consult%20ltda!5e0!3m2!1ses-419!2sbo!4v1691480171701!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
  ];

  const homeHeroContent = [
    {
      imageURL: hero1,
      titulo: "Descubre los beneficios de ser miembro de",
    },
    {
      imageURL: hero2,
      titulo: "Nuestra representación internacional es",
    },
    {
      imageURL: hero3,
      titulo: "Delta Consult representa a Bolivia en",
    },
  ];

  const generalStatistics = [
    {
      icon: people,
      title: "250+",
      text: "Clientes Satisfechos",
    },
    {
      icon: profesional,
      title: "50+",
      text: "Profesionales Expertos",
    },
    {
      icon: bars,
      title: "3",
      text: "Oficinas en Toda Bolivia",
    },
    {
      icon: stars,
      title: "20+",
      text: "Premios y Reconocimientos",
    },
  ];

  const smsStatistics = [
    {
      icon: world,
      title: "120+",
      text: "Redes Internacionales",
    },
    {
      icon: person,
      title: "1500+",
      text: "Profesionales en Red",
    },
    {
      icon: tool,
      title: "1700+",
      text: "Clientes que Apoyamos",
    },
    {
      icon: up,
      title: "4+",
      text: "Gemas del infinito",
    },
  ];

  const trustStatement = [
    "Contamos con el registro y vigencia en principales entes de fiscalización y control que avalan nuestra calidad",
    "Somos una firma nacional, con profesionales bolivianos con un enfoque de práctica internacional",
    "Nuestra metodología nos permite un exigente control de calidad en los productos entregados y sobre la ejecución del servicio al cliente",
    "La eficiente estructura de costos que manejamos nos permiten administrar honorarios competitivos debido a la minimización de costos ociosos e improductivos",
  ];

  return (
    <ContentContext.Provider
      value={{
        offices,
        homeHeroContent,
        generalStatistics,
        smsStatistics,
        trustStatement,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
}

export { ContentContext, ContentProvider };
