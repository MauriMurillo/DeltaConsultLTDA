import React from "react";

import gubernamentales from "../Assets/industrias/seccionuno/gubernamentalespc.jpg";
import gubernamentalesMini from "../Assets/industrias/seccionuno/gubernamentalespeque.jpg";
import industrial from "../Assets/industrias/seccionuno/industrialpc.jpg";
import industrialMini from "../Assets/industrias/seccionuno/industrialpeque.jpg";
import servicios from "../Assets/industrias/seccionuno/serviciospc.jpg";
import serviciosMini from "../Assets/industrias/seccionuno/serviciospeque.jpg";
import financiera from "../Assets/industrias/seccionuno/financierapc.jpg";
import financieraMini from "../Assets/industrias/seccionuno/financierapeque.jpg";
import tecnologicas from "../Assets/industrias/seccionuno/tecnologicaspc.jpg";
import tecnologicasMini from "../Assets/industrias/seccionuno/tecnologicaspeque.jpg";
import estrategicas from "../Assets/industrias/seccionuno/estrategicaspc.jpg";
import estrategicasMini from "../Assets/industrias/seccionuno/estrategicaspeque.jpg";
import turismo from "../Assets/industrias/seccionuno/turismopc.jpg";
import turismoMini from "../Assets/industrias/seccionuno/turismopeque.jpg";
import osf from "../Assets/industrias/seccionuno/osflpc.jpg";
import osfMini from "../Assets/industrias/seccionuno/osflpeque.jpg";

const IndustriesContext = React.createContext();

function IndustriesProvider(props) {
  const industries = [
    {
      title: "Gubernamentales",

      text: [
        "Delta Consult ha sido un socio de confianza para numerosas empresas gubernamentales en Bolivia durante más de cuatro décadas. Nuestra experiencia en esta área se extiende desde la realización de auditorías precisas y conformes con los requisitos gubernamentales hasta la consultoría estratégica que ayuda a mejorar la eficiencia y la transparencia en la gestión pública. ",

        "Asimismo desarrollamos auditorías especiales con el fin de luchar contra la corrupción y evitar la malversación de los recursos del Estado.",
      ],
      foto: gubernamentales,
      mini: gubernamentalesMini,
    },

    {
      title: "Industriales y Comerciales",

      text: [
        "En el ámbito industrial y comercial, Delta Consult ha demostrado su capacidad para adaptarse a las necesidades de una amplia gama de sectores. Desde la manufactura hasta la distribución, trabajamos en estrecha colaboración con empresas para optimizar sus operaciones, mejorar la rentabilidad y garantizar el cumplimiento normativo. ",

        "Nuestra experiencia abarca desde la evaluación de procesos y la gestión de riesgos hasta la implementación de estrategias de crecimiento.",
      ],
      foto: industrial,
      mini: industrialMini,
    },

    {
      title: "Empresas de Servicios",

      text: [
        "Las empresas de servicios enfrentan desafíos únicos en un entorno competitivo. Brindamos soluciones específicas para este sector, ayudando a empresas de servicios a mejorar la eficiencia operativa, la gestión de la calidad y la satisfacción del cliente. ",

        "Ya sea en el ámbito de la educación, la salud, la tecnología, turismo  o cualquier otro servicio, nuestra experiencia en consultoría y auditoría permite a las empresas de servicios elevar sus estándares y lograr resultados sobresalientes.",
      ],
      foto: servicios,
      mini: serviciosMini,
    },

    {
      title: "Financieras y de Seguros",

      text: [
        "Las empresas financieras y de seguros confían en Delta Consult para mantener la transparencia, la solidez financiera y la gestión de riesgos. Nuestros servicios abarcan desde la auditoría de estados financieros hasta la consultoría en cumplimiento normativo y gestión de riesgos. ",

        "Colaboramos con bancos, aseguradoras y otras instituciones financieras para ayudarles a mantener un ambiente de control interno adecuado con sus niveles de riesgos, la confianza de sus clientes y reguladores, además de promover un crecimiento sostenible en el sector.",
      ],
      foto: financiera,
      mini: financieraMini,
    },
    {
      title: "Tecnologicas",

      text: [
        "Las empresas tecnológicas deben aprovechar el poder de la transformación y crecer con escala y velocidad, al mismo tiempo que satisfagan las expectativas del cliente del futuro.",

        "Para abordar esto, nuestro equipo global de estrategas comerciales, tecnólogos y líderes de la industria aporta nuevas ideas y conocimientos sectoriales en el sector de la tecnología para brindar a nuestros clientes brindar valores estratégicos a largo plazo en sus servicios.",
      ],
      foto: tecnologicas,
      mini: tecnologicasMini,
    },

    {
      title: "Estrategicas",

      text: [
        "Las empresas estratégicas desempeñan un papel crucial en el desarrollo económico del país. En Delta Consult, brindamos servicios de consultoría estratégica para ayudar a estas empresas a identificar oportunidades de crecimiento, mejorar la eficiencia operativa y tomar decisiones sólidas. ",

        "Nuestra experiencia en este sector nos permite colaborar estrechamente con las empresas estratégicas de nuestro país, para apoyar a alcanzar los objetivos a largo plazo y contribuir aún más con el desarrollo económico de Bolivia.",
      ],
      foto: estrategicas,
      mini: estrategicasMini,
    },

    {
      title: "Sin Fines de Lucro",

      text: [
        "Las organizaciones sin fines de lucro desempeñan un papel fundamental en la sociedad y el respeto de sus derechos, y en Delta Consult, apoyamos su misión brindando servicios de auditoría y consultoría especializados. ",

        "Trabajamos en estrecha colaboración con estas organizaciones para garantizar la transparencia financiera, cumplir con los requisitos regulatorios y maximizar su impacto social. ",
      ],
      foto: osf,
      mini: osfMini,
    },
    {
      title: "Turismo y Gastronomia",

      text: [
        "Delta Consult trabaja con empresas para impulsar la calidad de los servicios, la eficiencia operativa y la satisfacción del cliente. Nuestros servicios van desde la evaluación de la gestión de costos hasta la implementación de estrategias de marketing. ",

        "Colaboramos con distintas empresas de este sector, hoteles, restaurantes, y empresas turísticas para ayudarles a sobresalir en un mercado competitivo y atraer a visitantes y clientes de manera efectiva.",
      ],
      foto: turismo,
      mini: turismoMini,
    },
  ];
  return (
    <IndustriesContext.Provider value={{ industries }}>
      {props.children}
    </IndustriesContext.Provider>
  );
}

export { IndustriesContext, IndustriesProvider };
