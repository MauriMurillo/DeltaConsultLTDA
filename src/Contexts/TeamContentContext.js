import React from "react";
import picture from "../Assets/Images/Rectangle 594.png";
const TeamContentContext = React.createContext();

function TeamContentProvider(props) {
  const teamMembers = [
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
    {
      picture: picture,
      name: "James A Hetfield",
      job: "Guitarrista Principal",
      mail: "jah@dcl.com.bo",
      phone: "(+591) 720-444484",
    },
  ];

  return (
    <TeamContentContext.Provider
      value={{
        teamMembers,
      }}
    >
      {props.children}
    </TeamContentContext.Provider>
  );
}

export { TeamContentContext, TeamContentProvider };
