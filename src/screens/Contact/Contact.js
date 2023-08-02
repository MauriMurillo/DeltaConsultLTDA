import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";

function Contact() {
  return (
    <div className="contactScreen">
      <Header />
      <div className="contactSection" style={{ marginTop: "120px" }}></div>
      <Footer />
    </div>
  );
}

export { Contact };
