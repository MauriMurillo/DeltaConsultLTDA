import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { Trust } from "./Trust/Trust";
import { ContentContext } from "../../Contexts/ContentContext.js";
import { Allies } from "./Allies/Allies.js";
import { HeroProvider } from "../../Contexts/HeroContext.js";

function Home() {
  const { generalStatistics, smsStatistics, allies } =
    useContext(ContentContext);

  return (
    <div className="homeScreen Screen">
      <Header />
      <HeroProvider>
        <Hero />
      </HeroProvider>
      <CompanyStats direccion={"right"} estadisticas={generalStatistics} />
      <CompanyStats direccion={"left"} estadisticas={smsStatistics} />
      <Trust />
      <Allies allies={allies} />
      <Footer />
    </div>
  );
}

export { Home };
