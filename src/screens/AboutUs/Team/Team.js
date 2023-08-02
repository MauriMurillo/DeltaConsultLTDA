import React, { useContext } from "react";
import "./Team.css"
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { Card } from "./Card";

function Team() {
  const { teamMembers } = useContext(TeamContentContext);
  return (
    <div className="teamContainer">
      <div className="textContainer">
        <div className="titleTeam">NUESTRO EQUIPO</div>
        <div className="textTeam">
          Nuestros profesionales se encuentran a su disposición para guiarlo en
          el desarrollo, control y asesoramiento de su proyecto cualquiera sea
          su objetivo.
        </div>
      </div>
      <div className="membersContainer">{teamMembers.map((item)=>{
        return(<Card cardData={item}/>)
      })}</div>
    </div>
  );
}

export { Team };
