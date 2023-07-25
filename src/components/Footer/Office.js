import React from "react";

function Office(props) {
  const content = props.content;
  console.log(content);
  return (
    <div className="officeContainer">
      <p>{content.ciudad}</p>
      <p> {content.direccion}</p>
      <p> {content.telefono}</p>
      <p> {content.mail}</p>
    </div>
  );
}

export { Office };
