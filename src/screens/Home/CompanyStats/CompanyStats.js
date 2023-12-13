import React, { useContext } from "react";
import "./CompanyStats.css";
import { Stat } from "./Stat";
import { DeltaContext } from "../../../Contexts/DeltaContext";

function CompanyStats(props) {
  const { estadisticas, logo, tipo } = props;
  return (
    <div className={"statsContainer " + tipo}>
      <img alt="logo" src={logo} className="statLogo"/>
      {estadisticas.map((item) => {
        return (
          <Stat
            contenido={{
              icon: item.icon,
              title: item.title,
              text: item.text,
            }}
          />
        );
      })}
      <div className="divisor"/>
    </div>
  );
}
export { CompanyStats };
