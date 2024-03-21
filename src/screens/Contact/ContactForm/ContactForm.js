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
            <input type="name" id="nombre" placeholder="NOMBRE" />
          </label>

          <label className="b" for="mail">
            <input type="mail" id="mail" placeholder="EMAIL" />
          </label>

          <label className="c" for="asunto">
            <input type="text" id="asunto" placeholder="ASUNTO" />
          </label>

          <label className="d" for="mensaje">
            <textarea
              id="mensaje"
              rows="4"
              col="50"
              resize="false"
              placeholder="MENSAJE"
            ></textarea>
          </label>

          <div className="g submitArea">
            <input type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
    </div>
  );
}

export { ContactForm };
