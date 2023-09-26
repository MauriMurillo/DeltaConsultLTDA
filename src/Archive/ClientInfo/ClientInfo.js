import React, { useContext } from "react";
import { ClientsContentContext } from "../../Contexts/ClientsContentContext";
import "./ClientInfo.css";
function ClientInfo() {
  const { clients } = useContext(ClientsContentContext);
  return (
    <div className="clientSection">
      <div className="clientLogos">
        <div className="textContainer">
          <p className="Title">NUESTROS CLIENTES</p>
          <p className="Text">
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
    </div>
  );
}
export { ClientInfo };
