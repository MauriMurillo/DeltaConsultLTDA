import React, { useContext } from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { ClientsContentProvider } from "../../Contexts/ClientsContentContext.js";
import { ClientInfo } from "./ClientInfo/ClientInfo.js";
import { Trust } from "./Trust/Trust";
import { ContentContext } from "../../Contexts/ContentContext.js";

function Home() {
  const {generalStatistics, clientStatistics} = useContext(ContentContext);

  return (
    <div className="homeScreen Screen">
      <Header />
      <Hero />
      <CompanyStats
        direccion={"right"}
        estadisticas={generalStatistics}
      />
      <ClientsContentProvider>
        <ClientInfo />
        <CompanyStats direccion={"left"} estadisticas={clientStatistics} />
      </ClientsContentProvider>
      <Trust/>
      <Footer />
    </div>
  );
}

export { Home };
