import React, { useContext } from "react";
import "./History.css";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
import { Card } from "./Card";
function History() {
  const { historia } = useContext(TeamContentContext);
  let counter = 0;
  return (
    <div className="history">
      <section className="sectionText" id="NuestraHistoria">
        <h2>Nuestra Historia</h2>
        <p>Una base firme para el presente y el futuro</p>
      </section>
      <div className="historyContainer">
        <div className="timelineContainer">
          <div className="timeline">
            {historia.map((item) => {
              counter = 1 - counter;
              return (
                <Card event={item} direction={counter === 1 ? "up" : "down"} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { History };
