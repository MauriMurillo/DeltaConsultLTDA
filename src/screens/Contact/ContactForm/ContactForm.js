import React, { useContext } from "react";
import "./ContactForm.css";
import { DeltaContext } from "../../../Contexts/DeltaContext";
function ContactForm() {
  const { sendMailContact } = useContext(DeltaContext);
  return (
    <div className="contactForm">
      <div className="sectionText" style={{ borderBottom: "none" }}>
        <h2>Formulario de Consulta</h2>
        <p>Te atenderemos lo mas pronto posible</p>
      </div>
      <div className="formContainer">
        <form className="contactForm" action={sendMailContact}>
          <label className="a" for="nombre">
            NOMBRE
            <input type="name" id="nombre" />
          </label>

          <label className="b" for="mail">
            E-MAIL
            <input type="mail" id="mail" />
          </label>

          <label className="c" for="asunto">
            CIUDAD
            <input type="text" id="asunto" />
          </label>

          <label className="d" for="mensaje">
            MENSAJE
            <textarea id="mensaje" rows="4" col="50" resize="false"></textarea>
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export { ContactForm };
