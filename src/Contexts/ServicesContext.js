import React from "react";

import service1 from "../Assets/Images/serviceImage/service1.png";
import service2 from "../Assets/Images/serviceImage/service2.png";
import service3 from "../Assets/Images/serviceImage/service3.png";
import service4 from "../Assets/Images/serviceImage/service4.png";
import service5 from "../Assets/Images/serviceImage/service5.png";

import externa from "../Assets/Icons/services/externa.svg";
import estrategica from "../Assets/Icons/services/estrategica.svg";
import financiera from "../Assets/Icons/services/financiera.svg";
import impositiva from "../Assets/Icons/services/impositiva.svg";
import sostenibilidad from "../Assets/Icons/services/sostenibilidad.svg";

import linkImage1 from "../Assets/DocumentsD/imageLink.png";
import linkImage2 from "../Assets/DocumentsD/imageLink2.png";
import doingBusiness from "../Assets/DocumentsD/Doing Bussines Bolivia 2022.pdf";
import brochure from "../Assets/DocumentsD/Broshure Delta.pdf";

const ServicesContext = React.createContext();

function ServicesProvider(props) {
  const services = [
    {
      title: "Auditoria Externa",
      descripcion:
        "Realizamos auditorías para empresas de todos los sectores empresariales, identificando problemas y ofreciendo soluciones efectivas.",
      imagen: service1,
      icon: externa,
      area: "serviceA",
    },
    {
      title: "Consultoria Impositiva",
      descripcion:
        "Ofrecemos soluciones impositivas para empresas de todos los tamaños, ayudándoles a cumplir con sus obligaciones, normas y políticas fiscales de manera eficiente.",
      imagen: service4,
      icon: impositiva,
      area: "serviceB",
    },
    {
      title: "Consultoría Financiera",
      descripcion:
        "Brindamos soluciones enfocadas en ayudar a las empresas a mejorar su toma de decisiones en las gestiones financieras. También contamos con experiencia en servicios de análisis de estados financieros, valoración de empresas, asesoramiento en fusiones y adquisiciones, y gestión de riesgos financieros.",
      imagen: service2,
      icon: financiera,
      area: "serviceD",
    },
    {
      title: "Consultoria Estrategica",
      descripcion:
        "Colaboramos a las empresas a desarrollar e implementar planes estratégicos para alcanzar sus objetivos a largo plazo. Trabajamos con la alta dirección de la empresa para analizar el mercado, identificar oportunidades y amenazas, y definir una estrategia clara y coherente.",
      imagen: service3,
      icon: estrategica,
      area: "serviceC",
    },
    {
      title: "CONSULTORIA DE SOSTENIBILIDAD",
      descripcion:
        "Los servicios de consultoría financiera de Delta Consult están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno financiero actual. Nuestro enfoque estratégico y personalizado en el ámbito financiero tiene un alcance en una serie de servicios: Análisis exhaustivos de Estados Financieros: Nuestro equipo de expertos proporciona una visión completa de la salud financiera Los servicios de consultoría financiera de Delta Consult están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno financiero actual. Nuestro enfoque estratégico y personalizado en el ámbito financiero tiene un alcance en una serie de servicios: Análisis exhaustivos de Estados Financieros: Nuestro equipo de expertos proporciona una visión completa de la salud financiera Los servicios de consultoría financiera de Delta Consult están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno financiero actual. Nuestro enfoque estratégico y personalizado en el ámbito financiero tiene un alcance en una serie de servicios: Análisis exhaustivos de Estados Financieros: Nuestro equipo de expertos proporciona una visión completa de la salud financiera ",
      imagen: service5,
      icon: sostenibilidad,
      area: "serviceE",
    },
  ];

  const documents = {
    brochure: {
      title: "BROCHURE",
      pdf: brochure,
      descripcion:
        "Encuentra información detallada sobre como trabajamos para ti.",
      imagen: linkImage2,
    },
    business: {
      title: "DOING BUSINESS",
      pdf: doingBusiness,
      descripcion:
        "Ofrece un interesante panorama lleno de oportunidades y desafíos dentro de la patria.",
      imagen: linkImage1,
    },
  };
  return (
    <ServicesContext.Provider
      value={{
        services,
        documents,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider };
