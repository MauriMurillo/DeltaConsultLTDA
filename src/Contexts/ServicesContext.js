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

import Oscar from "../Assets/nosotros/secciondos/fotospersonalnumeradas/1. Oscar Calle Rojas_ Gerente General - Socio.jpg";
import Edgardo from "../Assets/nosotros/secciondos/fotospersonalnumeradas/2. Edgardo Vásquez Durán_ Director de Auditoría - Socio.jpg";
import Americo from "../Assets/nosotros/secciondos/fotospersonalnumeradas/7. Americo Antezana Ibañez.jpg";
import Miguel from "../Assets/nosotros/secciondos/fotospersonalnumeradas/6. Miguel Gutiérrez Salas_ Gerente de Auditoría.jpg";
import Goldie from "../Assets/nosotros/secciondos/fotospersonalnumeradas/5. Goldie Calla Ruiz_ Gerente de Auditoría.jpg";
import Maria from "../Assets/nosotros/secciondos/fotospersonalnumeradas/8. Maria Teresa Vargas.jpg";
import Renato from "../Assets/nosotros/secciondos/fotospersonalnumeradas/10. Renato Calle Ledezma_ Gerente de Consultoría.jpg";
import Ximena from "../Assets/nosotros/secciondos/fotospersonalnumeradas/3. Ximena Calle Rojas.jpg";
const ServicesContext = React.createContext();

