import React, { useContext, useState, useEffect } from "react";
import "./Trust.css";
import { ContentContext } from "../../../Contexts/ContentContext";
import derecha from "../../../Assets/Images/Logos/blue_right.png";
function Trust() {
  // const [trustPosition, setTrustPosition] = useState(0);
  const { trustStatement, trustImages } = useContext(ContentContext);

  // const animationClassOut = "animate__fadeOut";
  // const animationClass = "animate__fadeIn";
  // useEffect(() => {
  //   const imageTrust = document.getElementById("imageTrust");
  //   if (imageTrust) {
  //     imageTrust.classList.remove(animationClass);
  //     imageTrust.classList.remove(animationClassOut);
  //     imageTrust.classList.add(animationClass);
  //   }
  //   const next = (trustPosition + 1) % trustImages.length;
  //   const move = setTimeout(() => {
  //     if (imageTrust) {
  //       imageTrust.classList.remove(animationClass);
  //       imageTrust.classList.remove(animationClassOut);
  //       imageTrust.classList.add(animationClassOut);
  //       setTimeout(() => {
  //         setTrustPosition(next);
  //       }, 801);
  //     }
  //   }, 700000);
  //   return () => clearTimeout(move);
  // }, [trustPosition, trustImages]);

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
      {trustStatement.map((item) => {
        return (
          <div className="Point" style={{ textAlign: "start" }}>
            <img alt="bullet point" src={derecha} />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export { Trust };
