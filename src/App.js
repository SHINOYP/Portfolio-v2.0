import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import AnimatedRoutes from "../src/Components/AnimatedRoutes";
import Sharigan from "./Components/sharigan/Sharigan";
const React = require("react");

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}
