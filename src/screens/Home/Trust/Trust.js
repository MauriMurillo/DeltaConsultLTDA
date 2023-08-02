import React, { useContext } from "react";
import "./Trust.css";
import confiar from "../../../Assets/Images/Person Image.png";
import confiarSmall from "../../../Assets/Images/Person Image (1).png"
import { DeltaContext } from "../../../Contexts/DeltaContext";
function Trust() {
  const {screenSize} = useContext(DeltaContext);
  return (
    <div className="trustContainer">
      <div className="imageContainer">
        <img alt="personal de Delta" src={screenSize.width > 950 ? confiar : confiarSmall} />
      </div>
      <div className="textContainer">
        <div className="confiarTitle">
          <p>Por qué confiar en nosotros?</p>
        </div>
        <div className="confiarList">
          <div>
            <span></span>
            Contamos con el registro y vigencia en principales entes de
            fiscalización y control que avalan nuestra calidad
          </div>
          <div>
            <span></span>
            Somos una firma nacional, con profesionales bolivianos con un
            enfoque de práctica internacional
          </div>
          <div>
            <span></span>
            Nuestra metodología nos permite un exigente control de calidad en
            los productos entregados y sobre la ejecución del servicio al
            cliente
          </div>
          <div>
            <span></span>
            La eficiente estructura de costos que manejamos nos permiten
            administrar honorarios competitivos debido a la minimización de
            costos ociosos e improductivos
          </div>
        </div>
      </div>
    </div>
  );
}

export { Trust };
