import React from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";

function Services() {
  return (
    <div className="servicesScreen">
      <Header />
      <div className="servicesSection">
        <div className="textContainer">
          <p className="titleServices">SERVICIOS</p>
          <p className="textServices">
            Ofrecemos siempre las mejores soluciones
          </p>
        </div>
        <div className="serviceGrid">
          <div className="serviceA">
            <div>
              <p>AUDITORIA EXTERNA</p>
            </div>
          </div>
          <div className="serviceB">
            <div>
              <p>CONSULTORIA IMPOSITIVA</p>
            </div>
          </div>
          <div className="serviceC">
            <div>
              <p>CONSULTORIA ESTRATEGICA</p>
            </div>
          </div>
          <div className="serviceD">
            <div>
              <p>CONSULTORIA FINANCIERA</p>
            </div>
          </div>
          <div className="serviceE">
            <div>
              <p>CONSULTORIA DE SOSTENIBILIDAD</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Services };
