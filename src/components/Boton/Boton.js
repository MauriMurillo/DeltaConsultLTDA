import React from "react";
import { NavLink } from "react-router-dom";

function Boton(props) {
  const { path, name, width, color, id } = props;
  return (
    <NavLink
      to={path}
      className="Button animate__animated_Mauri"
      id={id}
      style={{
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        border: "solid 4px",
        borderColor: color,
        textDecoration: "none",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: color,
          fontSize: "26px",
          fontWeight: "600",
        }}
      >
        {name}
      </p>
    </NavLink>
  );
}

export { Boton };
