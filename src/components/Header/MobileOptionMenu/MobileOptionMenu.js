import React, { useContext } from "react";
import "./MobileOptionMenu.css";
import { useNavigate } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { ComponentContext } from "../../../Contexts/ComponentContext";

import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";
function MobileSubMenu(props) {
  const { selectedItem, setSelectedContent, setShowOptionMenu } =
    useContext(DeltaContext);
  const { options } = props;
  const navigate = useNavigate();

  return (
    <div className="deployed">
      {options
        .find((item) => item.name === selectedItem)
        .links.map((item) => (
          <div
            onClick={() => {
              setShowOptionMenu(false);
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
function TabletSubMenu(props) {
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

function MobileOptionMenu() {
  const {
    selectedOption,
    showSubMenu,
    setShowSubMenu,
    selectedItem,
    setSelectedItem,
    setSelectedSection,
    setSelectedContent,
    setShowOptionMenu,
    setShowMobileMenu,
    screenSize,
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
    <div className="mobileOptionMenu">
      <section className="return" onClick={() => setShowOptionMenu(false)}>
        <img src={arrow} alt="back" />
        <p>VOLVER</p>
      </section>
      <section className="main">
        <div className="items">
          <h2 className="mobileMenuTitle">{display.title}</h2>
          <section className="links">
            {display.menu.map((item) => {
              return (
                <div
                  className={
                    item.name === selectedItem ? "active deploy" : "deploy"
                  }
                >
                  <div
                    onClick={() => {
                      if (showSubMenu) {
                        setSelectedItem("");
                        setShowSubMenu(false);
                      } else {
                        setSelectedItem(item.name);
                        setShowSubMenu(true);
                      }
                    }}
                    className={
                      item.name === selectedItem ? "active item" : "item"
                    }
                  >
                    <p>{item.name}</p>
                    <img src={arrow} alt="arrow" />
                  </div>
                  {showSubMenu &&
                  screenSize.width <= 600 &&
                  selectedItem === item.name ? (
                    <MobileSubMenu options={display.menu} />
                  ) : null}
                </div>
              );
            })}
            {display.links.map((item) => (
              <div
                onClick={() => {
                  setShowOptionMenu(false);
                  setShowMobileMenu(false);
                  if (selectedOption === "NOSOTROS") {
                    setSelectedSection(item);
                    navigate("/Nosotros");
                  } else if (selectedOption === "INDUSTRIAS") {
                    setSelectedContent(item);
                    navigate("/Industrias");
                  } else if (selectedOption === "SERVICIOS") {
                    setSelectedContent(item);
                    navigate("/Servicios");
                  }
                }}
              >
                {item}
              </div>
            ))}
          </section>
        </div>
        {showSubMenu && screenSize.width > 600 ? (
          <TabletSubMenu options={display.menu} />
        ) : selectedOption === "SERVICIOS" && screenSize.width > 600 ? (
          <div className="filler" />
        ) : (
          <div className="border" />
        )}
      </section>
    </div>
  );
}

export { MobileOptionMenu };
