import React, { useContext } from "react";
import "./Trust.css";
import confiar from "../../../Assets/Images/HomeImages/Person Image.png";
import confiarSmall from "../../../Assets/Images/HomeImages/Person Image (1).png";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { ContentContext } from "../../../Contexts/ContentContext";
function Trust() {
  const { screenSize } = useContext(DeltaContext);
  const { trustStatement } = useContext(ContentContext);
  return (
    <div className="trustContainer">
      <div className="imageContainer">
        <img
          alt="personal de Delta"
          src={screenSize.width > 950 ? confiar : confiarSmall}
        />
      </div>
      <div className="textContainer">
        <div className="confiarTitle">
          <p>¿Por qué confiar en nosotros?</p>
        </div>
        <div className="confiarList">
          {trustStatement.map((item) => {
            return (
              <div>
                <span></span>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Trust };
