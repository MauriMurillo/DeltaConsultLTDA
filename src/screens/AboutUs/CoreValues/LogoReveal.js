import React from "react";
import { easeOut, motion } from "framer-motion";
import { useContext } from "react";
import { DeltaContext } from "../../../Contexts/DeltaContext";
function LogoReveal(props) {
  const { principal, secondary } = props;
  const { screenSize } = useContext(DeltaContext);
  return (
    <div className="logoRevealContainer">
      <motion.div
        whileInView={screenSize.width > 600 ? { x: 292 } : { x: 228 }}
        transition={{ ease: easeOut, duration: 1 }}
        className="halfLogoRight"
      ></motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="card first"
      >
        <div className="cardTitle">{principal.title}</div>
        <div className="cardDescription">{principal.description}</div>
      </motion.div>
      <motion.div
        whileInView={screenSize.width > 600 ? { x: -292 } : { x: -228 }}
        transition={{ ease: easeOut, duration: 1 }}
        className="halfLogoLeft"
      ></motion.div>
      <motion.div
        className="card second"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="cardTitle">{secondary.title}</div>
        <div className="cardDescription">{secondary.description}</div>
      </motion.div>
    </div>
  );
}

export { LogoReveal };
