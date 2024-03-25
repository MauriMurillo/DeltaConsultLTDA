import React, { useState } from "react";
import "./ResumeFrom.css";
import download from "../../../Assets/Icons/utilIcons/DownloadIcon.svg";
function ResumeForm() {
  const [formData, setFormData] = useState({
    nombreR: "",
    mailR: "",
    telefono: "",
    ciudad: "",
    mensajeR: "",
    resume: "",
  });
  const handleOnChange = (e) => {
    console.log([e.target.id]);
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };
  const handleOnSubmit = (e) => {
    console.log(formData.resume);
    console.log("Formulario Enviado");
  };
  return (
    <div>
      <div className="sectionText" style={{ borderBottom: "none" }}>
        <h2>Trabaja con Nosotros</h2>
        <p>Envíanos tu información y se parte de la familia</p>
      </div>
      <div className="formContainer">
        <form className="resumeForm" onSubmit={handleOnSubmit}>
          <label className="a" htmlFor="nombreR">
            <input
              type="name"
              id="nombreR"
              placeholder="NOMBRE"
              autoComplete="given-name"
              onChange={handleOnChange}
            />
          </label>

          <label className="b" htmlFor="mailR">
            <input
              type="mail"
              id="mailR"
              placeholder="EMAIL"
              onChange={handleOnChange}
            />
          </label>

          <label className="c" htmlFor="telefono">
            <input
              type="tel"
              id="telefono"
              placeholder="TELEFONO"
              onChange={handleOnChange}
            />
          </label>

          <label className="d" htmlFor="ciudad">
            <input
              type="text"
              id="ciudad"
              placeholder="CIUDAD"
              onChange={handleOnChange}
            />
          </label>

          <label className="e" htmlFor="mensajeR">
            <textarea
              id="mensajeR"
              rows="3"
              col="50"
              placeholder="MENSAJE"
              onChange={handleOnChange}
            ></textarea>
          </label>

          <label className="f" htmlFor="resume">
            <p>SUBE TU CV AQUI</p>
            <img src={download} alt="subir" />
            <div id="auxContainer">
              <input
                id="resume"
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
              />
            </div>
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
