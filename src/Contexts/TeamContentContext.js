import React from "react";
import historia1 from "../Assets/default.png";
import historia2 from "../Assets/default.png";
import historia3 from "../Assets/default.png";

import Oscar from "../Assets/nosotros/secciondos/fotospersonalnumeradas/1. Oscar Calle Rojas_ Gerente General - Socio.jpg";
import Edgardo from "../Assets/nosotros/secciondos/fotospersonalnumeradas/2. Edgardo Vásquez Durán_ Director de Auditoría - Socio.jpg";
import Americo from "../Assets/nosotros/secciondos/fotospersonalnumeradas/7. Americo Antezana Ibañez.jpg";
import Miguel from "../Assets/nosotros/secciondos/fotospersonalnumeradas/6. Miguel Gutiérrez Salas_ Gerente de Auditoría.jpg";
import Goldie from "../Assets/nosotros/secciondos/fotospersonalnumeradas/5. Goldie Calla Ruiz_ Gerente de Auditoría.jpg";
import Maria from "../Assets/nosotros/secciondos/fotospersonalnumeradas/8. Maria Teresa Vargas.jpg";
import Renato from "../Assets/nosotros/secciondos/fotospersonalnumeradas/10. Renato Calle Ledezma_ Gerente de Consultoría.jpg";
import Ximena from "../Assets/nosotros/secciondos/fotospersonalnumeradas/3. Ximena Calle Rojas.jpg";
import Paula from "../Assets/nosotros/secciondos/fotospersonalnumeradas/4. Paula Calle Rojas.jpg";
import Nilda from "../Assets/nosotros/secciondos/fotospersonalnumeradas/9. Nilda Aruquipa Ramos_ Gerente de Impuestos.jpg";
import Cesar from "../Assets/nosotros/secciondos/fotospersonalnumeradas/11. César Portugal Villamil_ Gerente de Tecnología de Información.jpg";
import Julio from "../Assets/nosotros/secciondos/fotospersonalnumeradas/12. Julio Mendoza Ticona_ Subgerente de Auditoría.jpg";
import Jose from "../Assets/nosotros/secciondos/fotospersonalnumeradas/13. José Luis Marras Alarcón_ Subgerente de Auditoría.jpg";
import Betza from "../Assets/nosotros/secciondos/fotospersonalnumeradas/14. Betza Cantuta Huanca_ Subgerente de Auditoría.jpg";
import Vismark from "../Assets/nosotros/secciondos/fotospersonalnumeradas/15. Vismark Laruta Aguirre_ Subgerente de Auditoría.jpg";
import Zaida from "../Assets/nosotros/secciondos/fotospersonalnumeradas/16. Zaida Bolívar Cari_ Subgerente de Recursos Humanos.jpg";
import Rene from "../Assets/nosotros/secciondos/fotospersonalnumeradas/17. Rene Carpio Choque_ Subgerente Operativo - Propuestas.jpg";
import Diana from "../Assets/nosotros/secciondos/fotospersonalnumeradas/18. Diana Flores Tapia_ Subgerente Contable.jpg";
import Ignacio from "../Assets/nosotros/secciondos/fotospersonalnumeradas/19. Ignacio Sanjines Calle_ Encargado de Diseño Gráfico.jpg";
import Valentina from "../Assets/nosotros/secciondos/fotospersonalnumeradas/21. Valentina Calle Ledezma_ Encargada de Marketing.jpg";

import brochure from "../Assets/nosotros/secciontres/brochure.png";
import doingbusiness from "../Assets/nosotros/secciontres/doingbusiness.png";

import brochurepdf from "../Assets/nosotros/Broshure Delta.pdf"
import businesspdf from "../Assets/nosotros/Doing Bussines Bolivia 2022.pdf"
const TeamContentContext = React.createContext();

