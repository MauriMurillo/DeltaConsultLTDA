import React, { useContext } from "react";
import "./ContactForm.css";
import { DeltaContext } from "../../../Contexts/DeltaContext";
function ContactForm() {
  const { screenSize } = useContext(DeltaContext);
  return (
    <div className="contactForm">
      <div className="textContainer">
        <div className="Title">FORMULARIO DE CONSULTA</div>
        <div className="Text" style={{padding: "0px 32px"}}>
          Contáctese con nosotros y dispondrá de atención cordial y oportuna a
          sus necesidades
        </div>
      </div>
      <form>
        <label for="name">NOMBRES</label>
        <input type="text" id="name" required />
        <label for="lastName">APELLIDOS</label>
        <input type="text" id="lastName" required />
        <label for="email">CORREO ELECTRONICO</label>
        <input type="email" id="email" required />
        <div className="half">
          <label for="phone">TELEFONO/CELULAR</label>
          {screenSize.width <= 700 ? (
            <input type="tel" id="phone" required />
          ) : null}
          <label for="offices">CIUDAD/DEPARTAMENTO</label>
          {screenSize.width >= 700 ? (
            <input type="tel" id="phone" required />
          ) : null}
          <select id="offices" required>
            <option value="La Paz">La Paz</option>
            <option value="Santa Cruz de la sierra">
              Santa Cruz de la sierra
            </option>
            <option value="Coochabamba">Cochabamba</option>
          </select>
        </div>
        <label for="mensaje">MENSAJE</label>
        <textarea id="mensaje" required></textarea>
        <button type="submit" title="Hola">
          Enviar
        </button>
      </form>
    </div>
  );
}

export { ContactForm };
