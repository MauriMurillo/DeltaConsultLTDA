import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { SMS } from "./screens/SMS/SMS";
import { Contact } from "./screens/Contact/Contact";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { Industries } from "./screens/Industries/Industries"
import { DeltaProvider } from "./Contexts/DeltaContext";
import { ContentProvider } from "./Contexts/ContentContext";
import { ServicesProvider } from "./Contexts/ServicesContext";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  return (
    <ContentProvider>
      <ServicesProvider>
        <DeltaProvider>
          <HashRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/SMS" element={<SMS />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/IndustriAs" element={<Industries/>}/>
            </Routes>
          </HashRouter>
        </DeltaProvider>
      </ServicesProvider>
    </ContentProvider>
  );
}

export { App };
