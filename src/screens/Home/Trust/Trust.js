import React, { useContext, useState, useEffect } from "react";
import "./Trust.css";
import { ContentContext } from "../../../Contexts/ContentContext";
function Trust() {
  const [trustPosition, setTrustPosition] = useState(0);
  const { trustStatement, trustImages } = useContext(ContentContext);

  const animationClassOut = "animate__fadeOut";
  const animationClass = "animate__fadeIn";
  useEffect(() => {
    const imageTrust = document.getElementById("imageTrust");
    if (imageTrust) {
        imageTrust.classList.remove(animationClass);
        imageTrust.classList.remove(animationClassOut);
        imageTrust.classList.add(animationClass);
    }
    const next = (trustPosition + 1) % trustImages.length;
    const move = setTimeout(() => {
      if (imageTrust) {
        imageTrust.classList.remove(animationClass);
        imageTrust.classList.remove(animationClassOut);
        imageTrust.classList.add(animationClassOut);
        setTimeout(() => {
          setTrustPosition(next);
        }, 801);
      }
    }, 7000);
    return () => clearTimeout(move);
  }, [trustPosition, trustImages]);

  return (
    <div className="trustContainer">
      <div className="imageContainer">
        <img
          className="animate__animated"
          id="imageTrust"
          alt="personal de Delta"
          src={trustImages[trustPosition]}
        />
      </div>
      <div className="textContainer">
        <div className="Title">
          <p>¿Por qué confiar en nosotros?</p>
        </div>
        <div className="confiarList">
          {trustStatement.map((item) => {
            return (
              <div className="Text" style={{textAlign: "start"}}>
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
