import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Team } from "./screens/Team/Team";
import { Services } from "./screens/Services";
import { SMS } from "./screens/SMS";
import { IFAC } from "./screens/IFAC";
import { Contact } from "./screens/Contact";
import { AboutUs } from "./screens/AboutUs";
import { DeltaProvider } from "./Contexts/DeltaContext";
import { ContentProvider } from "./Contexts/ContentContext";

function App() {
  return (
    <ContentProvider>
      <DeltaProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/SMS" element={<SMS />} />
            <Route path="/IFAC" element={<IFAC />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </HashRouter>
      </DeltaProvider>
    </ContentProvider>
  );
}

export { App };
