import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { BigOffice } from "./BigOffice.js";
import { ContactForm } from "./ContactForm/ContactForm.js";
import { ComponentContext } from "../../Contexts/ComponentContext.js";

function Contact() {
  const { offices } = useContext(ComponentContext);
  return (
    <div className="contactScreen Screen">
      <Header />
      <div className="contactSection" style={{ marginTop: "150px" }}>
        <div className="textContainer" style={{ marginBottom: "120px" }}>
          <div className="Title">¿NECESITAS AYUDA?</div>
          <div className="Text">
            Contáctese con nosotros y dispondrá de atención cordial y oportuna a
            sus necesidades
          </div>
          {offices.map((item) => (
            <BigOffice content={item} />
          ))}
        </div>
        <ContactForm/>
      </div>
      <Footer />
    </div>
  );
}

export { Contact };
