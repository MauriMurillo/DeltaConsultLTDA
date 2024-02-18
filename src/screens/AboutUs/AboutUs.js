import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { CoreValues } from "./CoreValues/CoreValues.js";
import { Team } from "./Team/Team.js";
import { History } from "./History/History.js";
import { LinksTo } from "../../components/LinksTo/LinksTo.js";

function AboutUs() {
  return (
    <div className="aboutUsScreen Screen">
      <Header />
      <CoreValues />
      <Team />
      <History />
      {/* <LinksTo/> */}
      <Footer />
    </div>
  );
}

export { AboutUs };
