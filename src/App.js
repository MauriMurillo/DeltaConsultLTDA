import "./App.css";
// Functionality
import { HashRouter, Routes, Route } from "react-router-dom";

// Screensa
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { SMS } from "./screens/SMS/SMS";
import { Contact } from "./screens/Contact/Contact";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { Industries } from "./screens/Industries/Industries";

//Context Provider General
import { DeltaProvider } from "./Contexts/DeltaContext";
import { ComponentProvider } from "./Contexts/ComponentContext";
//Screen Context Provider
import { HomeProvider } from "./Contexts/HomeContext";
import { ServicesProvider } from "./Contexts/ServicesContext";
import { TeamContentProvider } from "./Contexts/TeamContentContext";
import { IndustriesProvider } from "./Contexts/IndustriesContext";

//Main Application Structure
function App() {
  return (
    <DeltaProvider>
      <ComponentProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomeProvider>
                  <Home />
                </HomeProvider>
              }
            />

            <Route
              path="/Servicios"
              element={
                <ServicesProvider>
                  <Services />
                </ServicesProvider>
              }
            />
            <Route
              path="/Nosotros"
              element={
                <TeamContentProvider>
                  <AboutUs />
                </TeamContentProvider>
              }
            />
            <Route
              path="/Industrias"
              element={
                <IndustriesProvider>
                  <Industries />
                </IndustriesProvider>
              }
            />

            <Route path="/SMS" element={<SMS />} />

            <Route path="/Contacto" element={<Contact />} />
          </Routes>
        </HashRouter>
      </ComponentProvider>
    </DeltaProvider>
  );
}

export { App };