function ServicesProvider(props) {
  const services = [
    {
      title: "Auditoria Financiera",

      ofrece: [
        "En Delta Consult, nos enorgullece liderar con excelencia y precisión en el ámbito de la auditoría financiera. Nuestro compromiso se refleja en la realización de auditorías exhaustivas que trascienden en la revisión de estados financieros. Nos especializamos en la identificación proactiva de riesgos financieros, la evaluación minuciosa de controles internos y la entrega de informes claros y detallados que brindan a nuestros clientes y usuarios externos una visión completa de la salud financiera de la empresa.",
      ],

      experiencia: [
        "Nuestro largo recorrido en la realización de auditorías externas es un pilar fundamental de nuestra excelencia. Son 48 años de experiencia, nuestro equipo de profesionales altamente capacitados ha perfeccionado nuestra capacidad para llevar a cabo auditorías financieras que cumplen con los más altos estándares profesionales. ",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
        {
          foto: Americo,
          nombre: "Américo Antezana",
          rol: "Gerente de Auditoría",
        },
        {
          foto: Miguel,
          nombre: "Miguel Gutiérrez",
          rol: "Gerente de Auditoría",
        },
        { foto: Goldie, nombre: "Goldie Calla", rol: "Gerente de Auditoría" },
        { foto: Maria, nombre: "Maria Vargas", rol: "Gerente de Auditoría" },
      ],
      imagen: [service1pc, service1laptop, service1tablet, service1celular],
    },

    {
      title: "Auditoria Operativa",

      ofrece: [
        "Nuestro servicios de auditoría operativa van más allá de la revisión superficial de procesos. Nos destacamos por realizar análisis detallados de las operaciones comerciales, evaluando la eficiencia y efectividad de los sistemas internos. Nuestro alcance abarca la identificación de áreas de mejora, la optimización de procesos y la implementación de prácticas recomendadas. Con un enfoque proactivo, colaboramos estrechamente con nuestros clientes para fortalecer sus operaciones y potenciar la eficacia.",
      ],

      experiencia: [
        "En el ámbito de la auditoría operativa, nuestro equipo cuenta con una vasta experiencia en diversas industrias, permitiéndonos ofrecer soluciones personalizadas adaptadas a las necesidades de cada cliente. Conocimientos especializados y una sólida metodología de trabajo hace que Delta Consult sea la elección ideal.",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        { foto: Goldie, nombre: "Goldie Calla", rol: "Gerente de Auditoría" },
        { foto: Renato, nombre: "Renato Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service3pc, service3laptop, service3tablet, service3celular],
    },

    {
      title: "Auditoria Forense",

      ofrece: [
        "Nuestros servicios de auditoría forense, ofrecen un enfoque meticuloso para investigar y analizar posibles irregularidades y fraudes dentro de las operaciones financieras de una empresa. Nuestro alcance comprende la recolección y preservación de evidencia, la realización de análisis financieros forenses y la emisión de informes detallados. Cualquier preocupación relacionada con la integridad financiera será abordada de manera exhaustiva y profesional.",
      ],

      experiencia: [
        "Con una trayectoria comprobada en el campo de la auditoría forense, nuestro equipo de expertos ha trabajado en casos diversos, desde la identificación de malversaciones de fondos hasta la investigación de irregularidades contables. Nuestra experiencia nos permite abordar situaciones complejas con sensibilidad y discreción.",
      ],
      equipo: [
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
        {
          foto: Miguel,
          nombre: "Miguel Gutiérrez",
          rol: "Gerente de Auditoría",
        },
      ],
      imagen: [service2pc, service2laptop, service2tablet, service2celular],
    },

    {
      title: "Auditoria tributaria",

      ofrece: [
        "En Delta Consult, ofrecemos servicios de auditoría tributaria diseñados para garantizar el cumplimiento normativo y optimizar la posición fiscal de nuestros clientes. Nuestro alcance abarca la revisión exhaustiva de registros fiscales, la identificación de posibles riesgos y la asesoría estratégica para maximizar beneficios fiscales. Nos comprometemos a ayudar a las empresas a cumplir con las obligaciones tributarias de manera eficiente y a aprovechar oportunidades legítimas para optimizar su carga fiscal.",
      ],

      experiencia: [
        "Con una sólida experiencia en auditoría tributaria, nuestro equipo de profesionales ha trabajado, adaptándonos a la complejidad de las leyes fiscales en constante cambio. Nuestra experiencia nos posiciona como asesores confiables que brindan soluciones efectivas y estratégicas para abordar los desafíos tributarios.",
      ],
      equipo: [
        {
          foto: Americo,
          nombre: "Américo Antezana",
          rol: "Gerente de Auditoría",
        },
        { foto: Maria, nombre: "Maria Vargas", rol: "Gerente de Auditoría" },
      ],
      imagen: [service4pc, service4laptop, service4tablet, service4celular],
    },

    {
      title: "Consultoria Financiera",

      ofrece: [
        "Para la consultoría financiera realizamos tres servicios. Primero, el análisis exhaustivo de estados financieros, donde nuestro equipo proporciona una visión completa de la salud financiera de su empresa. Segundo, la valoración de la empresa, en procesos de M&A, brindamos asesoramiento, desde la evaluación inicial hasta la integración posterior a las transacciones. Por último, la gestión de riesgos corporativos, donde identificamos y mitigamos los riesgos empresariales, sean inherentes.",
      ],

      experiencia: [
        "Nuestros servicios de consultoría financiera están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno de un mercado competitivo y acceso financiero actual. Nuestro enfoque en el ámbito financiero tiene un alcance amplio por los servicios detallados anteriormente.",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
        { foto: Renato, nombre: "Renato Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service7pc, service7laptop, service7tablet, service7celular],
    },

    {
      title: "Consultoria Tributaria",

      ofrece: [
        "Al reconocer la importancia crítica de la consultoría tributaria y legal en el contexto empresarial boliviano, Delta Consult cuenta con un equipo de expertos en impuestos altamente capacitados y familiarizados con el entorno tributario nacional e internacional. Nuestro equipo trabaja para garantizar que su empresa cumpla con sus obligaciones fiscales de manera eficiente y en conformidad con las normativas fiscales locales e internacionales.",
      ],

      experiencia: [
        "Nuestros servicios de consultoría financiera están diseñados para brindar a su empresa una ventaja competitiva en el complejo entorno de un mercado competitivo y acceso financiero actual. Nuestro enfoque estratégico y personalizado en el ámbito financiero tiene un alcance amplio por los servicios detallados anteriormente.",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
      ],
      imagen: [service8pc, service8laptop, service8tablet, service8celular],
    },

    {
      title: "Consultoria Estrategica",

      ofrece: [
        "En Delta Consult creemos que una estrategia empresarial sólida es esencial para el adecuado rendimiento de cualquier emprendimiento y la maximización del patrimonio a largo plazo. Nuestros consultores estratégicos trabajan en estrecha y frecuente colaboración con la alta dirección de su empresa para realizar planes estratégicos donde se incluyen análisis de mercado, identificación de oportunidades y amenazas, y se termina por definir una estrategia clara y coherente.",
      ],
      experiencia: [
        "Realizamos análisis exhaustivos del mercado, identificando tendencias, oportunidades de crecimiento y posibles amenazas. A partir de ahí, nuestra misión es proporcionar insights valiosos que impulsen el crecimiento y mejoren la salud financiera de su organización ante un entorno empresarial en constante evolución.",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
        { foto: Renato, nombre: "Renato Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service6pc, service6laptop, service6tablet, service6celular],
    },

    {
      title: "Consultoria de Sostenibilidad",

      ofrece: [
        "Nuestros servicios de consultoría de sostenibilidad ayudan a su empresa a desarrollar planes estratégicos enfocados específicamente en la sostenibilidad, lo que sirve para cumplir con las normas y regulaciones ambientales y sociales. Evaluamos el desempeño ambiental y social, y cómo estos afectan económicamente a su empresa. Trabajamos para implementar prácticas sostenibles que beneficien a su empresa y a la sociedad en general.",
      ],
      experiencia: [
        "En Delta Consult, abrazamos la responsabilidad social y la sostenibilidad como componentes esenciales del éxito empresarial contemporáneo. Este servicio empezó a ser considerado recientemente, si bien es nuevo incluso para nosotros, nos esmeramos en que la calidad sea la misma que nos caracterizó siempre.",
      ],
      equipo: [
        { foto: Oscar, nombre: "Oscar Calle", rol: "Gerente General" },
        {
          foto: Edgardo,
          nombre: "Edgardo Vásquez",
          rol: "Director de Auditoría",
        },
        { foto: Renato, nombre: "Renato Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service5pc, service5laptop, service5tablet, service5celular],
    },

    {
      title: "Outsourcing de Contabilidad",

      ofrece: [
        "Delta Consult se destaca como proveedor integral de servicios de outsourcing de contabilidad, ofreciendo un amplio espectro de soluciones para satisfacer las necesidades financieras de sus clientes. Su gama de servicios incluye asesoramiento contable, teneduría de libros, y reconstrucción contable, destacándose por un enfoque preciso y metódico, gestión de planillas salariales, proporcionando una administración eficiente de los pagos a los empleados.",
      ],

      experiencia: [
        "En Delta Consult, abrazamos la responsabilidad social y la sostenibilidad como componentes esenciales del éxito empresarial contemporáneo. Este servicio empezó a ser considerado recientemente, si bien es nuevo incluso para nosotros, nos esmeramos en que la calidad sea la misma que nos caracterizó siempre.",
      ],
      equipo: [
        { foto: Ximena, nombre: "Ximena Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service9pc, service9laptop, service9tablet, service9celular],
    },

    {
      title: "Recursos Humanos",

      ofrece: [
        "El alcance de Delta Consult en sus servicios incluyen: Medición de Clima Organizacional, Reclutamiento y Selección de Personal, Diseño de escalas salariales, Reingeniería Organizacional, Capacitación y entrenamiento, y Evaluación del desempeño. Asimismo, sobresalen en el diseño de escalas salariales, garantizando equidad y competitividad en la remuneración, y en la reingeniería organizacional, optimizando estructuras para impulsar la eficiencia y adaptabilidad.",
      ],

      experiencia: [
        "Delta Consult se destaca en el campo de la consultoría de recursos humanos. Desde la medición del Clima Organizacional, que permite evaluar y mejorar la dinámica laboral, hasta el reclutamiento y selección de personal, donde su enfoque personalizado asegura la identificación de candidatos alineados con la cultura y objetivos de la empresa.",
      ],
      equipo: [
        { foto: Ximena, nombre: "Ximena Calle", rol: "Gerente de Consultoría" },
      ],
      imagen: [service10pc, service10laptop, service10tablet, service10celular],
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
