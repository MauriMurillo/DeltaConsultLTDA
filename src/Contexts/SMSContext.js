import React from "react";

const SMSContext = React.createContext();

function SMSProvider(props) {

  return (
    <SMSContext.Provider
      value={{
      }}
    >
      {props.children}
    </SMSContext.Provider>
  );
}

export { SMSContext, SMSProvider };