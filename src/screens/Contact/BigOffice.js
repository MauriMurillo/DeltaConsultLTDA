import React from "react";
import emailIcon from "../../Assets/Icons/contact/Message.svg";
import locationIcon from "../../Assets/Icons/contact/Location.svg";
import phoneIcon from "../../Assets/Icons/contact/phone-icon.svg";
import "./BigOffice.css";
function BigOffice(props) {
  const { content } = props;
  return (
    <div className="bigOfficeContainer">
      <p>{content.ciudad}</p>
      <div className="contentFlex">
        <div className="officeDataContainer">
          <div className="cnb">
            <a target="_blank" rel="noreferrer" href={"mailto:" + content.mail}>
              <img src={emailIcon} className="icon" alt="email" />
              <p> {content.mail}</p>
            </a>
          </div>
          <div className="cnb" id="ph">
            <a
              target="_blank"
              rel="noreferrer"
              href={"tel:" + content.telefono}
            >
              <img src={phoneIcon} className="icon" alt="phone" />
              <p> {content.telefono}</p>
            </a>
          </div>
          <div className="cnb">
            <a target="_blank" rel="noreferrer" href={content.mapLink}>
              <img src={locationIcon} className="icon" alt="location" />
              <p> {content.direccion}</p>
            </a>
          </div>
        </div>
        <div className="embedMap">{content.embed}</div>
      </div>
    </div>
  );
}

export { BigOffice };
