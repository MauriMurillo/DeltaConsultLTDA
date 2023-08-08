import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { ContentContext } from "../../Contexts/ContentContext.js";
import { BigOffice } from "./BigOffice.js";

function Contact() {
  const { offices } = useContext(ContentContext);
  return (
    <div className="contactScreen">
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
      </div>
      <Footer />
    </div>
  );
}

export { Contact };
