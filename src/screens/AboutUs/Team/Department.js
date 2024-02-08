import React, { useState } from "react";
import { Card } from "./Card";
import { easeInOut, motion } from "framer-motion";
import menuDown from "../../../Assets/Icons/utilIcons/Account.svg";
import arrow2 from "../../../Assets/Icons/utilIcons/Account.svg"
function Department(props) {
  const { content } = props;
  const [showDepartment, setShowDepartment] = useState(false);
  return (
    <div className="departmentContainer">
      <div
        className="drawer"
        style={showDepartment ? { borderBottom: "solid 14px #ACC3F8" } : null}
        onClick={() => {
          showDepartment ? setShowDepartment(false) : setShowDepartment(true);
        }}
      >
        <div className="departmentTitle" 
        style={showDepartment ? { color: "#ACC3F8" } : null}
        >{content.department}</div>
        <motion.img
          src={showDepartment ? arrow2 : menuDown}
          animate={showDepartment ? { rotate: 180 } : { rotate: 0 }}
          transition={{ ease: easeInOut }}
          alt="show"
          className="icon"
        />
      </div>
      {showDepartment ? (
        <div className="membersContainer">
          {content.members.map((item) => {
            return <Card cardData={item} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

export { Department };
