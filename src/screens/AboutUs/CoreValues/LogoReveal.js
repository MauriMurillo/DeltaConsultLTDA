import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
function LogoReveal(props) {
  const { principal, secondary, id } = props;
  const logoContainer = useRef(null);
  const islogoVisible = useInView(logoContainer);
  useEffect(() => {
    if (islogoVisible) {
      const logoviewR = document.getElementById("revealRight" + id);
      const logoviewL = document.getElementById("revealLeft" + id);
      logoviewR.classList.add("animate__slideOutRight");
      logoviewL.classList.add("animate__slideOutLeft");
    }
  }, [islogoVisible, id]);
  return (
    <motion.div ref={logoContainer} className="logoRevealContainer">
      <div
        className="halfLogoRight animate__animated"
        id={"revealRight" + id}
      ></div>
      <div className="card first">
        <div className="cardTitle">{principal.title}</div>
        <div className="cardDescription">{principal.description}</div>
      </div>
      <div
        className="halfLogoLeft animate__animated"
        id={"revealLeft" + id}
      ></div>
      <div className="card second">
        <div className="cardTitle">{secondary.title}</div>
        <div className="cardDescription">{secondary.description}</div>
      </div>
    </motion.div>
  );
}

export { LogoReveal };
