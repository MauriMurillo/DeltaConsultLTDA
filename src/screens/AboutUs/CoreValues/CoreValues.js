import React, { useContext } from "react";
import "./CoreValues.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { DropMenu } from "../../../components/DropMenu/DropMenu";
function CoreValues() {
  const { coreValuesInfo } = useContext(TeamContentContext);
  return (
    <div className="valuesContainer top" id="PROPOSITO">
      <section className="sectionText">
        <h2>{coreValuesInfo.proposito.title}</h2>
        <p>{coreValuesInfo.proposito.description}</p>
      </section>
      <section className="mision">
        <h3>{coreValuesInfo.mision.title}</h3>
        <p>{coreValuesInfo.mision.description}</p>
      </section>
      <section className="vision">
        <h3>{coreValuesInfo.vision.title}</h3>
        <p>{coreValuesInfo.vision.description}</p>
      </section>
      <DropMenu title="Valores y principios ">
        <div className="valuesLists">
          <section>
            <h3>{coreValuesInfo.valores.title}</h3>
            <ul>
              {coreValuesInfo.valores.lista.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>{coreValuesInfo.principios.title}</h3>
            <ul>
              {coreValuesInfo.principios.lista.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </DropMenu>
    </div>
  );
}

export { CoreValues };
