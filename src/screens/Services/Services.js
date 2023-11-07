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
    <div className="servicesScreen Screen">
      <Header />
      <div className="servicesSection topTitle">
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
                  <div className="content">
                    <p>{item.title}</p>
                    <img alt="icono" src={item.icon}/>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="serviceDescription">
            <div className="line">
              <div className="ServiceTitle"> {currentService.title}</div>
            </div>
            <div className="ServiceText">{currentService.descripcion}</div>
            <div
              className="close"
              onClick={() => {
                setShowDescription(false);
              }}
            >
              <p>CERRAR</p>
            </div>
          </div>
        )}
      </div>
      <div className="files">
        <div className="textContainer">
          <p className="Title">MAS INFORMACION</p>
          <p className="Text">Conoce mas de nosotros aqui.</p>
        </div>
        <div className="filePane">
          <Downloadable content={documents.brochure} />
          <Downloadable content={documents.business} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Services };
