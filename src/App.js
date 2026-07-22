import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Babysitting from "./pages/Babysitting";
import ElderCare from "./pages/ElderCare";
import Therapy from "./pages/Therapy";
import Postpartum from "./pages/Postpartum";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";
import Signup from "./pages/Signup";

function App() {
  return (
    <Layout>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

  <Route path="/babysitting" element={<Babysitting />} />
  <Route path="/elder-care" element={<ElderCare />} />
  <Route path="/therapy" element={<Therapy />} />
  <Route path="/postpartum" element={<Postpartum />} />

  <Route path="/contact" element={<Contact />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/signup" element={<Signup />} />

  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />

  <Route path="*" element={<NotFound />} />
</Routes>
    </Layout>
  );
}

export default App;