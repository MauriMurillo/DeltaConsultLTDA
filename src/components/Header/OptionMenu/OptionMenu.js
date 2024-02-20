import React, { useContext } from "react";
import "./OptionMenu.css";
import { useNavigate } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { ComponentContext } from "../../../Contexts/ComponentContext";

import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";
function SubMenu(props) {
  const { selectedItem, setSelectedContent, setShowOptionMenu } =
    useContext(DeltaContext);
  const { options } = props;
  const navigate = useNavigate();

  return (
    <div className="subMenu">
      {options
        .find((item) => item.name === selectedItem)
        .links.map((item) => (
          <div
            onClick={() => {
              setShowOptionMenu(false);
              setSelectedContent(item);
              navigate("/Servicios");
            }}
          >
            {item}
          </div>
        ))}
    </div>
  );
}

function OptionMenu() {
  const {
    selectedOption,
    showSubMenu,
    setShowSubMenu,
    selectedItem,
    setSelectedItem,
    setSelectedSection,
    setSelectedContent,
    setShowOptionMenu,
  } = useContext(DeltaContext);
  const { options } = useContext(ComponentContext);
  const navigate = useNavigate();

  const display = options.find((item) => {
    if (item.title === selectedOption) {
      return item;
    }
    return null;
  });

  return (
    <div className="optionMenuForBig">
      <div className="optionMenu wide">
        <section className="desc">
          <h2>{display.title}</h2>
          <p>{display.text}</p>
        </section>
        <section className="links">
          {display.menu.map((item) => {
            return (
              <div
                onClick={() => {
                  if (showSubMenu && selectedItem === item.name) {
                    setShowSubMenu(false);
                    setSelectedItem("");
                  } else {
                    setSelectedItem(item.name);
                    setShowSubMenu(true);
                  }
                }}
                className={item.name === selectedItem ? "active" : ""}
              >
                <p>{item.name}</p>
                <img src={arrow} alt="arrow" />
              </div>
            );
          })}
          {display.links.map((item) => (
            <div
              onClick={() => {
                if (selectedOption === "NOSOTROS") {
                  setShowOptionMenu(false);
                  setSelectedSection(item);
                  navigate("/Nosotros");
                } else if (selectedOption === "INDUSTRIAS") {
                  setShowOptionMenu(false);
                  setSelectedContent(item);
                  navigate("/Industrias");
                } else if (selectedOption === "SERVICIOS") {
                  setShowOptionMenu(false);
                  setSelectedContent(item);
                  navigate("/Servicios");
                }
              }}
            >
              {item}
            </div>
          ))}
        </section>
        {showSubMenu ? (
          <SubMenu options={display.menu} />
        ) : (
          <div className="filler" />
        )}
      </div>
    </div>
  );
}

export { OptionMenu };
