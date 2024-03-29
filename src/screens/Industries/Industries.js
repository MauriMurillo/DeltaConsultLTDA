import React, { useContext } from "react";
import "./Industries.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { DeltaContext } from "../../Contexts/DeltaContext.js";
import { IndustriesContext } from "../../Contexts/IndustriesContext.js";
import { DropMenu } from "../../components/DropMenu/DropMenu.js";
import { useNavigate } from "react-router-dom";
function Industries() {
  const { screenSize, selectedContent, setSelectedContent } =
    useContext(DeltaContext);
  const { industries } = useContext(IndustriesContext);
  const navigate = useNavigate();
  let main = {};
  let rest = [];
  if (selectedContent !== "") {
    main = industries.find(
      (item) => item.title.toLowerCase() === selectedContent.toLowerCase()
    );
    rest = industries.filter(
      (item) => item.title.toLowerCase() !== selectedContent.toLowerCase()
    );
  } else {
    main = industries.find(
      (item) => item.title.toLowerCase() === "estrategicas"
    );
    rest = industries.filter(
      (item) => item.title.toLowerCase() !== "estrategicas"
    );
  }
  return (
    <div className="industriesScreen Screen">
      <Header />
      <section className="mainIndustry noTop">
        <div className="textContainer">
          <h1>{main.title}</h1>

          {main.text.map((item, index) => (
            <p key={`indTexto${index}`}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigate("/Contacto");
              window.scrollTo(0, 0);
            }}
            className="Button"
          >
            <p>CONTACTA A NUESTROS EXPERTOS AQUÍ</p>
          </div>
        </div>
        <div className="imageContainer">
          <img src={main.foto} alt="industria" />
        </div>
      </section>
      {screenSize.width > 950 ? (
        <section
          className="restIndustries Bottom"
          style={{ marginTop: "100px" }}
        >
          <h3>Explora Nuestras Industrias</h3>
          <div className="Grid">
            {rest.map((item, index) => (
              <div
                key={`otras${index}`}
                onClick={() => {
                  setSelectedContent(item.title);
                  window.scrollTo(0, 0);
                }}
                className="restItem"
              >
                <img src={item.mini} alt="industria" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <DropMenu title="Explora Nuestras Industrias">
          <ul className="restList">
            {rest.map((item, index) => (
              <li
                key={`otrasDrop${index}`}
                onClick={() => {
                  setSelectedContent(item.title);
                  window.scrollTo(0, 0);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </DropMenu>
      )}
      <Footer />
    </div>
  );
}

export { Industries };
