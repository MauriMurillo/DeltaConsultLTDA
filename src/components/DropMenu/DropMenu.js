import React, { useContext, useState } from "react";
import arrow from "../../Assets/Icons/utilIcons/Arrow_drop.svg";
import { DeltaContext } from "../../Contexts/DeltaContext";
function DropMenu(props) {
  const { screenSize } = useContext(DeltaContext);
  const { title, stack, notop } = props;
  const [deployed, setDeployed] = useState(false);
  const borderBot = stack ? "none" : "solid 4px #d9d9d9";
  const borderTop = (stack || notop) ? "none" : "solid 4px #d9d9d9";
  const height = stack ? "92px" : "100px";
  const styles = {
    compu: {
      paddingLeft: "96px",
      paddingRight: "64px",
      fontSize: "38px",
      color: "#364660",
      borderTop: borderTop,
      borderBottom: borderBot,
      height: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tablet: {
      paddingLeft: "64px",
      paddingRight: "64px",
      fontSize: "24px",
      color: "#364660",
      borderTop: borderTop,
      borderBottom: borderBot,
      height: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    celu: {
      paddingLeft: "64px",
      paddingRight: "40px",
      fontSize: "18px",
      color: "#364660",
      borderTop: borderTop,
      borderBottom: borderBot,
      height: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
  return (
    <div>
      <div
        className={deployed ? "menuTitle menuDeploy" : "menuTitle"}
        onClick={deployed ? () => setDeployed(false) : () => setDeployed(true)}
        style={
          screenSize.width > 950
            ? styles.compu
            : screenSize.width > 600
            ? styles.tablet
            : styles.celu
        }
      >
        <p>{title}</p>
        <img
          style={
            deployed
              ? {
                  transition: "0.5s",
                  transform: "rotate(180deg)",
                }
              : {
                  transition: "0.5s",
                  transform: "rotate(0deg)",
                }
          }
          src={arrow}
          alt="open"
        />
      </div>
      {deployed ? props.children : null}
    </div>
  );
}

export { DropMenu };
