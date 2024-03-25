import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { BigOffice } from "./BigOffice.js";
import { ContactForm } from "./ContactForm/ContactForm.js";
import { ComponentContext } from "../../Contexts/ComponentContext.js";
import { ResumeForm } from "./ResumeForm/ResumeForm.js";

function Contact() {
  const { offices } = useContext(ComponentContext);
  return (
    <div className="contactScreen Screen">
      <Header />
      <div className="contactSection" style={{ marginTop: "0px" }}>
        <div className="sectionText">
          <h2>¿Necesitas ayuda?</h2>
          <p>
            Contáctese con nosotros y dispondrá de atención cordial y oportuna a
            sus necesidades
          </p>
        </div>
        {offices.map((item, index) => (
          <BigOffice content={item} key={`oficinaContacto${index}`} />
        ))}
        <ContactForm />
        <ResumeForm />
      </div>
      <Footer />
    </div>
  );
}

export { Contact };
