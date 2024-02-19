import React from "react";

//Imagenes Hero PC
import PC01 from "../Assets/paginadeinicio/seccionuno/pclapaz.jpg";
import PC02 from "../Assets/paginadeinicio/seccionuno/pcsantacruz.jpg";
import PC03 from "../Assets/paginadeinicio/seccionuno/pcuyuni.jpg";
//Imagenes Hero Laptop
import LAPTOP01 from "../Assets/paginadeinicio/seccionuno/laptoplapaz.jpg";
import LAPTOP02 from "../Assets/paginadeinicio/seccionuno/laptopsantacruz.jpg";
import LAPTOP03 from "../Assets/paginadeinicio/seccionuno/laptopuyuni.jpg";
//Imagenes Hero Tablet
import TABLET02 from "../Assets/paginadeinicio/seccionuno/tabletlapaz.jpg";
import TABLET01 from "../Assets/paginadeinicio/seccionuno/tabletsantacruz.jpg";
import TABLET03 from "../Assets/paginadeinicio/seccionuno/tabletuyuni.jpg";
//Imagenes Hero Celular
import CELULAR02 from "../Assets/paginadeinicio/seccionuno/celularlapaz.jpg";
import CELULAR01 from "../Assets/paginadeinicio/seccionuno/celularsantacruz.jpg";
import CELULAR03 from "../Assets/paginadeinicio/seccionuno/celularuyuni.jpg";

import logoDelta from "../Assets/Logos/ISOTIPO DELTA BLANCO.png";
import logoSMS from "../Assets/Logos/istotipoSMS.png";
// Iconos Estadisticas Delta
import people from "../Assets/Icons/stats/people.svg";
import profesional from "../Assets/Icons/stats/profesional.svg";
import stars from "../Assets/Icons/stats/Stars.svg";

// Iconos Estadisticas SMS
import world from "../Assets/Icons/stats/World.svg";
import person from "../Assets/Icons/stats/Person.svg";
import world2 from "../Assets/Icons/stats/World2.svg";

// Imagenes Confiar en Nosotros
import trust from "../Assets/default.png";
import trust2 from "../Assets/default.png";

//Logos Empresas Aliadas
import swiss from "../Assets/paginadeinicio/seccioncuatro/pcswiss.jpg";
import business from "../Assets/paginadeinicio/seccioncuatro/laptopden.jpg";
import coworking from "../Assets/paginadeinicio/seccioncuatro/pcdcw.jpg";

const HomeContext = React.createContext();

function HomeProvider(props) {
  const heroContent = [
    {
      imagePC: PC01,
      imagePCP: LAPTOP01,
      imageTB: TABLET01,
      imageCEL: CELULAR01,
      title: "Bienvenidos a Delta Consult",
      text: "Somos una firma de servicios de auditoría y consultoría, miembro de la red SMS Latinoamérica.",
      button: "Explora",
      path: "/Servicios",
    },
    {
      imagePC: PC02,
      imagePCP: LAPTOP02,
      imageTB: TABLET02,
      imageCEL: CELULAR02,
      title: "Liderando el mercado desde 1976",
      text: "Son 48 años brindando servicios de auditoría y consultoría en Bolivia.",
      button: "Explora",
      path: "/Nosotros",
    },
    {
      imagePC: PC03,
      imagePCP: LAPTOP03,
      imageTB: TABLET03,
      imageCEL: CELULAR03,
      title: "Te ofrecemos servicios de calidad",
      text: "Son varios clientes de múltiples rubros los que confían en nuestra experiencia",
      button: "Explora",
      path: "/Industries",
    },
  ];

  const generalStatistics = {
    logo: logoDelta,
    stats: [
      {
        icon: people,
        title: "+250",
        text: "Clientes Satisfechos",
      },
      {
        icon: profesional,
        title: "+65",
        text: "Profesionales Expertos",
      },
      {
        icon: stars,
        title: "+20",
        text: "Premios y Galardones",
      },
    ],
  };

  const smsStatistics = {
    logo: logoSMS,
    stats: [
      {
        icon: world2,
        title: "+22",
        text: "Países americanos con oficinas de SMS Latinoamerica",
      },
      {
        icon: person,
        title: "+2500",
        text: "Profesionales en Red",
      },
      {
        icon: world,
        title: "+80",
        text: "Oficinas en el continente americano",
      },
    ],
  };

  const trustStatement = [
    "Contamos con el registro y vigencia en principales entes de fiscalización y control que avalan nuestra calidad",
    "Somos una firma nacional, con profesionales bolivianos con un enfoque de práctica internacional",
    "Nuestra metodología nos permite un exigente control de calidad en los productos entregados y sobre la ejecución del servicio al cliente",
    "La eficiente estructura de costos que manejamos nos permiten administrar honorarios competitivos debido a la minimización de costos ociosos e improductivos",
  ];

  const trustImages = [trust, trust2];

  const allies = [
    {
      logo: swiss,
      nombre: "SWISS CONSULT",
      descripcion: "Servicios contables de bookkeeping e impuestos.",
      url: "",
    },
    {
      logo: business,
      nombre: "DELTA ESCUELA DE NEGOCIOS",
      descripcion: "Capacitaciones empresariales y formación profesional",
      url: "",
    },
    {
      logo: coworking,
      nombre: "DELTA COWORKING",
      descripcion: "Espacios de trabajo y recreación empresarial.",
      url: "",
    },
  ];
  return (
    <HomeContext.Provider
      value={{
        heroContent,
        generalStatistics,
        smsStatistics,
        trustStatement,
        trustImages,
        allies,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
