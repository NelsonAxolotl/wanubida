/*GLOBAL*/
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*COMPONENTS*/
import Nav from "./Components/Nav";
import Calendar from "./Components/Calendar";
import ScrollToTop from "./Components/ScrollToTop";

/*ROUTES*/
import Home from "./Pages/Home";
import Spectacles from "./Pages/Spectacles";
import Mediation from "./Pages/Mediation";
import Agenda from "./Pages/Agenda";
import Billeterie from "./Pages/Billetterie";
import Ecouter from "./Pages/Ecouter";
import Contacts from "./Pages/Contacts";
import Cie from "./Pages/Cie";
import Event1 from "./Pages/Event1";
import Event2 from "./Pages/Event2";
import Event3 from "./Pages/Event3";
import Event4 from "./Pages/Event4";
import Event5 from "./Pages/Event5";
import Event6 from "./Pages/Event6";
import Event7 from "./Pages/Event7";
import Event8 from "./Pages/Event8";
import Event9 from "./Pages/Event9";
import Event10 from "./Pages/Event10";
import Event11 from "./Pages/Event11";
import Event12 from "./Pages/Event12";
import Event13 from "./Pages/Event13";
import Event14 from "./Pages/Event14";
import Event15 from "./Pages/Event15";
import Event16 from "./Pages/Event16";
import Event17 from "./Pages/Event17";
import Event18 from "./Pages/Event18";
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
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/billetterie" element={<Billeterie />} />
          <Route path="/billetterie/event1" element={<Event1 />} />
          <Route path="/billetterie/event2" element={<Event2 />} />
          <Route path="/billetterie/event3" element={<Event3 />} />
          <Route path="/billetterie/event4" element={<Event4 />} />
          <Route path="/billetterie/event5" element={<Event5 />} />
          <Route path="/billetterie/event6" element={<Event6 />} />
          <Route path="/billetterie/event7" element={<Event7 />} />
          <Route path="/billetterie/event8" element={<Event8 />} />
          <Route path="/billetterie/event9" element={<Event9 />} />
          <Route path="/billetterie/event10" element={<Event10 />} />
          <Route path="/billetterie/event11" element={<Event11 />} />
          <Route path="/billetterie/event12" element={<Event12 />} />
          <Route path="/billetterie/event13" element={<Event13 />} />
          <Route path="/billetterie/event14" element={<Event14 />} />
          <Route path="/billetterie/event15" element={<Event15 />} />
          <Route path="/billetterie/event16" element={<Event16 />} />
          <Route path="/billetterie/event17" element={<Event17 />} />
          <Route path="/billetterie/event18" element={<Event18 />} />
          <Route path="/agenda" element={<Calendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
