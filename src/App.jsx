import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/company" element={<Company />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />

    </Router>
  );
}

export default App;
