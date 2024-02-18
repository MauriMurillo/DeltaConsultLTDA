import React, { useState } from "react";

function Card(props) {
  const [showData, setShowData] = useState(0);
  const { event} = props;
  return (
    <div className="card">
      <div
        className="cardContent"
        onClick={() => {
          console.log("change");
          setShowData(1 - showData);
        }}
      >
        {showData === 0 ? (
          <img src={event.image} alt="imagen" />
        ) : (
          <p>{event.content}</p>
        )}
      </div>
      <div className="year">
        <p>{event.year}</p>
      </div>
      <div className="dataPoint"></div>
    </div>
  );
}

export { Card };
