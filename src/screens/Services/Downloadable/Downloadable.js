import React from "react";
import downloadIcon from "../../../Assets/Icons/utilIcons/download.svg";
import "./Downloadable.css";
function Downloadable(props) {
  const { content } = props;
  return (
    <div className="downloadContainer">
      <div className="imageContainer">
        <img src={content.imagen} alt="documentPreview" />
      </div>
      <div className="content">
        <div className="titleDownload">{content.title}</div>
        <div className="descriptionDownload">{content.descripcion}</div>
        <a
          className="iconContainer"
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
