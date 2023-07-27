import React, { useContext } from "react";
import "./Footer.css";
import { Office } from "./Office";
import { Contact } from "./Contact";
import { Rights } from "./Rights";
import { ContentContext } from "../../Contexts/ContentContext";
import logo from "../../Assets/Images/ISOTIPO DELTA BLANCO.png";
import { Socials } from "./Socials";
import { DeltaContext } from "../../Contexts/DeltaContext";
function Footer() {
  const { offices } = useContext(ContentContext);
  const { screenSize } = useContext(DeltaContext);
  return (
    <div className="footer">
      <div className="footerContainer">
        <Contact />
        {offices.map(function (officeItem) {
          return <Office content={officeItem} />;
        })}
      </div>
      <div className="divider">
        {screenSize.width >= 1000 ? <Socials /> : null}
        <div className="logoRight">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <Rights />
    </div>
  );
}

export { Footer };
