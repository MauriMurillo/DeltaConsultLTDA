import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { Awards } from "./Awards/Awards.js";
import { ClientsContentProvider } from "../../Contexts/ClientsContentContext.js";

import "./Home.css";
import { ClientInfo } from "./ClientInfo/ClientInfo.js";
function Home() {
  return (
    <div className="homeScreen">
      <Header />
      <Hero />
      <CompanyStats />
      {/* <Awards /> */}
      <ClientsContentProvider>
        <ClientInfo />
      </ClientsContentProvider>
      <Footer />
    </div>
  );
}

export { Home };
