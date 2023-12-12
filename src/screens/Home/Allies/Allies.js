import React from "react";
import "./Allies.css";
function Allies(props) {
  const { allies } = props;
  return (
    <div className="AlliesContainer">
      <div className="textContainer">
        <h2 className="AlliesTitle">Nuestras empresas aliadas</h2>
        <div className="AlliesText">La diversificacion es la clave del exito.</div>
      </div>
      <div className="cardContainer">
        {allies.map((item) => {
          return (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="card"
            >
              <div className="imageContainer">
                <img alt={item.nombre} src={item.logo} />
              </div>
              <div className="textContainer">
                <p className="name"> {item.nombre}</p>
                <p className="desc"> {item.descripcion} </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export { Allies };
