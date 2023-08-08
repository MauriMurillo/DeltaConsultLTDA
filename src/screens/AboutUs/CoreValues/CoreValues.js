import React, { useContext } from "react";
import "./CoreValues.css";
import { LogoReveal } from "./LogoReveal";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
function CoreValues() {
  const { coreValuesInfo } = useContext(TeamContentContext);
  return (
    <div className="valuesContainer" style={{ marginTop: "170px" }}>
      <div className="textContainer">
        <div className="Title">UN CONCEPTO DIFERENTE</div>
        <div className="Text">Una base firme para el presente y futuro</div>
      </div>
      <LogoReveal
        principal={coreValuesInfo.mision}
        secondary={coreValuesInfo.vision}
      />
      <LogoReveal
        principal={coreValuesInfo.valores}
        secondary={coreValuesInfo.etica}
      />
    </div>
  );
}

export { CoreValues };
