import React, { useContext } from "react";
import "./Downloadable.css";
import downloadIcon from "../../../Assets/Icons/utilIcons/DownloadIcon.svg";
import { TeamContentContext } from "../../../Contexts/TeamContentContext";
function Downloadable() {
  const { files } = useContext(TeamContentContext);
  return (
    <div className="AlliesContainer wide" id="BROCHURE Y DOING BUSINESS">
      <section className="textContainer">
        <h2 className="AlliesTitle">Brochure y Doing Business</h2>
        <p className="AlliesText">Encuentra mas informacion de nosotros aqui</p>
      </section>
      <div className="cardContainer">
        {files.map((item) => {
          return (
            <a
              href={item.pdf}
              target="_blank"
              rel="noreferrer"
              className="card"
            >
              <div className="imageContainer">
                <img alt={item.title} src={item.imagen} />
              </div>
              <div className="textContainer">
                <p className="name"> {item.title}</p>
                <img className="icon" src={downloadIcon} alt="download" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export { Downloadable };
