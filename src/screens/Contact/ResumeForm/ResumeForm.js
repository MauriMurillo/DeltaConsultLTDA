import React, { useContext } from "react";
import "./ResumeFrom.css";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import download from "../../../Assets/Icons/utilIcons/DownloadIcon.svg";
function ResumeForm() {
  const { sendMailResume } = useContext(DeltaContext);
  return (
    <div>
      <div className="sectionText" style={{ borderBottom: "none" }}>
        <h2>Trabaja con Nosotros</h2>
        <p>Envíanos tu información y se parte de la familia</p>
      </div>
      <div className="formContainer">
        <form className="resumeForm" action={sendMailResume}>
          <label className="a" for="nombreR">
            <input
              type="name"
              id="nombreR"
              placeholder="NOMBRE"
              autoComplete="given-name"
            />
          </label>

          <label className="b" for="mailR">
            <input type="mail" id="mailR" placeholder="EMAIL" />
          </label>

          <label className="c" for="telefono">
            <input type="tel" id="telefono" placeholder="TELEFONO" />
          </label>

          <label className="d" for="ciudad">
            <input type="text" id="ciudad" placeholder="CIUDAD" />
          </label>

          <label className="e" for="mensajeR">
            <textarea
              id="mensajeR"
              rows="3"
              col="50"
              placeholder="MENSAJE"
            ></textarea>
          </label>

          <label className="f">
            <p>SUBE TU CV AQUI</p>
            <img src={download} alt="subir" />
            <input id="resume" type="file" accept=".pdf" />
          </label>
          <div className="g submitArea">
            <input type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
    </div>
  );
}

export { ResumeForm };
