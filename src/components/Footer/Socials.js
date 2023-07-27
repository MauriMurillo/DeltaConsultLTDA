import React from "react";
import facebook from "../../Assets/Icons/footer/logo-facebook.svg";
import linkedin from "../../Assets/Icons/footer/logo-linkedin.svg";
import whatsapp from "../../Assets/Icons/footer/logo-whatsapp.svg";
function Socials() {
  return (
    <div className="logoLeft">
      <a
        href="https://www.facebook.com/deltaconsult.bo"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook logo" />
      </a>
      <a
        href="https://www.linkedin.com/company/delta-consult-ltda/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin logo" />
      </a>
      <a href="google.com" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="whatsapp logo" />
      </a>
    </div>
  );
}

export { Socials };
