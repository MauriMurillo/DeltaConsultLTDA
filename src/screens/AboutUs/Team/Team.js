import React, { useContext } from "react";
import "./Team.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { Department } from "./Department";

function Team() {
  const { team } = useContext(TeamContentContext);
  return (
    <div className="teamContainer">
      <div className="textContainer">
        <div className="Title">NUESTRO EQUIPO</div>
        <div className="Text">
          Nuestros profesionales se encuentran a su disposición para guiarlo en
          el desarrollo, control y asesoramiento de su proyecto cualquiera sea
          su objetivo.
        </div>
      </div>
      {team.map((item) => (
        <Department content={item} />
      ))}
    </div>
  );
}

export { Team };
