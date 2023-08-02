import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { SMS } from "./screens/SMS/SMS";
import { Contact } from "./screens/Contact/Contact";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { DeltaProvider } from "./Contexts/DeltaContext";
import { ContentProvider } from "./Contexts/ContentContext";

function App() {
  return (
    <ContentProvider>
      <DeltaProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/SMS" element={<SMS />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </HashRouter>
      </DeltaProvider>
    </ContentProvider>
  );
}

export { App };
