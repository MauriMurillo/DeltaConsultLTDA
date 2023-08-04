import React from "react";
import { easeOut, motion } from "framer-motion";
function LogoReveal(props) {
  const { principal, secondary } = props;
  return (
    <div className="logoRevealContainer">
      <motion.div
        whileInView={{ x: 292 }}
        transition={{ ease: easeOut, duration: 1 }}
        className="halfLogoRight"
      ></motion.div>
      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 1 }}
        className="card first"
      >
        <div className="cardTitle">{principal.title}</div>
        <div className="cardDescription">{principal.description}</div>
      </motion.div>
      <motion.div
        whileInView={{ x: -292 }}
        transition={{ ease: easeOut, duration: 1 }}
        className="halfLogoLeft"
      ></motion.div>
      <motion.div
        className="card second"
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 1 }}
      >
        <div className="cardTitle">{secondary.title}</div>
        <div className="cardDescription">{secondary.description}</div>
      </motion.div>
    </div>
  );
}

export { LogoReveal };
