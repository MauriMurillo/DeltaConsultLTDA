import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { CoreValues } from "./CoreValues/CoreValues.js";
import { Team } from "./Team/Team.js";
import { History } from "./History/History.js";
import { TeamContentProvider } from "../../Contexts/TeamContentContext.js";

function AboutUs() {
  return (
    <div className="aboutUsScreen">
      <Header />
      <TeamContentProvider>
        <CoreValues />
        <Team />
      </TeamContentProvider>
      <History />
      <Footer />
    </div>
  );
}

export { AboutUs };
