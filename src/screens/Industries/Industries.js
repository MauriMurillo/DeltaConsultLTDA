import React, { useContext } from "react";
import "./Industries.css";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import { DeltaContext } from "../../Contexts/DeltaContext.js";
import { IndustriesContext } from "../../Contexts/IndustriesContext.js";
import { Boton } from "../../components/Boton/Boton.js";
function Industries() {
  const { selectedContent, setSelectedContent } = useContext(DeltaContext);
  const { industries } = useContext(IndustriesContext);

  let main = {};
  let rest = [];
  if (selectedContent !== "") {
    console.log("updation")
    main = industries.find(
      (item) => item.title.toLowerCase() === selectedContent.toLowerCase()
    );
    rest = industries.filter(
      (item) => item.title.toLowerCase() !== selectedContent.toLowerCase()
    );
  } else {
    main = industries.find(
      (item) => item.title.toLowerCase() === "gubernamentales"
    );
    rest = industries.filter(
      (item) => item.title.toLowerCase() !== "gubernamentales"
    );
  }
  return (
    <div className="industriesScreen Screen">
      <Header />
      <section className="mainIndustry top">
        <div className="textContainer">
          <h1>{main.title}</h1>

          {main.text.map((item) => (
            <p>{item}</p>
          ))}
          <Boton
            path="/"
            name="CONTACTANOS PARA MAS INFORMACION"
            width="608px"
            color="#1D619D"
            id={main.title}
          />
        </div>
        <div className="imageContainer">
          <img src={main.foto} alt="industria" />
        </div>
      </section>
      <section className="restIndustries">
        <h3>Explora Nuestras Industrias</h3>
        <div className="Grid">
          {rest.map((item) => (
            <div
              onClick={() => {
                setSelectedContent(item.title);
                window.scrollTo(0,0)
              }}
              className="restItem"
            >
              <img src={item.mini} alt="industria" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export { Industries };
