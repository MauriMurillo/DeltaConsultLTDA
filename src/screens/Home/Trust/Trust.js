import React from "react";
import "./Trust.css";
import derecha from "../../../Assets/Logos/flecha.png";
function Trust(props) {
  const { trustStatement, trustImages } = props;

  return (
    <div className="trustContainer">
      <img
        className="animate__animated one"
        id="imageTrust"
        alt="personal de Delta"
        src={trustImages[0]}
      />
      <img
        className="animate__animated two"
        id="imageTrust"
        alt="personal de Delta"
        src={trustImages[1]}
      />
      <div className="Trust">
        <p>¿Por qué confiar en nosotros?</p>
      </div>
      {trustStatement.map((item, index) => {
        return (
          <div key={`confiar${index}`} className="Point" style={{ textAlign: "start" }}>
            <img alt="bullet point" src={derecha} />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export { Trust };
