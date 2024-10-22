import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/projects";
import Contact from "./pages/contact";

const React = require("react");

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
