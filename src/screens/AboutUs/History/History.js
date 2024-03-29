import React, { useContext, useRef } from "react";
import "./History.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { Card } from "./Card";
function History() {
  const ref = useRef(null);
  const { historia } = useContext(TeamContentContext);
  return (
    <div className="history" id="NUESTRA HISTORIA">
      <section className="sectionText" id="NuestraHistoria">
        <h2>Nuestra historia</h2>
        <p>Una base firme para el presente y el futuro</p>
      </section>
      <div className="historyContainer">
        <div className="timelineContainer">
          <div className="timeline" ref={ref}>
            {historia.map((item, index) => {
              return <Card key={`historia${index}`} event={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { History };
