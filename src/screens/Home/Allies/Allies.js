import React from "react";
import "./Allies.css";
function Allies(props) {
  const { allies } = props;
  return (
    <div className="AlliesContainer" style={{marginTop:"100px"}}>
      <section className="textContainer">
        <h2 className="AlliesTitle">Nuestras empresas aliadas</h2>
        <p className="AlliesText">La diversificacion es la clave del exito</p>
      </section>
      <div className="cardContainer">
        {allies.map((item, index) => {
          return (
            <a
              key={`aliada${index}`}
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
