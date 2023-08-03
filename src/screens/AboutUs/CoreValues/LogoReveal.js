import React from "react";

function LogoReveal(props) {
  const { principal, secondary } = props;
  return (
    <div className="logoRevealContainer">
      <div className="halfLogoRight"></div>
      <div className="card first">
        <div className="cardTitle">{principal.title}</div>
        <div className="cardDescription">{principal.description}</div>
      </div>
      <div className="halfLogoLeft"></div>
      <div className="card second">
        <div className="cardTitle">{secondary.title}</div>
        <div className="cardDescription">{secondary.description}</div>
      </div>
    </div>
  );
}

export { LogoReveal };
