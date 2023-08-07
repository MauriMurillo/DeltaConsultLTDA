import React, { useState } from "react";
import { Card } from "./Card";
import { easeInOut, motion } from "framer-motion";
import menuDown from "../../../Assets/Icons/utilIcons/Vector.svg";
function Department(props) {
  const { content } = props;
  const [showDepartment, setShowDepartment] = useState(false);
  return (
    <div className="departmentContainer">
      <div
        className="drawer"
        onClick={() => {
          showDepartment ? setShowDepartment(false) : setShowDepartment(true);
        }}
      >
        <div className="departmentTitle">{content.department}</div>
        <motion.img
          src={menuDown}
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
