import React from "react";

const ContactContext = React.createContext();

function ContactProvider(props) {

  return (
    <ContactContext.Provider
      value={{
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactProvider };