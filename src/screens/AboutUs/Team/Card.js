import React, { useState } from "react";

function Card(props) {
  const { cardData } = props;
  const [showData, setShowData] = useState(0);
  if (showData === 1) {
    return (
      <div
        className="cardFrame reverse"
        onClick={() => setShowData(1 - showData)}
        style={{ backgroundColor: "#364660" }}
      >
        <div className="card">
          <div className="cardInfo">
            <div className="name">{cardData.name}</div>
            <div className="job">{cardData.job}</div>
            <div className="resume">{cardData.resume}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="cardFrame front"
        onClick={() => {
          setShowData(1 - showData);
          console.log("show");
        }}
      >
        <div className="card">
          <div className="imageContainer">
            <img src={cardData.picture} alt={cardData.name} />
          </div>
          <div className="cardInfo">
            <div className="name">{cardData.name}</div>
            <div className="job">{cardData.job}</div>
            <div className="mail">{cardData.mail}</div>
            <div className="phone">{cardData.phone}</div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };