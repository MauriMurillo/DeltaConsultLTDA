import React, { useContext } from "react";
import "./Team.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { DropMenu } from "../../../components/DropMenu/DropMenu";
import { Group } from "./Card";

function Team() {
  const { team } = useContext(TeamContentContext);
  return (
    <div className="teamContainer" id="NUESTRO EQUIPO">
      <section className="sectionText" id="NuestroEquipo">
        <h1>Nuestro equipo de liderazgo</h1>
        <p>Una base firme para el presente y el futuro</p>
      </section>
      <DropMenu title="Directores" notop={true}>
        <Group members={team.Directores} />
      </DropMenu>

      <DropMenu title="Gerencia" stack={true}>
        <Group members={team.Gerencia} />
      </DropMenu>

      <DropMenu title="Subgerencia y encargados">
        <Group members={team.Subgerencias} />
      </DropMenu>
    </div>
  );
}

export { Team };
