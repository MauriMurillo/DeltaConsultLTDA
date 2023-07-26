import React from "react";
import "./CompanyStats.css";
import { Stat } from "./Stat";
import thumbUp from "../../../Assets/Icons/stats/thumbs-up-sharp.svg"
import clients from "../../../Assets/Icons/stats/people.svg"
import check from "../../../Assets/Icons/stats/checkmark-circle-sharp.svg"
import calendar from "../../../Assets/Icons/stats/calendar.svg"

function CompanyStats() {
  return (
    <div className="statsContainer">
      <div className="blueContainer">
        <div className="whiteContainer">
          <Stat
            contenido={{
              icon: thumbUp,
              title: "250+",
              text: "Clientes Satisfechos",
            }}
          />
          <Stat
            contenido={{
              icon: clients,
              title: "50+",
              text: "Profesionales",
            }}
          />
          <Stat
            contenido={{
              icon: check,
              title: "85+",
              text: "Consultorias realizadas",
            }}
          />
          <Stat
            contenido={{
              icon: calendar,
              title: "47",
              text: "Años de experiencia",
            }}
          />
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
}
export { CompanyStats };
