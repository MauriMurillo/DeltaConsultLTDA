import React from "react";
import picture from "../Assets/default.png";
import historia1 from "../Assets/default.png";
import historia2 from "../Assets/default.png";
import historia3 from "../Assets/default.png";

const TeamContentContext = React.createContext();

function TeamContentProvider(props) {
  const team = {
    Socios: [
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
    ],
    Gerencias: [
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
    ],
    Subgerencias: [
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:[
          "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
      },
      {
        picture: picture,
        name: "James A Hetfield",
        job: "Guitarrista Principal",
        mail: "jah@dcl.com.bo",
        phone: "(+591) 720-444484",
        resume:
          ["Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",]
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
        "Respeto total en el compromiso con el cliente",
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
    { title: "BROCHURE", imagen: historia1, pdf: "" },
    { title: "DOING BUSINESS", imagen: historia1, pdf: "" },
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
