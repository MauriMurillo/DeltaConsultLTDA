import React from "react";
import picture from "../Assets/default.png";
import historia1 from "../Assets/default.png";
import historia2 from "../Assets/default.png";
import historia3 from "../Assets/default.png";

const TeamContentContext = React.createContext();

function TeamContentProvider(props) {
  const team = [
    {
      department: "Gerencia",
      color: "",
      members: [
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
      ],
    },
    {
      department: "Auditores",
      color: "",
      members: [
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
      ],
    },
    {
      department: "Consultores",
      color: "",
      members: [
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
      ],
    },
    {
      department: "Diseno",
      color: "",
      members: [
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
      ],
    },
    {
      department: "Manejo",
      color: "",
      members: [
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
        {
          picture: picture,
          name: "James A Hetfield",
          job: "Guitarrista Principal",
          mail: "jah@dcl.com.bo",
          phone: "(+591) 720-444484",
          resume:
            "Por su distintiva voz y su puesta en escena, junto con el estilo de guitarra de Keith Richards, han sido la marca registrada de la banda durante toda su carrera. Con el tiempo, Jagger logró notoriedad en la prensa por su admitida relación con las drogas y sus polémicas relaciones personales, siendo nombrado a menudo como una figura contracultural.",
        },
      ],
    },
  ];

  const coreValuesInfo = {
    mision: {
      title: "MISION",
      description:
        "Respeto total en el compromiso con el cliente: El cumplimiento del “commitment” o compromiso con el cliente es nuestro principal valor, siempre debemos cumplir con el servicio prometido y en las fechas comprometidas. ",
    },
    vision: {
      title: "VISION",
      description:
        "Respeto total en el compromiso con el cliente: El cumplimiento del “commitment” o compromiso con el cliente es nuestro principal valor, siempre debemos cumplir con el servicio prometido y en las fechas comprometidas. ",
    },
    etica: {
      title: "ETICA",
      description:
        "Basar la actividad en un firme respeto hacia el individuo, fundamento esencial de toda organización.* Liderar el trabajo profesional en la región que hemos definido como de nuestra incumbencia* Prestar el servicio profesional con los mejores estándares de calidad.* ",
    },
    valores: {
      title: "VALORES",
      description:
        "Basar la actividad en un firme respeto hacia el individuo, fundamento esencial de toda organización.* Liderar el trabajo profesional en la región que hemos definido como de nuestra incumbencia* Prestar el servicio profesional con los mejores estándares de calidad.* ",
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
  return (
    <TeamContentContext.Provider
      value={{
        team,
        coreValuesInfo,
        historia,
      }}
    >
      {props.children}
    </TeamContentContext.Provider>
  );
}

export { TeamContentContext, TeamContentProvider };
