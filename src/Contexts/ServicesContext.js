import React from "react";

import service1pc from "../Assets/servicios/seccionuno/auditoriafinancierapc.jpg";
import service1laptop from "../Assets/servicios/seccionuno/auditoriafinancieralaptop.jpg";
import service1tablet from "../Assets/servicios/seccionuno/auditoriafinancieratablet.jpg";
import service1celular from "../Assets/servicios/seccionuno/auditoriafinancieracelu.jpg";

import service2pc from "../Assets/servicios/seccionuno/auditoriaforensepc.jpg";
import service2laptop from "../Assets/servicios/seccionuno/auditoriaforenselaptop.jpg";
import service2tablet from "../Assets/servicios/seccionuno/auditoriaforensetablet.jpg";
import service2celular from "../Assets/servicios/seccionuno/auditoriaforensecelu.jpg";

import service3pc from "../Assets/servicios/seccionuno/auditoriaoperativapc.jpg";
import service3laptop from "../Assets/servicios/seccionuno/auditoriaoperativalaptop.jpg";
import service3tablet from "../Assets/servicios/seccionuno/auditoriaoperativatablet.jpg";
import service3celular from "../Assets/servicios/seccionuno/auditoriaoperativacelu.jpg";

import service4pc from "../Assets/servicios/seccionuno/auditoriatributariapc.jpg";
import service4laptop from "../Assets/servicios/seccionuno/auditoriatributarialaptop.jpg";
import service4tablet from "../Assets/servicios/seccionuno/auditoriatributariatablet.jpg";
import service4celular from "../Assets/servicios/seccionuno/auditoriatributariacelu.jpg";

import service5pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service5laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service5tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service5celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service6pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service6laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service6tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service6celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service7pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service7laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service7tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service7celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service8pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service8laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service8tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service8celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service9pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service9laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service9tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service9celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import service10pc from "../Assets/servicios/seccionuno/consultoriadesostenibilidadpc.jpg";
import service10laptop from "../Assets/servicios/seccionuno/consultoriadesostenibilidadlaptop.jpg";
import service10tablet from "../Assets/servicios/seccionuno/consultoriadesostenibilidadtablet.jpg";
import service10celular from "../Assets/servicios/seccionuno/consultoriadesostenibilidadcelu.jpg";

import foto from "../Assets/default.png";
const ServicesContext = React.createContext();

function ServicesProvider(props) {
  const services = [
    {
      title: "AUDITORIA FINANCIERA",
      ofrece: [
        "En Delta Consult, nuestra experiencia en la realización de auditorías externas es un pilar fundamental de nuestra excelencia. Con más de 47 años de experiencia en el campo, hemos perfeccionado nuestra capacidad para llevar a cabo auditorías precisas y completas que cumplen con los más altos estándares profesionales. ",
      ],
      experiencia: [
        "En Delta Consult, nuestra experiencia en la realización de auditorías externas es un pilar fundamental de nuestra excelencia. Con más de 47 años de experiencia en el campo, hemos perfeccionado nuestra capacidad para llevar a cabo auditorías precisas y completas que cumplen con los más altos estándares profesionales. ",
      ],
      equipo: [
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
        { foto: foto, nombre: "jeferson gutierritos", rol: "contador" },
      ],
      imagen: service1pc,
    },
  ];

  return (
    <ServicesContext.Provider
      value={{
        services,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider };
