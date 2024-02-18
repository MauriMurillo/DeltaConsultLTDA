import React from "react";
import "./Allies.css";
function LinksTo(props) {
  const { allies } = props;
  return (
    <div className="AlliesContainer">
      <section className="sectionText">
        <h2>Propósito</h2>
        <p>
          Contribuir al crecimiento sostenible de las entidades a las que
          servimos a nivel nacional e internacional.
        </p>
      </section>
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

export { LinksTo };
