import React from "react";

import service1pc from "../Assets/servicios/seccionuno/auditoriafinancierapc.jpg";
import service1laptop from "../Assets/servicios/seccionuno/auditoriafinancieralaptop.jpg";
import service1tablet from "../Assets/servicios/seccionuno/auditoriafinancieratablet.jpg";
import service1celular from "../Assets/servicios/seccionuno/auditoriafinancieracelu.jpg";

import service2pc from "../Assets/servicios/seccionuno/auditoriaforensepc.jpg";
import service2laptop from "../Assets/servicios/seccionuno/auditoriaforenselaptop.jpg";
import service2tablet from "../Assets/servicios/seccionuno/auditoriaforensetablet.jpg";
import service2celular from "../Assets/servicios/seccionuno/auditoriaforensecelu.jpg";

import service3pc from "../Assets/servicios/seccionuno/auditoriaoperativapc.jpg";
import service3laptop from "../Assets/servicios/seccionuno/auditoriaoperativalaptop.jpg";
import service3tablet from "../Assets/servicios/seccionuno/auditoriaoperativatablet.jpg";
import service3celular from "../Assets/servicios/seccionuno/auditoriaoperativacelu.jpg";

import service4pc from "../Assets/servicios/seccionuno/auditoriatributariapc.jpg";
import service4laptop from "../Assets/servicios/seccionuno/auditoriatributarialaptop.jpg";
import service4tablet from "../Assets/servicios/seccionuno/auditoriatributariatablet.jpg";
import service4celular from "../Assets/servicios/seccionuno/auditoriatributariacelu.jpg";

import service5pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service5laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service5tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service5celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service6pc from "../Assets/servicios/seccionuno/consultoriaestrategicapc.jpg";
import service6laptop from "../Assets/servicios/seccionuno/consultoriaestrategicalaptop.jpg";
import service6tablet from "../Assets/servicios/seccionuno/consultoriaestrategicatablet.jpg";
import service6celular from "../Assets/servicios/seccionuno/consultoriaestrategicacelu.jpg";

import service7pc from "../Assets/servicios/seccionuno/consultoriafinancierapc.jpg";
import service7laptop from "../Assets/servicios/seccionuno/consultoriafinancieralaptop.jpg";
import service7tablet from "../Assets/servicios/seccionuno/consultoriafinancieratablet.jpg";
import service7celular from "../Assets/servicios/seccionuno/consultoriafinancieracelu.jpg";

import service8pc from "../Assets/servicios/seccionuno/consultoriatributariapc.jpg";
import service8laptop from "../Assets/servicios/seccionuno/consultoriatributarialaptop.jpg";
import service8tablet from "../Assets/servicios/seccionuno/consultoriatributariatablet.jpg";
import service8celular from "../Assets/servicios/seccionuno/consultoriatributariacelu.jpg";

import service9pc from "../Assets/servicios/seccionuno/outsoursingpc.jpg";
import service9laptop from "../Assets/servicios/seccionuno/outsoursinglaptop.jpg";
import service9tablet from "../Assets/servicios/seccionuno/outsoursingtablet.jpg";
import service9celular from "../Assets/servicios/seccionuno/outsoursingcelu.jpg";

import service10pc from "../Assets/servicios/seccionuno/rhpc.jpg";
import service10laptop from "../Assets/servicios/seccionuno/rhlaptop.jpg";
import service10tablet from "../Assets/servicios/seccionuno/rhtablet.jpg";
import service10celular from "../Assets/servicios/seccionuno/rhcelu.jpg";

import foto from "../Assets/default.png";
const ServicesContext = React.createContext();

