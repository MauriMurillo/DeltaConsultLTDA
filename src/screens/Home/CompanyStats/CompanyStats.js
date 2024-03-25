import React from "react";
import "./CompanyStats.css";
import { Stat } from "./Stat";

function CompanyStats(props) {
  const { estadisticas, logo, tipo } = props;
  return (
    <div className={"statsContainer " + tipo}>
      <img alt="logo" src={logo} className="statLogo" />
      {estadisticas.map((item, index) => {
        return (
          <Stat
            key={`stat${index}`}
            contenido={{
              icon: item.icon,
              title: item.title,
              text: item.text,
            }}
          />
        );
      })}
      <div className="divisor" />
    </div>
  );
}
export { CompanyStats };
