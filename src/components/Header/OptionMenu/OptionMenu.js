import React, { useContext } from "react";
import "./OptionMenu.css";
import { useNavigate } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { ComponentContext } from "../../../Contexts/ComponentContext";

import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";
function SubMenu(props) {
  const {
    selectedItem,
    setSelectedContent,
    setShowSubMenu,
    setShowOptionMenu,
    setSelectedItem,
  } = useContext(DeltaContext);
  const { options } = props;
  const navigate = useNavigate();

  return (
    <div className="subMenu">
      {options
        .find((item) => item.name === selectedItem)
        .links.map((item) => (
          <div
            onClick={() => {
              setShowSubMenu(false);
              setShowOptionMenu(false);
              setSelectedItem("");
              setSelectedContent(item);
              window.scrollTo(0, 0);
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
                    setShowSubMenu(true);
                    setSelectedItem(item.name);
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
                setShowSubMenu(false);
                setShowOptionMenu(false);
                if (selectedOption === "NOSOTROS") {
                  navigate("/Nosotros");
                  setTimeout(function () {
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "auto",
                        block: "center",
                        inline: "center",
                      });
                    }
                  }, 50);
                } else if (selectedOption === "INDUSTRIAS") {
                  setSelectedContent(item);
                  window.scrollTo(0, 0);
                  navigate("/Industrias");
                } else if (selectedOption === "SERVICIOS") {
                  setSelectedContent(item);
                  window.scrollTo(0, 0);
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
