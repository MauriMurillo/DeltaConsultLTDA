import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    asunto: "",
    mensaje: "",
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    console.log(FormData);
    console.log("Formulario Enviado");
  };
  return (
    <div className="contactForm">
      <div className="sectionText" style={{ borderBottom: "none" }}>
        <h2>Formulario de Consulta</h2>
        <p>Te atenderemos lo mas pronto posible</p>
      </div>
      <div className="formContainer">
        <form className="contactForm" onSubmit={handleOnSubmit}>
          <label className="a" htmlFor="nombre">
            <input
              type="name"
              id="nombre"
              placeholder="NOMBRE"
              onChange={handleOnChange}
            />
          </label>

          <label className="b" htmlFor="mail">
            <input
              type="mail"
              id="mail"
              placeholder="EMAIL"
              onChange={handleOnChange}
            />
          </label>

          <label className="c" htmlFor="asunto">
            <input
              type="text"
              id="asunto"
              placeholder="ASUNTO"
              onChange={handleOnChange}
            />
          </label>

          <label className="d" htmlFor="mensaje">
            <textarea
              id="mensaje"
              resize="false"
              placeholder="MENSAJE"
              onChange={handleOnChange}
            />
          </label>

          <div className="g submitArea">
            <input type="submit" value="ENVIAR" onChange={handleOnChange} />
          </div>
        </form>
      </div>
    </div>
  );
}

export { ContactForm };
