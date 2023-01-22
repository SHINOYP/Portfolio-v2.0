import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import AnimatedRoutes from "../src/Components/AnimatedRoutes"
const React = require("react");



export default function App(){

  return(
    <div className="App">
      <Router>
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </Router>
    </div>
  )
}