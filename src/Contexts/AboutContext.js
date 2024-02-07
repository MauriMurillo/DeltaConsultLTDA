import React from "react";

const AboutContext = React.createContext();

function AboutProvider(props) {
  return (
    <AboutContext.Provider value={{}}>{props.children}</AboutContext.Provider>
  );
}

export { AboutContext, AboutProvider };
