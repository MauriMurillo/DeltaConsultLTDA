import React from "react";
import downloadIcon from "../../../Assets/Icons/utilIcons/Vector (1).svg";
import "./Downloadable.css";
function Downloadable(props) {
  const { content, modify } = props;
  return (
    <div
      className="downloadContainer"
      style={modify ? { marginBottom: "25vh" } : { marginBottom: "100px" }}
    >
      <div className="imageContainer">
        <img src={content.imagen} alt="documentPreview" />
      </div>
      <div className="titleDownload">{content.title}</div>
      <div className="descriptionDownload">{content.descripcion}</div>
      <div className="iconContainer">
        <a
          href={content.pdf}
          download={"dcl" + content.title}
          target="_blank"
          rel="noreferrer"
        >
          <img src={downloadIcon} alt="download" />
        </a>
      </div>
    </div>
  );
}

export { Downloadable };
