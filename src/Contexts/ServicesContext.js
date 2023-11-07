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
      title: "AUDITORIA EXTERNA",
      descripcion: [
        "En Delta Consult, nuestra experiencia en la realización de auditorías externas es un pilar fundamental de nuestra excelencia. Con más de 47 años de experiencia en el campo, hemos perfeccionado nuestra capacidad para llevar a cabo auditorías precisas y completas que cumplen con los más altos estándares profesionales. ",

        "Nuestra comprensión profunda de las normativas locales e internacionales nos permite asegurar la conformidad y la transparencia en sus estados financieros. En Delta Consult, entendemos que la confianza en los informes financieros es esencial tanto para la toma de decisiones internas como para cumplir con los requisitos regulatorios y las expectativas de los inversores.",

        "Contamos con un equipo de auditores altamente capacitados y especializados en diversos sectores empresariales, lo que nos permite realizar una identificación precisa de los problemas y desafíos de una empresa en la auditoría externa para ofrecer a nuestros clientes una visión detallada y valiosa de su situación financiera.",
      ],
      imagen: service1,
      icon: externa,
      area: "serviceA",
    },
    {
      title: "CONSULTORIA IMPOSITIVA",
      descripcion: [
        "Consultoría Impositiva Tributaria: Reconocemos la importancia crítica de la consultoría impositiva tributaria en el contexto empresarial boliviano. Contamos con un equipo de expertos en impuestos altamente capacitados y familiarizados con el entorno tributario boliviano para garantizar que su empresa cumpla con sus obligaciones fiscales de manera eficiente y en conformidad con las normativas fiscales locales e internacionales. ",

        "Auditorías Tributarias: Nuestra experiencia en auditorías tributarias es un componente fundamental de nuestros servicios, realizamos auditorías exhaustivas para evaluar el cumplimiento de su empresa con las regulaciones fiscales y para identificar áreas de mejora y posibles riesgos. Trabajamos estrechamente con su equipo para garantizar:",

        "Optimización Fiscal: Ofrecemos soluciones y estrategias personalizadas que maximicen las oportunidades de deducción y beneficios fiscales.",

        "Cumplimiento Normativo: Estamos comprometidos a garantizar que su empresa cumpla con todas las políticas fiscales y en los plazos establecidos. ",
      ],
      imagen: service4,
      icon: impositiva,
      area: "serviceB",
    },
    {
      title: "CONSULTORIA FINANCIERA",
      descripcion: [
        "Los servicios de consultoría financiera de Delta Consult están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno financiero actual. Nuestro enfoque estratégico y personalizado en el ámbito financiero tiene un alcance en una serie de servicios:",

        "Análisis exhaustivos de Estados Financieros: Nuestro equipo de expertos proporciona una visión completa de la salud financiera de su empresa. Identificamos tendencias, áreas de mejora y oportunidades de optimización, para permitir tomar decisiones fundamentadas y estratégicas en el mercado.",

        "Valoraciones de Empresas: Nuestros especialistas en valoración utilizan metodologías rigurosas para determinar un valor preciso de la empresa. Análisis que resulta fundamental en procesos de venta, reestructuraciones empresariales y Fusiones y Adquisiciones (M & A).",

        "En procesos de M & A, brindamos asesoramiento, desde la evaluación inicial hasta la integración posterior a las transacciones.",

        "Gestión de Riesgos Financieros: Identificar, evaluar y mitigar los riesgos financieros potenciales de su empresa analizando el control interno de la empresa para una estabilidad financiera.",
      ],
      imagen: service2,
      icon: financiera,
      area: "serviceD",
    },
    {
      title: "CONSULTORIA ESTRATEGICA",
      descripcion: [
        "En Delta Consult, creemos que una estrategia sólida es esencial para el éxito empresarial a largo plazo. Nuestros consultores estratégicos trabajan en colaboración con la alta dirección de su empresa para realizar planes estratégicos donde incluyan análisis de mercado, identificación de  oportunidades y amenazas, y definir una estrategia clara y coherente.",

        "Realizamos análisis exhaustivos del mercado, identificando tendencias, oportunidades de crecimiento y posibles amenazas. A partir de ahí, nuestra misión es proporcionar insights valiosos que impulsen el crecimiento y mejoren la salud financiera de su organización ante un entorno empresarial en constante evolución.",
      ],
      imagen: service3,
      icon: estrategica,
      area: "serviceC",
    },
    {
      title: "CONSULTORIA DE SOSTENIBILIDAD",
      descripcion: [
        "En Delta Consult, abrazamos la responsabilidad social y la sostenibilidad como componentes esenciales del éxito empresarial moderno. ",

        "Nuestros servicios de consultoría de sostenibilidad ayudan a su empresa a desarrollar planes estratégicos de sostenibilidad y a cumplir con las normas y regulaciones ambientales y sociales. Evaluamos el desempeño ambiental, social y económico de su empresa y trabajamos para implementar prácticas sostenibles que beneficien a su empresa y a la sociedad en general.",
      ],
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
