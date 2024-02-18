import React, { useContext, useRef } from "react";
import "./History.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { Card } from "./Card";
function History() {
  const ref = useRef(null);
  const { historia } = useContext(TeamContentContext);
  return (
    <div className="history">
      <section className="sectionText" id="NuestraHistoria">
        <h2>Nuestra Historia</h2>
        <p>Una base firme para el presente y el futuro</p>
      </section>
      <div className="historyContainer">
        <div className="timelineContainer">
          <div className="timeline" ref={ref}>
            {historia.map((item) => {
              return (
                <Card event={item}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { History };
