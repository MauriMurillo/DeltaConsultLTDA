import React from "react";

function BigOffice(props) {
  const { content } = props;
  return (
    <div className="bigOfficeContainer">
      <div className="officeHeading">
        <p>{content.ciudad}</p>
      </div>
    </div>
  );
}

export { BigOffice };
