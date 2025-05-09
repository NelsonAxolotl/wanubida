/*GLOBAL*/
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*COMPONENTS*/
import Nav from "./Components/Nav";
import ScrollToTop from "./Components/ScrollToTop";

/*ROUTES*/
import Home from "./Pages/Home";
import Spectacles from "./Pages/Spectacles";
import Mediation from "./Pages/Mediation";
import Ecouter from "./Pages/Ecouter";
import Contacts from "./Pages/Contacts";
import Cie from "./Pages/Cie";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spectacle" element={<Spectacles />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/ecouter/voir" element={<Ecouter />} />
          <Route path="/cie" element={<Cie />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