function TeamContentProvider(props) {
  const team = {
    Directores: [
      {
        picture: Oscar,
        name: "Oscar Calle Rojas",
        job: "Gerente General - Socio",
        resume: [
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        ],
      },
      {
        picture: Edgardo,
        name: "Edgardo Vásquez Durán",
        job: "Director de Auditoría - Socio",
        resume: [
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        ],
      },
    ],
    Gerencia: [
      {
        picture: Americo,
        name: "Américo Antezana Ibáñez",
        job: "Gerente de Auditoría",
        resume: [
          "Américo es auditor financiero, egresado de la Universidad Mayor de San Andrés. Cuenta con una experiencia profesional en el área contable y de auditoria de más de 12 años. ",

          "Es parte del equipo de Delta Consult desde la gestión de 2011, donde después de desempeñarse como auditor y destacar en el campo de la auditoría gubernamental, escaló hasta el puesto de gerente de auditoría.",

          "Américo es aficionado a la lectura.",
        ],
      },
      {
        picture: Nilda,
        name: "Nilda Aruquipa Ramos",
        job: "Gerente de Impuestos",
        resume: [
          "Nilda Marley es contadora pública, egresada de la Universidad Mayor de San Andrés. Cuenta con un diplomado en Tributación realizado en la Universidad Mayor de San Andrés. ",

          "Es parte del equipo de Delta Consult desde el año 2019, realizando auditorias tributarias enfocadas en procedimientos destinados a examinar la situación tributaria de las empresas para poder determinar el correcto y oportuno cumplimiento de sus obligaciones tributarias. Desempeña el cargo de gerente de impuestos.",

          "Cuenta con experiencia laboral referente a la contabilidad realizada en empresas comerciales y la elaboración de registros de declaraciones juradas a Impuestos Nacionales. ",

          "Nilda Marley disfruta de realizar viajes, practicar el senderismo y también leer libros.",
        ],
      },
      {
        picture: Goldie,
        name: "Goldie Calla Ruiz",
        job: "Gerente de Auditoría",
        resume: [
          "Goldie es contadora pública, egresada de la Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca, contando con el Título en Provisión Nacional de contadora pública autorizada. Es técnico en aplicaciones en torno a Windows, título que obtuvo en el Centro de Capacitación Privada en Computación. Asimismo cuenta con un reconocimiento del Colegio de Auditores o Contadores Públicos de La Paz por el destacado desempeño profesional.",

          "Es parte del equipo de Delta Consult desde el año 2006, desempeñándose como auditor financiero y actualmente bajo el cargo de gerente de auditoría. Tuvo experiencia como auditor interno en empresas en el rubro de la construcción en la ciudad de Chuquisaca. ",

          "Goldie tiene interés personal por los viajes y la fotografía.",
        ],
      },
      {
        picture: Paula,
        name: "Paula Calle Rojas",
        job: "Asesor Legal - Socia",
        resume: [
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        ],
      },
      {
        picture: Renato,
        name: "Renato Calle Ledezma",
        job: "Gerente de Consultoría",
        resume: [
          "Renato es contador público, egresado de la Universidad Católica Boliviana, cuenta con una maestría en Administración de Empresas con énfasis en las especialidades de Finanzas y Emprendimiento realizada en INCAE Business School. ",

          "Es parte del equipo de Delta Consult desde el año 2019, desempeñándose como auditor financiero. Luego de realizar su maestría en Costa Rica, retorna a la empresa para ocupar el cargo de gerente de consultoría.",

          "Cuenta con amplia experiencia laboral formada en el área de finanzas corporativas, desempeñándose como analista financiero en una empresa multinacional de banca de inversión en Costa Rica. También tuvo experiencia en una agencia de bolsa con operaciones en la Bolsa de Valores de Bolivia (BBV) y en la New York Stock Exchange (NYSE).",

          "Su perfil como consultor es formado desde trabajos en Delta Consult como también en sus proyectos personales. Mediante su empresa 'EmprendeBo', aliada de Delta Consult, brinda servicios de consultoría y programas de incubación sostenibles y tecnológicos para el emprendedor y empresario en Bolivia.",

          "Renato tiene un interés personal por el fútbol, viajar y conocer nuevas culturas.",
        ],
      },
      {
        picture: Ximena,
        name: "Ximena Calle Rojas",
        job: "Gerente de Consultoría - Socia",
        resume: [
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        ],
      },
      {
        picture: Miguel,
        name: "Miguel Gutiérrez Salas",
        job: "Gerente de Auditoría",
        resume: [
          "Miguel es auditor financiero, titulado de la Universidad Mayor de San Andrés, egresado de la Maestría en Gestión Financiera. Cuenta con múltiples diplomados; diplomado en Administración Financiera de Negocios, diplomado en Finanzas Corporativas, diplomado en Gestión de Proyectos de Inversión Privada, y diplomado en Finanzas Bancarias y Microfinanciamiento, todos efectuados en el Instituto de Investigación y Capacitación en Ciencias Administrativas de la UMSA. También tiene un diplomado en Tributación hecho en la Unidad de Postgrado de la Carrera de Contaduría Pública de la UMSA.",

          "Es parte del equipo de Delta Consult Ltda desde el año 2010, desempeñándose como auditor financiero, especializado en el análisis de estados financieros y contabilidad de pequeñas y grandes empresas del sector público, privado y organizaciones no gubernamentales. Además trabajó como profesional independiente, realizando consultorías e informes financieros. ",

          "Miguel disfruta de hacer deporte y participar en actividades artísticas y culturales.",
        ],
      },
      {
        picture: Cesar,
        name: "César Portugal Villamil",
        job: "Gerente de Tecnología de Información",
        resume: [
          "César es ingeniero de sistemas egresado de la Universidad de Aquino Bolivia. Además, cuenta con un diplomado en Desarrollo de Aplicaciones y Sitios Web en la Fundación SLIM y una certificación oficial en Developing ASP.NET MVC 4 Web Applications otorgada por Microsoft.",

          "Forma parte del equipo de Delta Consult desde mayo de 2006 desempeñándose en un inicio como encargado de sistemas y actualmente como gerente de tecnología de información. También tiene experiencia en el área de sistemas en las empresas de diversas áreas como gubernamentales y de exportación.",

          "Cesar disfruta escuchar música y actualizarse con temas de interés profesional.",
        ],
      },
      {
        picture: Maria,
        name: "Maria Teresa Vargas Viña",
        job: "Gerente de Auditoría",
        resume: [
          "Maria Teresa es contadora pública, con Título en Provisión Nacional de la Universidad Autónoma Gabriel René Moreno. Cuenta con un diplomado en Educación Superior realizado en la Universidad Autónoma Gabriel René Moreno. ",

          "Es parte del equipo de Delta Consult desde noviembre del 2005, ocupando el cargo de gerente de auditoría en la regional Santa Cruz de la Sierra. Impulsó el crecimiento de clientes al supervisar, revisar y efectuar seguimiento permanente de nuestro trabajo.",

          "Tiene experiencia laboral en finanzas corporativas y como consultor externo en finanzas personales para mujeres. Actualmente brinda asesoramiento, cursos de capacitación y talleres en finanzas personales a mujeres emprendedoras con nuevos emprendimientos. ",

          "Maria Teresa tiene una afición personal por el yoga, bailar, viajar y conocer nuevas culturas.",
        ],
      },
    ],
    Subgerencias: [
      {
        picture: Zaida,
        name: "Zaida Bolívar Cari",
        job: "Subgerente de Recursos Humanos",
        resume: [
          "CONTABILIDAD BÁSICA en el instituto Life - ASISTENTE GERENCIAL en el IBTA ",

          "ingreso a la empresa  Delta Consult Ltda. un 9/05/2007 como Recepcionista y en la actualidad se encuentra trabajando como Secretaria - experiencias fueron prácticamente en la empresa Delta Consult Ltda. ya que colaboro  diferentes áreas (administración y auditoria) - Hobbies: se parodia decir viajar.",
        ],
      },
      {
        picture: Valentina,
        name: "Valentina Calle Ledezma",
        job: "Encargada de Marketing",
        resume: [
          "Valentina es licenciada en marketing y medios digitales, egresada de la Universidad Católica Boliviana. Es parte del equipo de Delta Consult desde 2023, impulsando el desarrollo del área de marketing y recursos humanos.",

          "Tiene experiencia laboral como miembro del equipo de comunicación en organizaciones no gubernamentales y humanitarias, también fungió como community manager, creando contenidos estratégicos digitales para empresas de varios rubros en el mercado boliviano.",

          "Valentina disfruta hacer equitación y viajar, así como estudiar y conocer las nuevas tendencias en el mundo digital.",
        ],
      },
      {
        picture: Betza,
        name: "Betza Cantuta Huanca",
        job: "Subgerente de Auditoría",
        resume: [
          "Betza es contadora pública autorizada, con Título en Provisión Nacional otorgado por la Universidad Mayor de San Andrés.",

          "Es parte del equipo de Delta Consult desde la gestión 2016, desempeñándose como auditora financiera. Sus conocimientos y experiencia le han permitido desarrollar capacidades en el ámbito financiero, confiándole importantes clientes del sector público y privado, fungiendo el cargo de subgerente de auditoría. ",

          "Cuenta con amplia experiencia laboral formada en el campo de auditoría financiera, desempeñándose como auditor externo en una amplia cartera de clientes, principalmente en entidades reguladas e industriales. Desarrolló y mantuvo relaciones internas y externas, que fueron cruciales para la mejora y el éxito de la empresa. ",

          "Betza tiene afición por los viajes, conocer nuevas culturas, costumbres y formas de vida, además de un apego por la danza. Como pasatiempos ocasionales realiza deportes extremos y repostería.",
        ],
      },
      {
        picture: Rene,
        name: "Rene Carpio Choque",
        job: "Subgerente Operativo - Propuestas",
        resume: [
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        ],
      },
      {
        picture: Diana,
        name: "Diana Flores Tapia",
        job: "Subgerente Contable",
        resume: [
          "Diana es administradora de empresas, egresada de la Universidad de Aquino Bolivia, además cuenta con un diplomado en Administración del Talento Humano y Desarrollo Organizacional realizado en la misma institución académica. ",

          "Es parte de la empresa desde 2018, iniciando como asistente de contabilidad y actualmente desempeñando el cargo encargada de contabilidad desde la gestión 2021. Realizó trabajos de administración financiera y logística en campamentos departamentales e interdepartamentales en la congregación a la que asiste. ",

          "Diana realiza trabajos de liderazgo con jóvenes durante los fines de semana, generando proyectos para apoyo a adolescentes y niños; haciendo voluntariado en la Fundación Vientos de Cambio. ",
        ],
      },
      {
        picture: Vismark,
        name: "Vismark Laruta Aguirre",
        job: "Subgerente de Auditoría",
        resume: [
          "Vismarck es contador público autorizado, con Título en Provisión Nacional otorgado por la Universidad Mayor de San Andrés. Participó en múltiples cursos de especialización en la administración de activos fijos, así como cuenta con un diplomado en Finanzas Corporativas otorgado por la Universidad Franz Tamayo. Actualmente se encuentra cursando los diplomados en Derecho y Técnica Tributaria y Auditoría Gubernamental.",

          "Es parte del equipo de Delta Consult desde la gestión 2017, desempeñándose como auditor financiero y consultor. Cuenta con amplia experiencia laboral formada en el campo de auditoría financiera, desempeñándose como auditor externo en una amplia cartera de clientes, principalmente en entidades reguladas, industrias, instituciones públicas y fundaciones no lucrativas, entre otras. También desempeñó cargos de jefatura en el área de administración, talento humano y activos fijos. ",

          "Su perfil como auditor es formado desde asignaciones en Delta Consult, como también con cursos de especialización profesional. A través de la amplia cartera que mantiene la firma y la constante innovación de procedimientos y normativas, mantiene la premisa de ejecutar programas de estudios de posgrado.",

          "Vismarck tiene una afición por diferentes deportes, en especial el fútbol y la natación. Gusta de compartir tiempo en familia, viajar y ocasionalmente realizar deportes extremos.",
        ],
      },
      {
        picture: Jose,
        name: "José Luis Marras Alarcón",
        job: "Subgerente de Auditoría",
        resume: [
          "José Luis es contador público, egresado de la Universidad Mayor de San Andrés. Cuenta con un diplomado en tributación en el Instituto de Investigaciones de Ciencias Contables, Financieras y Auditoría, Unidad de Postgrado. ",

          "Es parte del equipo de Delta Consult desde el año 2014, desempeñándose como auditor financiero hasta alcanzar el puesto de subgerente de auditoría. Su experiencia laboral reside en los trabajos realizados para la empresa.",

          "José Luis tiene gusto por el voleibol, viajar y conocer nuevas personas. Gran Valor.",
        ],
      },
      {
        picture: Julio,
        name: "Julio Mendoza Ticona",
        job: "Subgerente de Auditoría",
        resume: [
          "Julio es contador público, con Título en Provisión Nacional otorgado por la Universidad Mayor de San Andrés. Forma parte del equipo de Delta Consult desde la gestión 2011, en un inicio desempeñando el cargo de auditor financiero y actualmente como subgerente de auditoría. Cuenta con experiencia en análisis de cartera en instituciones gubernamentales.",

          "Julio disfruta de realizar viajes y conocer nuevas culturas.",
        ],
      },
      {
        picture: Ignacio,
        name: "Ignacio Sanjines Calle",
        job: "Encargado de Diseño Gráfico",
        resume: [
          "Ignacio es diseñador gráfico y comunicador visual egresado de la Universidad Católica Boliviana, cuenta con un diplomado en Educación Superior realizado en la Universidad Mayor de San Andrés. Es parte del equipo de Delta Consult desde 2023, impulsando el desarrollo del área de marketing y diseño dentro de la empresa, fungiendo como encargado de diseño gráfico.",

          "Tiene experiencia laboral como consultor freelance en el desarrollo de marcas y productos gráficos para distintas entidades en diversos rubros como el textil, educativo y empresarial en general. Firmando como Gran Monín explora una faceta más artística, y lejos de su trabajo como diseñador gráfico, ha logrado reconocimiento local como ilustrador e historietista.",

          "Ignacio gusta de jugar fútbol y videojuegos, así como estudiar y producir música.",
        ],
      },
    ],
  };

  const coreValuesInfo = {
    proposito: {
      title: "Propósito",
      description:
        "Contribuir al crecimiento y éxito sostenible de las entidades a las que servimos profesionalmente a nivel nacional e internacional.",
    },
    mision: {
      title: "Misión",
      description:
        "Nuestra misión es proporcionar servicios profesionales de excelencia en auditoría y consultoría, respaldados por sólidos conocimientos y habilidades. Nos convertimos en el apoyo fundamental para la toma de decisiones gerenciales de nuestros clientes, mediante la aplicación de procesos innovadores y una investigación continua.",
    },
    vision: {
      title: "Visión",
      description:
        "Nuestra visión es ser la firma líder en servicios de auditoría y consultoría para empresas y organizaciones, con un profundo compromiso hacia el desarrollo del aparato productivo, económico y humano de Bolivia y su región.",
    },
    valores: {
      title: "Valores",
      lista: [
        "Respeto en el compromiso con el cliente",
        "El lograr y consolidar el liderazgo",
        "La aplicación de la tecnología vigente",
        "Calidad total",
        "Capacitación continua",
        "Servicio y continuidad con el cliente",
        "Confidencialidad",
        "Desarrollo de Recursos Humanos",
        "Respeto, honestidad e integridad",
      ],
    },
    principios: {
      title: "Principios",
      lista: [
        "Respeto por las personas",
        "Respeto por las políticas de nuestros clientes",
        "Compromiso con la integridad profesional",
        "Respecto por el género",
        "Solidaridad",
        "Responsabilidad social",
        "Medio Ambiente",
        "Promover el liderazgo y la excelencia",
        "Educación, capacitación y actualización",
      ],
    },
  };

  const historia = [
    { content: "Delta se funda en la paz", year: "1890", image: historia1 },
    { content: "Delta se funda en cochabamba", year: "1890", image: historia2 },
    { content: "Delta se funda en santa cruz", year: "1890", image: historia3 },
    {
      content: "Delta obtiene nueva pagina web de rusty software",
      year: "1890",
      image: historia1,
    },
    { content: "Delta se funda en la paz", year: "1890", image: historia1 },
    { content: "Delta se funda en cochabamba", year: "1890", image: historia2 },
    { content: "Delta se funda en santa cruz", year: "1890", image: historia3 },
    {
      content: "Delta obtiene nueva pagina web de rusty software",
      year: "1890",
      image: historia1,
    },
    { content: "Delta se funda en la paz", year: "1890", image: historia1 },
    { content: "Delta se funda en cochabamba", year: "1890", image: historia2 },
    { content: "Delta se funda en santa cruz", year: "1890", image: historia3 },
    {
      content: "Delta obtiene nueva pagina web de rusty software",
      year: "1890",
      image: historia1,
    },
  ];

  const files = [
    { title: "BROCHURE", imagen: brochure, pdf: brochurepdf },
    { title: "DOING BUSINESS", imagen: doingbusiness, pdf: businesspdf },
  ];
  return (
    <TeamContentContext.Provider
      value={{
        team,
        coreValuesInfo,
        historia,
        files,
      }}
    >
      {props.children}
    </TeamContentContext.Provider>
  );
}

export { TeamContentContext, TeamContentProvider };
