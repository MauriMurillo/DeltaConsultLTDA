import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { CoreValues } from "./CoreValues/CoreValues.js";
import { Team } from "./Team/Team.js";
import { History } from "./History/History.js";
import { Downloadable } from "./Downloadable/Downloadable.js";

function AboutUs() {
  return (
    <div className="aboutUsScreen Screen">
      <Header />
      <CoreValues />
      <Team />
      <History />
      <Downloadable/>
      <Footer />
    </div>
  );
}

export { AboutUs };
