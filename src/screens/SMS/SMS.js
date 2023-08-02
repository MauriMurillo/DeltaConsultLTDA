import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";

function SMS() {
  return (
    <div className="smsScreen">
      <Header />
      <div className="smsSection" style={{ marginTop: "120px" }}></div>
      <Footer />
    </div>
  );
}

export { SMS };
