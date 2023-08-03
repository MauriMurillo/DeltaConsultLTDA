import React, { useState } from "react";
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

  return (
    <TeamContentContext.Provider
      value={{
        teamMembers,
      }}
    >
      {props.children}
    </TeamContentContext.Provider>
  );
}

export { TeamContentContext, TeamContentProvider };
