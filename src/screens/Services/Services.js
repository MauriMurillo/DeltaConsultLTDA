import React, { useContext, useState } from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { ServicesContext } from "../../Contexts/ServicesContext";
import { DeltaContext } from "../../Contexts/DeltaContext.js";

function Services() {
  const { services } = useContext(ServicesContext);
  const { selectedContent, setSelectedContent } = useContext(DeltaContext);
  let main ={ }
  if (selectedContent !== "") {
    main = services.find((item) => item.title.toLowerCase() === selectedContent.toLowerCase());
  }else{
    main = services.find((item) => item.title.toLowerCase() === "auditoria financiera");
  }
  return (
    <div className="servicesScreen Screen">
      <Header />
      <section className="MainSection">
        <div className="textContainer">
          <h1>{main.title}</h1>
          <h3>Delta Consult Ofrece:</h3>
          <p>{main.ofrece[0]}</p>
          <h3>Nuestra Experiencia:</h3>
          <p>{main.experiencia[0]}</p>
        </div>
        <div className="imageContainer">
          <img alt={main.title} src={main.imagen}/>
        </div>
      </section>
      <section className="TeamSection">
        <h2>Nuestro Equipo</h2>
        <div className="serviceTeamGrid">
          {main.equipo.map((item) => <div>
            <div className="text">
              <p>{item.nombre}</p>
              <p>{item.rol}</p>
            </div>
            <img alt="foto" src={item.foto}/>
          </div>)}
        </div>
      </section>
      <section
        onClick={() => {

        }}
      >
        {" "}
        Hola{" "}
      </section>
      <Footer />
    </div>
  );
}

export { Services };
