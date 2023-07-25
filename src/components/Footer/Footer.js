import React, { useContext } from "react";
import "./Footer.css";
import { Office } from "./Office";
import { Contact } from "./Contact";
import { Rights } from "./Rights";
import { ContentContext } from "../../Contexts/ContentContext";

function Footer() {
  const { offices } = useContext(ContentContext);
  return (
    <div className="footer">
      <div className="footerContainer">
        {offices.map(function (officeItem) {
          return <Office content={officeItem} />;
        })}
        <Contact />
      </div>
      <Rights />
    </div>
  );
}

export { Footer };
