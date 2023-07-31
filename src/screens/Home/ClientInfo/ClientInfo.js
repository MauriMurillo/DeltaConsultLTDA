import React, { useContext } from "react";
import { ClientsContentContext } from "../../../Contexts/ClientsContentContext";
import "./ClientInfo.css";
import { CompanyStats } from "../CompanyStats/CompanyStats";
function ClientInfo() {
  const { clients } = useContext(ClientsContentContext);
  return (
    <div className="clientSection">
      <div className="clientLogos">
        <div className="textContainer">
          <p className="clientTitle"> NUESTROS CLIENTES</p>
          <p className="clientText">
            Mas de 100 clientes confian en nuestros servicios
          </p>
        </div>
        <div className="clientsContainer">
          {clients.map((item) => {
            return (
              <div className="clientItem">
                <div className="imageContainer">
                  <img src={item.logo} alt={item.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CompanyStats
        direccion={"left"}
        estadisticas={[
          {
            title: "250+",
            text: "Clientes Satisfechos",
          },
          {
            title: "50+",
            text: "Profesionales",
          },
          {
            title: "85+",
            text: "Consultorias realizadas",
          },
          {
            title: "47",
            text: "Años de experiencia",
          },
        ]}
      />
    </div>
  );
}
export { ClientInfo };