function ServicesProvider(props) {
  const services = [
    {
      title: "Auditoria Financiera",

      ofrece: [
        "En Delta Consult, nos enorgullece liderar con excelencia y precisión en el ámbito de la auditoría financiera. Nuestro compromiso se refleja en la realización de auditorías exhaustivas que trascienden en la revisión de estados financieros. Nos especializamos en la identificación proactiva de riesgos financieros, la evaluación minuciosa de controles internos y la entrega de informes claros y detallados que brindan a nuestros clientes y usuarios externos una visión completa de la salud financiera de la empresa.",
        "Ya sea para empresas emergentes o grandes corporaciones, nuestro servicio de auditoría financiera se adapta con precisión a las necesidades específicas de cada cliente. Nuestra profunda comprensión de las normativas tanto locales como internacionales garantiza la confianza y transparencia en nuestras opiniones sobre los análisis financieros, consolidándose como socios confiables que impulsan la integridad y solidez de las operaciones financieras de nuestros clientes.",
      ],

      experiencia: [
        "Nuestro largo recorrido en la realización de auditorías externas es un pilar fundamental de nuestra excelencia. Son 48 años de experiencia, nuestro equipo de profesionales altamente capacitados ha trabajado con una diversidad de industrias, perfeccionado nuestra capacidad para llevar a cabo auditorías financieras precisas y completas que cumplen con los más altos estándares profesionales. ",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service1pc,
    },

    {
      title: "Auditoria Operativa",

      ofrece: [
        "Nuestro servicios de auditoría operativa van más allá de la revisión superficial de procesos. Nos destacamos por realizar análisis detallados de las operaciones comerciales, evaluando la eficiencia y efectividad de los sistemas internos. Nuestro alcance abarca la identificación de áreas de mejora, la optimización de procesos y la implementación de prácticas recomendadas. Con un enfoque proactivo, colaboramos estrechamente con nuestros clientes para fortalecer sus operaciones y potenciar la eficacia operativa en todos los niveles de la organización.",
      ],

      experiencia: [
        "En el ámbito de la auditoría operativa, nuestro equipo cuenta con una vasta experiencia en diversas industrias, permitiéndonos ofrecer soluciones personalizadas adaptadas a las necesidades específicas de cada cliente. Hemos ayudado a empresas a identificar y abordar áreas de riesgo, mejorando la eficiencia y garantizando la alineación con sus objetivos estratégicos. La combinación de conocimientos especializados y una sólida metodología de trabajo hace que Delta Consult sea la elección ideal para aquellos que buscan una auditoría operativa integral y orientada a resultados.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service3pc,
    },

    {
      title: "Auditoria Forense",

      ofrece: [
        "Nuestros servicios de auditoría forense, ofrecen un enfoque meticuloso para investigar y analizar posibles irregularidades y fraudes dentro de las operaciones financieras de una empresa. Nuestro alcance comprende la recolección y preservación de evidencia, la realización de análisis financieros forenses y la emisión de informes detallados. Brindamos a nuestros clientes la confianza de que cualquier preocupación relacionada con la integridad financiera será abordada de manera exhaustiva y profesional.",
      ],

      experiencia: [
        "Con una trayectoria comprobada en el campo de la auditoría forense, nuestro equipo de expertos ha trabajado en casos diversos, desde la identificación de malversaciones de fondos hasta la investigación de irregularidades contables. Nuestra experiencia nos permite abordar situaciones complejas con sensibilidad y discreción, garantizando una resolución efectiva y ética de los problemas detectados.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service2pc,
    },

    {
      title: "Auditoria tributaria",

      ofrece: [
        "En Delta Consult, ofrecemos servicios de auditoría tributaria diseñados para garantizar el cumplimiento normativo y optimizar la posición fiscal de nuestros clientes. Nuestro alcance abarca la revisión exhaustiva de registros fiscales, la identificación de posibles riesgos y la asesoría estratégica para maximizar beneficios fiscales. Nos comprometemos a ayudar a las empresas a cumplir con las obligaciones tributarias de manera eficiente y a aprovechar oportunidades legítimas para optimizar su carga fiscal.",
      ],

      experiencia: [
        "Con una sólida experiencia en auditoría tributaria, nuestro equipo de profesionales ha trabajado con empresas de diversos sectores, adaptándonos a la complejidad de las leyes fiscales en constante cambio. Nuestra experiencia nos posiciona como asesores confiables que brindan soluciones efectivas y estratégicas para abordar los desafíos tributarios, asegurando el cumplimiento normativo y la eficiencia fiscal de nuestros clientes.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service4pc,
    },

    {
      title: "Consultoria Financiera",

      ofrece: [
        "En Delta Consult, nos enorgullece ofrecer una gama completa de servicios de consultoría financiera diseñados para impulsar el éxito financiero de nuestros clientes. En el ámbito de Finanzas Corporativas, proporcionamos asesoramiento estratégico que abarca desde la estructuración de capital hasta la gestión de riesgos, contribuyendo a decisiones financieras clave. Nuestra especialización en Valoración de Empresas utiliza metodologías precisas para determinar el valor real de activos y negocios, mientras que en Proyecciones Financieras brindamos análisis detallados que ofrecen una visión anticipada del rendimiento económico.",
        "Además, destacamos por nuestra competencia en la gestión de Fusiones y Adquisiciones, facilitando procesos complejos con enfoque analítico y estratégico. En el ámbito de Banca de Inversión, ofrecemos asesoramiento especializado para optimizar inversiones y maximizar el rendimiento financiero de nuestros clientes. Complementando estos servicios, nuestra consultoría aborda aspectos clave como la Gestión de Finanzas Estratégicas, el Análisis de Rentabilidad y Eficiencia, y la Estrategia de Diversificación de Portafolio. Asimismo, garantizamos el Cumplimiento Normativo y Regulatorio, asegurando que las operaciones financieras se realicen dentro de los límites legales establecidos. ",
      ],

      experiencia: [
        "Con una amplia experiencia en consultoría financiera, nuestro equipo ha llevado a cabo valoraciones precisas, proyecciones financieras detalladas y exitosas gestiones de fusiones y adquisiciones. Hemos demostrado nuestro compromiso con el éxito financiero de nuestros clientes, ofreciendo asesoramiento especializado en banca de inversión que ha generado resultados sólidos. En Delta Consult, combinamos experiencia técnica con una comprensión profunda de los mercados financieros para guiar a nuestros clientes hacia decisiones estratégicas que impulsan el crecimiento y la rentabilidad a largo plazo.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service7pc,
    },

    {
      title: "Consultoria Tributaria",

      ofrece: [
        "En Delta Consult, nos destacamos por ofrecer servicios integrales de consultoría tributaria, proporcionando asesoramiento estratégico para optimizar la carga fiscal y garantizar el cumplimiento normativo. ",
        "Nuestro alcance abarca desde la revisión y adecuación de registros fiscales hasta la identificación de oportunidades legales para maximizar beneficios fiscales. En Consultoría Tributaria, ofrecemos soluciones adaptadas a la legislación local e internacional, incluyendo la preparación de declaraciones tributarias y la gestión de situaciones tributarias complejas.",
      ],

      experiencia: [
        "Con una sólida experiencia en consultoría tributaria, nuestro equipo de profesionales ha asesorado a empresas de diversos sectores, hemos demostrado nuestra capacidad para minimizar riesgos fiscales y garantizar el cumplimiento normativo, al tiempo que identificamos oportunidades para optimizar la carga tributaria. En Delta Consult, combinamos un profundo conocimiento de la normativa fiscal con un enfoque proactivo, asegurando que nuestros clientes cuenten con estrategias tributarias sólidas y efectivas para respaldar su salud financiera y operativa a largo plazo.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service8pc,
    },

    {
      title: "Consultoria Estrategica",

      ofrece: [
        "En Delta Consult, ofrecemos servicios de consultoría estratégica diseñados para guiar a las empresas en la formulación e implementación de estrategias que impulsen el éxito a largo plazo. Nuestro alcance abarca desde la evaluación del entorno competitivo hasta la identificación de oportunidades de crecimiento, proporcionando un enfoque integral para abordar desafíos empresariales complejos. En Consultoría Estratégica, nos especializamos en la definición de objetivos claros, el diseño de modelos de negocio innovadores y la ejecución eficiente de planes estratégicos que generen ventajas competitivas sostenibles.",
      ],
      experiencia: [
        "Con una sólida trayectoria en consultoría estratégica, nuestro equipo ha colaborado exitosamente con empresas de diversos sectores. Nuestros trabajos se destacaron por diseñar e implementar estrategias que generaron ventajas competitivas en las gestiones de nuestros clientes, adaptándonos a entornos dinámicos y brindando soluciones efectivas para los desafíos empresariales actuales y futuros. En Delta Consult, combinamos análisis perspicaz y visión estratégica para el crecimiento sostenible de nuestros clientes.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service6pc,
    },

    {
      title: "Consultoria de Sostenibilidad",

      ofrece: [
        "Delta Consult ofrece servicios especializados en consultoría de sostenibilidad, abordando la creciente necesidad de integrar prácticas empresariales social y ambientalmente responsables. Nuestro alcance abarca desde la evaluación del impacto ambiental y social hasta la implementación de estrategias que fomenten la sostenibilidad a lo largo de la cadena de valor. En Consultoría de Sostenibilidad, nos enfocamos en la creación de prácticas éticas y sostenibles que no solo benefician al entorno, sino que también mejoran la resiliencia y reputación de la empresa.",
      ],
      experiencia: [
        "En Delta Consult, combinamos nuestro compromiso con la sostenibilidad con un enfoque pragmático, asegurando que nuestros clientes puedan avanzar hacia una operación más sostenible y ética en un mundo en constante cambio.",
        "Nuestro equipo ha asesorado a empresas de diversos sectores para integrar principios de responsabilidad social y ambiental en sus operaciones. Hemos liderado y demostrado nuestra capacidad para desarrollar estrategias que generan un impacto positivo, desde la gestión eficiente de recursos hasta la implementación de iniciativas de responsabilidad social corporativa.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service5pc,
    },

    {
      title: "Outsourcing de Contabilidad",

      ofrece: [
        "Mediante nuestra empresa aliada, Swiss Consult, brindamos servicios integrales de outsourcing de contabilidad, facilitando a las empresas una gestión financiera eficiente y conforme a las normativas. Nuestro alcance incluye asesoramiento contable y legal, proporcionando orientación clave en la toma de decisiones financieras. ",
        "Nos especializamos en bookkeeping o teneduría de libros, garantizando registros contables precisos y organizados. Realizamos la reconstrucción contable cuando es necesaria, ofreciendo soluciones efectivas para rectificar registros y mantener la integridad financiera. También gestionamos planillas salariales, asegurando un manejo preciso y puntual de los aspectos relacionados con los recursos humanos.",
      ],

      experiencia: [
        "Con una sólida experiencia en outsourcing de contabilidad, hemos colaborado con empresas de diversos sectores. Desde la preparación de Estados Financieros (EEFF) hasta la valoración de activos fijos, nuestro equipo ofrece soluciones que van más allá de la simple gestión contable. Nos destacamos por la precisión en las declaraciones tributarias, asegurando el cumplimiento normativo y la optimización fiscal. ",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service9pc,
    },

    {
      title: "Recursos Humanos",

      ofrece: [
        "Delta Consult también ofrece servicios en recursos humanos para empresas. Buscamos aquellas aptitudes que tu negocio necesita para crecer, abordando aspectos cruciales para el desarrollo y optimización del capital humano en las empresas. ",
        "Nuestra oferta incluye la Medición de Clima Organizacional, permitiendo evaluar y mejorar la dinámica laboral para impulsar la productividad y satisfacción de los empleados. Nos destacamos en el Reclutamiento y Selección de Personal, colaborando estrechamente con las empresas para identificar candidatos idóneos que se alineen con sus valores y necesidades.",
      ],

      experiencia: [
        "Hemos liderado proyectos exitosos en el Diseño de Escalas Salariales, asegurando equidad y competitividad. En Reingeniería Organizacional, hemos optimizado estructuras y procesos internos, contribuyendo al crecimiento sostenible de las empresas. Nuestra experiencia también se destaca en el ámbito de Capacitación y Entrenamiento, ofreciendo programas personalizados que fortalecen habilidades esenciales. Además, en la Evaluación del Desempeño, implementamos procesos efectivos que proporcionan una evaluación precisa y fomentan el desarrollo continuo del personal. ",
        "En Delta Consult, nuestra experiencia se traduce en soluciones integrales que potencian el capital humano y mejoran la eficiencia operativa de las empresas.",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service10pc,
    },
  ];

  return (
    <ServicesContext.Provider
      value={{
        services,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider };
