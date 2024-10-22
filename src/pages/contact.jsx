import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import linkin from "../img/linkedin.svg";
import Aos from "aos";
import "aos/dist/aos.css";
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
      <section className="mx-auto  width_limit">
        <div className="flex justify-between mt-6 ml-4  md:ml-10">
          <div className="">
            <h1 className="text-xl font-semibold md:text-2xl ">
              <span> #</span> Contacts
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-col width_limit">
          <div className="mt-6 ml-4 font-semibold md:ml-10 ">
            <p className="text-sm md:text-base" style={{ maxWidth: 600 }}>
              I’m interested in Job opportunities including freelance . However,
              if you have other request or question, don’t hesitate to contact
              me
            </p>
          </div>
          <div className="flex flex-col md:m-10 md:flex-row ">
            <div
              className="p-1 mt-10 ml-2 text-xs border  pic hide md:text-base"
              data-aos="fade-up"
              style={{ zIndex: 0, height: "9rem", width: "18rem" }}
            >
              <p className="mx-2 mt-1 font-bold text-white ">Message me here</p>
              <LazyLoadImage
                src={Gmail}
                className="inline m-2 hover:text-white"
                alt=""
              ></LazyLoadImage>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                className="hover:text-white"
              >
                shinoyshinoo@gmail.com{" "}
              </a>
              <br />
              <LazyLoadImage
                src={Disc}
                className="inline m-2 "
                alt=""
              ></LazyLoadImage>
              <a href={Disc} className="hover:text-white">
                falcon #0900
              </a>
              <br />
              <LazyLoadImage
                src={linkin}
                className="inline m-2 "
                alt=""
              ></LazyLoadImage>
              <a
                href="https://www.linkedin.com/in/shinoy-p-3b1350225/"
                className="hover:text-white"
              >
                Shinoy P
              </a>
            </div>
            <div
              className="m-20 text-xs border  pic hide md:text-base"
              data-aos="fade-up"
              style={{ zIndex: 10, width: "18rem", height: "8rem" }}
            >
              <p className="mx-4 mt-2 font-bold text-white ">Also here</p>
              <LazyLoadImage
                src={Inst}
                className="inline pl-1 m-2 hover:text-white"
                alt=""
              ></LazyLoadImage>
              <a
                href="https://www.instagram.com/shinoy._.p/"
                className="hover:text-white"
              >
                shinoy._.p{" "}
              </a>
              <br />
              <LazyLoadImage
                src={Git}
                className="inline pl-1 m-1 mb-2 "
                alt=""
              ></LazyLoadImage>
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
