import React, { useContext } from "react";
import "./Team.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { DropMenu } from "../../../components/DropMenu/DropMenu";
import { Group } from "./Card";

function Team() {
  const { team } = useContext(TeamContentContext);
  return (
    <div className="teamContainer">
      <section className="sectionText" id="NuestroEquipo">
        <h1>Nuestro equipo de liderazgo</h1>
        <p>Una base firme para el presente y el futuro</p>
      </section>
      <DropMenu title="Socios y Directores" notop={true}>
        <Group/>
      </DropMenu>

      <DropMenu title="Gerencia" stack={true}>
        <Group/>
      </DropMenu>

      <DropMenu title="Subgerencia y Encargados">
        <Group/>
      </DropMenu>
    </div>
  );
}

export { Team };
