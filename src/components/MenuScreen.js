import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./MenuScreen.css";
import { FaTimes } from "react-icons/fa";
import { DeltaContext } from "../Contexts/DeltaContext";

function MenuScreen(props) {
  const { setShowFullMenu } = useContext(DeltaContext);

  return ReactDOM.createPortal(
    <div className="menuScreen">
      {props.children}
      <FaTimes size={50} color="white" className="closeMenu" onClick={() => setShowFullMenu(false)}/>
      {/* <FaTimes size={24}/> */}
    </div>,
    document.getElementById("menu")
  );
}

export { MenuScreen };
