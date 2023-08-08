import React, { useContext } from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Downloadable } from "./Downloadable/Downloadable";
import { ServicesContext } from "../../Contexts/ServicesContext";

function Services() {
  const { documents } = useContext(ServicesContext);
  return (
    <div className="servicesScreen">
      <Header />
      <div className="servicesSection">
        <div className="textContainer">
          <p className="Title">SERVICIOS</p>
          <p className="Text">
            Ofrecemos siempre las mejores soluciones
          </p>
        </div>
        <div className="serviceGrid">
          <div className="serviceA animate__animated">
            <div>
              <p>AUDITORIA EXTERNA</p>
            </div>
          </div>
          <div className="serviceB animate__animated animate__slideInDown">
            <div>
              <p>CONSULTORIA IMPOSITIVA</p>
            </div>
          </div>
          <div className="serviceC animate__animated animate__slideInUp">
            <div>
              <p>CONSULTORIA ESTRATEGICA</p>
            </div>
          </div>
          <div className="serviceD animate__animated animate__zoomIn">
            <div>
              <p>CONSULTORIA FINANCIERA</p>
            </div>
          </div>
          <div className="serviceE animate__animated animate__slideInRight">
            <div>
              <p>CONSULTORIA DE SOSTENIBILIDAD</p>
            </div>
          </div>
        </div>
      </div>
      <Downloadable content={documents.brochure} />;
      <Downloadable content={documents.business} modify={true}/>;
      <Footer />
    </div>
  );
}

export { Services };