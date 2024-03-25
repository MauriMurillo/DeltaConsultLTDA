import React from "react";

function Stat(props) {
  const content = props.contenido;

  return (
    <div className="stat" >
      <img src={content.icon} className="iconStat" alt="icon"  />
      <p className="titleStat"> {content.title}</p>
      <p className="textStat"> {content.text}</p>
    </div>
  );
}

export { Stat };
