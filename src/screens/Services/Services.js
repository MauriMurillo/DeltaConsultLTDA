import React, { useContext, useState } from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { ServicesContext } from "../../Contexts/ServicesContext";
import { DeltaContext } from "../../Contexts/DeltaContext.js";

function Services() {
  const { services } = useContext(ServicesContext);
  const { selectedContent, setSelectedContent } = useContext(DeltaContext);

  const display = services.filter((item) => item.title === selectedContent);
  return (
    <div className="servicesScreen Screen">
      <Header />
      <section className="MainSection">{selectedContent}</section>
      <section className="TeamSection">{display.title}</section>
      <section
        onClick={() => {
          setSelectedContent("AUDITORIA EXTERNA");

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
