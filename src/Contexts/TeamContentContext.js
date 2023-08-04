import React from "react";
import picture from "../Assets/Images/Rectangle 594.png";
const TeamContentContext = React.createContext();

function TeamContentProvider(props) {
  const teamMembers = [
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
  return (
    <TeamContentContext.Provider
      value={{
        teamMembers,
        coreValuesInfo
      }}
    >
      {props.children}
    </TeamContentContext.Provider>
  );
}

export { TeamContentContext, TeamContentProvider };
