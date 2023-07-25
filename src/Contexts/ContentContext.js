import React from "react";
const ContentContext = React.createContext();

function ContentProvider(props) {
  const offices = [
    {
      ciudad: "La Paz",
      direccion: "sopocachi",
      telefono: "1234567",
      mail: "dcl@santi.com",
    },
    {
      ciudad: "SantaCruz",
      direccion: "1000 anillo",
      telefono: "09876543",
      mail: "dcl@scz.com",
    },
    {
      ciudad: "Cochabamba",
      direccion: "plaza prado",
      telefono: "7658439",
      mail: "dcl.com",
    },
  ];

  const homeHeroContent = [{
    imageURL:"/img/foto.png",
    titulo: "Hola",
    texto: "Santi",
  },
  {
    imageURL:"/img/foto.png",
    titulo: "Hola",
    texto: "Mauri",
  },
  {
    imageURL:"",
    titulo: "Hola",
    texto: "Diego",
  },
  {
    imageURL:"/img/foto.png",
    titulo: "Hola",
    texto: "Quique",
  }
  ]
  return (
    <ContentContext.Provider
      value={{
        offices,
        homeHeroContent,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
}

export { ContentContext, ContentProvider };
