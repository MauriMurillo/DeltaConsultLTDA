import React, { useContext } from "react";
import "./Footer.css";
import { Office } from "./Office";
import { Contact } from "./Contact";
import { Rights } from "./Rights";
import { ContentContext } from "../../Contexts/ContentContext";
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
      <Rights />
    </div>
  );
}

export { Footer };
