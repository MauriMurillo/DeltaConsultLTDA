import React from "react";
import ReactDOM from "react-dom";
import "./MenuScreen.css";

function MenuScreen(props) {

  return ReactDOM.createPortal(
    <div className="menuScreen">
      {props.children}
    </div>,
    document.getElementById("menu")
  );
}

export { MenuScreen };
