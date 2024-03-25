import React, { useContext } from "react";
import "./MobileOptionMenu.css";
import { useNavigate } from "react-router-dom";
import { DeltaContext } from "../../../Contexts/DeltaContext";
import { ComponentContext } from "../../../Contexts/ComponentContext";

import arrow from "../../../Assets/Icons/utilIcons/Header_Arrow.svg";
function MobileSubMenu(props) {
  const {
    selectedItem,
    setSelectedContent,
    setShowSubMenu,
    setShowOptionMenu,
    setSelectedItem,
    setShowMobileMenu,
  } = useContext(DeltaContext);
  const { options } = props;
  const navigate = useNavigate();

  return (
    <div className="deployed">
      {options
        .find((item) => item.name === selectedItem)
        .links.map((item, index) => (
          <div
            key={`submenuCelu${index}`}
            onClick={() => {
              setShowMobileMenu(false);
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
function TabletSubMenu(props) {
  const {
    selectedItem,
    setSelectedContent,
    setShowSubMenu,
    setShowOptionMenu,
    setSelectedItem,
    setShowMobileMenu,
  } = useContext(DeltaContext);
  const { options } = props;
  const navigate = useNavigate();

  return (
    <div className="subMenu">
      {options
        .find((item) => item.name === selectedItem)
        .links.map((item, index) => (
          <div
            key={`submenuTablet${index}`}
            onClick={() => {
              setShowMobileMenu(false);
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

function MobileOptionMenu() {
  const {
    selectedOption,
    showSubMenu,
    setShowSubMenu,
    selectedItem,
    setSelectedItem,
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
            {display.menu.map((item, index) => {
              return (
                <div
                  key={`opcionConSub${index}`}
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
            {display.links.map((item, index) => (
              <div
                key={`opcionSinSub${index}`}
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowSubMenu(false);
                  setShowOptionMenu(false);
                  setSelectedItem("");
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
