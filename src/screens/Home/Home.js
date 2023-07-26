import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { Awards } from "./Awards/Awards.js";
import "./Home.css"
function Home() {
  return (
    <div className="homeScreen">
      <Header />
      <Hero/>
      <CompanyStats/>
      <Awards/>
      <Footer />
    </div>
  );
}

export { Home };
