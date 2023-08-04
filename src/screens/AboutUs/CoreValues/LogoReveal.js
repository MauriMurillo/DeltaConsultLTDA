import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DeltaContext } from "../../../Contexts/DeltaContext.js";
function LogoReveal(props) {
  const { principal, secondary, id } = props;
  const { logoContainer1, logoContainer2 } = useContext(DeltaContext);

  return (
    <motion.div
      ref={id === "1" ? logoContainer1 : logoContainer2}
      className="logoRevealContainer"
    >
      <div
        className="halfLogoRight animate__animated"
        id={"revealRight" + id}
      ></div>
      <div className="card first">
        <div className="cardTitle">{principal.title}</div>
        <div className="cardDescription">{principal.description}</div>
      </div>
      <div className="halfLogoLeft animate__animated" id={"revealLeft" + id}></div>
      <div className="card second">
        <div className="cardTitle">{secondary.title}</div>
        <div className="cardDescription">{secondary.description}</div>
      </div>
    </motion.div>
  );
}

export { LogoReveal };
