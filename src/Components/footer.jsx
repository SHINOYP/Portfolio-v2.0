import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
import { motion } from "framer-motion";
const React = require("react");

export default function footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="sticky footer flex justify-between  items-center mx-auto py-7 text-lg border-t-2 border-t-white  width_limit">
      <div className="md:ml-10 ml-2 ">
        <small className="text-xs">&copy; Copyright {date} ,Shino</small>
      </div>
      <div className="flex items-center ">
        <motion.div
          className="container"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <a href="https://beacons.ai/shino.io">
            <img src={Inst} className="" alt=""></img>
          </a>
        </motion.div>
        <motion.div
          className="container"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <a href="https://github.com/Shinoyp">
            <img src={Git} className="mr-2" alt=""></img>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
