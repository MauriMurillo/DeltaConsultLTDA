import React from "react";
import "./Home.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Hero } from "./Hero/Hero.js";
import { CompanyStats } from "./CompanyStats/CompanyStats.js";
import { ClientsContentProvider } from "../../Contexts/ClientsContentContext.js";
import thumbUp from "../../Assets/Icons/stats/thumbs up.svg";
import clients from "../../Assets/Icons/stats/people.svg";
import check from "../../Assets/Icons/stats/checkmark.svg";
import calendar from "../../Assets/Icons/stats/calendar.svg";
import { ClientInfo } from "./ClientInfo/ClientInfo.js";
function Home() {
  return (
    <div className="homeScreen">
      <Header />
      <Hero />
      <CompanyStats
        direccion={"right"}
        estadisticas={[
          {
            icon: thumbUp,
            title: "250+",
            text: "Clientes Satisfechos",
          },
          {
            icon: clients,
            title: "50+",
            text: "Profesionales",
          },
          {
            icon: check,
            title: "85+",
            text: "Consultorias realizadas",
          },
          {
            icon: calendar,
            title: "47",
            text: "Años de experiencia",
          },
        ]}
      />
      <ClientsContentProvider>
        <ClientInfo />
      </ClientsContentProvider>
      <Footer />
    </div>
  );
}

export { Home };
