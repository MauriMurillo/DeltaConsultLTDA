import React from "react";
import Amazon from "../Assets/Icons/clientsIcons/Amazon Logo.svg";
import FedEx from "../Assets/Icons/clientsIcons/FedEx Logo.svg";
import Google from "../Assets/Icons/clientsIcons/Google Logo.svg";
import OLA from "../Assets/Icons/clientsIcons/OLA logo.svg";
import OYO from "../Assets/Icons/clientsIcons/OYO Logo.svg";
import Microsoft from "../Assets/Icons/clientsIcons/Microsoft Logo.svg";
import Airbnb from "../Assets/Icons/clientsIcons/Airbnb Logo.svg";
import Walmart from "../Assets/Icons/clientsIcons/Walmart.svg";
const ClientsContentContext = React.createContext();

function ClientsContentProvider(props) {
  const clients = [
    { name: "Amazon", logo: Amazon },
    { name: "FedEX", logo: FedEx },
    { name: "Google", logo: Google },
    { name: "OLA", logo: OLA },
    { name: "OYO", logo: OYO },
    { name: "Microsoft", logo: Microsoft },
    { name: "Airbnb", logo: Airbnb },
    { name: "Walmart", logo: Walmart },
    { name: "Amazon", logo: Amazon },
    { name: "FedEX", logo: FedEx },
    { name: "Google", logo: Google },
    { name: "OLA", logo: OLA },
    { name: "OYO", logo: OYO },
    { name: "Microsoft", logo: Microsoft },
    { name: "Airbnb", logo: Airbnb },
  ];

  return (
    <ClientsContentContext.Provider
      value={{
        clients,
      }}
    >
      {props.children}
    </ClientsContentContext.Provider>
  );
}

export { ClientsContentContext, ClientsContentProvider };
