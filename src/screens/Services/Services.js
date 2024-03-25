import React, { useContext } from "react";
import "./Services.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { ServicesContext } from "../../Contexts/ServicesContext";
import { DeltaContext } from "../../Contexts/DeltaContext.js";
import { NavLink, useNavigate } from "react-router-dom";

function Services() {
  const { services } = useContext(ServicesContext);
  const { selectedContent, screenSize } = useContext(DeltaContext);
  const navigate = useNavigate();
  let main = {};
  if (selectedContent !== "") {
    main = services.find(
      (item) => item.title.toLowerCase() === selectedContent.toLowerCase()
    );
  } else {
    main = services.find(
      (item) => item.title.toLowerCase() === "auditoria financiera"
    );
  }
  const index =
    screenSize.width > 1150
      ? 0
      : screenSize.width > 950
      ? 1
      : screenSize.width > 600
      ? 2
      : 3;
  return (
    <div className="servicesScreen Screen">
      <Header />
      <section className="servMainSection">
        <div className="textContainer">
          <h1>{main.title}</h1>
          <h3>Delta Consult Ofrece:</h3>
          <p>{main.ofrece[0]}</p>
          <h3>Nuestra Experiencia:</h3>
          <p>{main.experiencia[0]}</p>
        </div>
        <div className="imageContainer">
          <img alt={main.title} src={main.imagen[index]} />
        </div>
      </section>
      <section
        className="servTeamSection Bottom"
        style={{ marginTop: "100px" }}
      >
        <h2>Nuestro equipo especializado</h2>
        <div className="serviceTeamGrid">
          {main.equipo.map((item, index) => (
            <div
              key={`equipoEspecializado${index}`}
              onClick={() => {
                navigate("/Nosotros");
                setTimeout(function () {
                  const element = document.getElementById("NuestroEquipo");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "auto",
                      block: "center",
                      inline: "center",
                    });
                  }
                }, 50);
              }}
            >
              <div className="text">
                <p className="name">{item.nombre}</p>
                <p className="role">{item.rol}</p>
              </div>
              <img alt="foto" src={item.foto} />
            </div>
          ))}
        </div>
        <NavLink className="serviceLink" to={"/Contacto"}>
          <p>CONTÁCTANOS PARA MÁS INFORMACIÓN</p>
        </NavLink>
      </section>
      <Footer />
    </div>
  );
}

export { Services };
