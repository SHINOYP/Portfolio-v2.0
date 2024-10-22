import { BrowserRouter as Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/projects";
import Contact from "../pages/contact";
import { AnimatePresence } from "framer-motion";
const React = require("react");

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
