import React, { useContext } from "react";
import "./CoreValues.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { DropMenu } from "../../../components/DropMenu/DropMenu";
function CoreValues() {
  const { coreValuesInfo } = useContext(TeamContentContext);
  return (
    <div className="valuesContainer" id="Proposito">
      <section className="sectionText">
        <h2>Propósito</h2>
        <p >
          Contribuir al crecimiento sostenible de las entidades a las que
          servimos a nivel nacional e internacional.
        </p>
      </section>
      <section className="mision">
        <h3>Misión</h3>
        <p>
          Nuestra misión es proporcionar servicios profesionales de excelencia
          en auditoría y consultoría, respaldados por sólidos conocimientos y
          habilidades. Nos convertimos en el apoyo fundamental para la toma de
          decisiones gerenciales de nuestros clientes, mediante la aplicación de
          procesos innovadores y una investigación continua.{" "}
        </p>
      </section>
      <section className="vision">
        <h3>Visión</h3>
        <p>
          Nuestra visión es ser la firma líder en servicios de auditoría y
          consultoría para empresas y organizaciones, con un profundo compromiso
          hacia el desarrollo del aparato productivo, económico y humano de
          Bolivia y su completa región. 
        </p>
      </section>
      <DropMenu title="Valores y principios ">
        <section>
          <h3>Valores</h3>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>B</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
        </section>
        <section>
          <h3>Valores</h3>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>B</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
        </section>
      </DropMenu>
    </div>
  );
}

export { CoreValues };
