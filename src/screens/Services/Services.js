import React, { useContext, useState } from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Downloadable } from "./Downloadable/Downloadable";
import { ServicesContext } from "../../Contexts/ServicesContext";

function Services() {
  const { services, documents } = useContext(ServicesContext);
  const [showDescription, setShowDescription] = useState(false);
  const [currentService, setCurrentService] = useState({});

  return (
    <div className="servicesScreen">
      <Header />
      <div className="servicesSection">
        <div className="textContainer">
          <p className="Title">SERVICIOS</p>
          <p className="Text">Ofrecemos siempre las mejores soluciones</p>
        </div>
        {showDescription === false ? (
          <div className="serviceGrid">
            {services.map((item) => {
              return (
                <div
                  className={"animate__animated " + item.area}
                  onClick={() => {
                    setCurrentService(item);
                    setShowDescription(true);
                  }}
                >
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="serviceDescription">
            <div className="ServiceTitle"> {currentService.title}</div>
            <div className="ServiceText">{currentService.descripcion}</div>
            <div
              className="close"
              onClick={() => {
                setShowDescription(false);
              }}
            >
              Cerrar
            </div>
          </div>
        )}
        ;
      </div>
      <Downloadable content={documents.brochure} />;
      <Downloadable content={documents.business} modify={true} />;
      <Footer />
    </div>
  );
}

export { Services };
