import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { Trust } from "./Trust/Trust";
import { LinksTo } from "../../components/LinksTo/LinksTo.js"

import { HomeContext } from "../../Contexts/HomeContext.js";

function Home() {
  const {
    heroContent,
    generalStatistics,
    smsStatistics,
    allies,
    trustStatement,
    trustImages,
  } = useContext(HomeContext);

  return (
    <div className="homeScreen Screen">
      <Header />

      <Hero heroContent={heroContent} />
      <CompanyStats
        logo={generalStatistics.logo}
        tipo={"delta"}
        estadisticas={generalStatistics.stats}
      />
      <CompanyStats
        logo={smsStatistics.logo}
        tipo={"sms"}
        estadisticas={smsStatistics.stats}
      />
      <Trust trustStatement={trustStatement} trustImages={trustImages} />
      <LinksTo allies={allies} />

      <Footer />
    </div>
  );
}

export { Home };
