import React, { useState } from "react";
import downloadIcon from "../../../Assets/Icons/utilIcons/Vector (1).svg";
import "./Downloadable.css";
function Downloadable(props) {
  const { content } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="downloadContainer">
      <div className="line">
        <div className="titleDownload">{content.title}</div>
      </div>

      {showMore ? (
        <div className="content">
          <div className="descriptionDownload">{content.descripcion}</div>
          <div className="close" onClick={() => setShowMore(false)}>
            <p>CERRAR</p>
          </div>
        </div>
      ) : (
        <div className="content">
          <div className="imageContainer">
            <img src={content.imagen} alt="documentPreview" />
          </div>
          <div className="close" onClick={() => setShowMore(true)}>
            <p>VER MAS</p>
          </div>
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
      )}
    </div>
  );
}
export { Downloadable };
