import React from "react";
import { ReactSVG } from "react-svg";
import emailIcon from "../../Assets/Icons/footer/email-icon.svg";
import locationIcon from "../../Assets/Icons/footer/location-icon.svg";
import phoneIcon from "../../Assets/Icons/footer/phone-icon.svg";
function Office(props) {
  const content = props.content;
  return (
    <div className="officeContainer" style={{gridArea: content.area}}>
      <p className="city">{content.ciudad}</p>
      <div className="cn">
        <a target="_blank" rel="noreferrer" href={"mailto:" + content.mail}>
          <img src={emailIcon} className="icon" alt="email" />
          <p> {content.mail}</p>
        </a>
      </div>
      <div className="cn">
        <a target="_blank" rel="noreferrer" href={"tel:" + content.telefono}>
          <ReactSVG src={phoneIcon} className="icon" alt="phone" />
          <p> {content.telefono}</p>
        </a>
      </div>
      <div className="cn">
        <a target="_blank" rel="noreferrer" href={content.mapLink}>
          <ReactSVG src={locationIcon} className="icon" alt="location" />
          <p> {content.direccion}</p>
        </a>
      </div>
    </div>
  );
}

export { Office };
