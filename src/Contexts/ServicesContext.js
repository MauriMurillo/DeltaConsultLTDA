import React from "react";
import service1 from "../Assets/Images/serviceImage/service1.png";
import service2 from "../Assets/Images/serviceImage/service2.png";
import service3 from "../Assets/Images/serviceImage/service3.png";
import service4 from "../Assets/Images/serviceImage/service4.png";
import service5 from "../Assets/Images/serviceImage/service5.png";
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
      area: "serviceA",
    },
    {
      title: "Consultoria Impositiva",
      descripcion:
        "Ofrecemos soluciones impositivas para empresas de todos los tamaños, ayudándoles a cumplir con sus obligaciones, normas y políticas fiscales de manera eficiente.",
      imagen: service4,
      area: "serviceB",
    },
    {
      title: "Consultoria Estrategica",
      descripcion:
        "Colaboramos a las empresas a desarrollar e implementar planes estratégicos para alcanzar sus objetivos a largo plazo. Trabajamos con la alta dirección de la empresa para analizar el mercado, identificar oportunidades y amenazas, y definir una estrategia clara y coherente.",
      imagen: service3,
      area: "serviceC",
    },
    {
      title: "Consultoría Financiera",
      descripcion:
        "Brindamos soluciones enfocadas en ayudar a las empresas a mejorar su toma de decisiones en las gestiones financieras. También contamos con experiencia en servicios de análisis de estados financieros, valoración de empresas, asesoramiento en fusiones y adquisiciones, y gestión de riesgos financieros.",
      imagen: service2,
      area: "serviceD",
    },
    {
      title: "Consultoria de Sostenibilidad",
      descripcion:
        "Ayudamos a las empresas a desarrollar planes de sostenibilidad y responsabilidad social, asegurándonos de que cumplan con las normas y regulaciones ambientales y sociales. Estas consultorías ayudan a las empresas a evaluar su desempeño ambiental, social y económico.",
      imagen: service5,
      area: "serviceE",
    },
  ];

  const documents = {
    brochure: {
      title: "Brochure Delta",
      pdf: brochure,
      descripcion:
        "Doing Business Bolivia ofrece un interesante panorama lleno de oportunidades y desafíos. Su ubicación geográfica central en América del Sur brinda acceso a mercados vecinos, mientras que su rica diversidad cultural y recursos naturales presentan posibilidades en sectores como la minería, agricultura y turismo. Sin embargo, es fundamental comprender el entorno empresarial, que puede ser influenciado por factores como la burocracia, la infraestructura en desarrollo y la volatilidad política.",
      imagen: linkImage2,
    },
    business: {
      title: "Boing Business Bolivia",
      pdf: doingBusiness,
      descripcion:
        "Doing Business Bolivia ofrece un interesante panorama lleno de oportunidades y desafíos. Su ubicación geográfica central en América del Sur brinda acceso a mercados vecinos, mientras que su rica diversidad cultural y recursos naturales presentan posibilidades en sectores como la minería, agricultura y turismo. Sin embargo, es fundamental comprender el entorno empresarial, que puede ser influenciado por factores como la burocracia, la infraestructura en desarrollo y la volatilidad política.",
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
