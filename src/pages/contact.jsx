import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import linkin from "../img/linkedin.svg";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const React = require("react");

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content"
    >
      <section className=" mx-auto  width_limit">
        <div className=" flex justify-between md:ml-10 ml-4  mt-6  ">
          <div className="">
            <h1 className="text-xl md:text-2xl  font-semibold ">
              <span> #</span> Contacts
            </h1>
          </div>
        </div>
        <div className="flex  flex-col md:flex-col justify-between width_limit">
          <div className="mt-6 md:ml-10 ml-4  font-semibold ">
            <p className="text-sm md:text-base" style={{ maxWidth: 600 }}>
              I’m interested in Job opportunities including freelance . However,
              if you have other request or question, don’t hesitate to contact
              me
            </p>
          </div>
          <div className="md:m-10 flex flex-col md:flex-row ">
            <div
              className="  border p-1   pic hide mt-10 ml-2 text-xs md:text-base  "
              data-aos="fade-up"
              style={{ zIndex: 0, height: "9rem", width: "18rem" }}
            >
              <p className="mt-1 font-bold mx-2 text-white ">Message me here</p>
              <img
                src={Gmail}
                className="m-2  inline hover:text-white"
                alt=""
              ></img>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                className="hover:text-white"
              >
                shinoyshinoo@gmail.com{" "}
              </a>
              <br />
              <img src={Disc} className="m-2 inline " alt=""></img>
              <a href={Disc} className="hover:text-white">
                falcon #0900
              </a>
              <br />
              <img src={linkin} className="m-2  inline " alt=""></img>
              <a
                href="https://www.linkedin.com/in/shinoy-p-3b1350225/"
                className="hover:text-white"
              >
                Shinoy P
              </a>
            </div>
            <div
              className=" border m-20   pic hide  text-xs md:text-base "
              data-aos="fade-up"
              style={{ zIndex: 10, width: "18rem", height: "8rem" }}
            >
              <p className=" font-bold mx-4 text-white  mt-2">Also here</p>
              <img
                src={Inst}
                className="m-2 pl-1 inline hover:text-white"
                alt=""
              ></img>
              <a
                href="https://www.instagram.com/shinoy._.p/"
                className="hover:text-white"
              >
                shinoy._.p{" "}
              </a>
              <br />
              <img src={Git} className="mb-2 m-1 pl-1  inline " alt=""></img>
              <a href="https://discord.com/login" className="hover:text-white">
                shino
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
