import React from "react";
import "./CompanyStats.css";
import { Stat } from "./Stat";

function CompanyStats(props) {
  const { estadisticas, direccion } = props;
  return (
    <div className={"statsContainer sC" + direccion}>
      <div className={"outerContainer bC" + direccion}>
        <div className={"whiteContainer wC" + direccion}>
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
        </div>
      </div>
    </div>
  );
}
export { CompanyStats };
