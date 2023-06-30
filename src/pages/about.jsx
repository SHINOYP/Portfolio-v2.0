import bg2 from "../img/bg-2.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const React = require("react");

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content"
    >
      <section className=" flex  flex-col md:flex-row justify-between mx-auto  width_limit">
        <div className="">
          <h1 className=" md:flex-col text-xl font-bold mx-3 my-6">
            {" "}
            who am i?
          </h1>
          <h1 className=" md:flex-col  mx-3 my-2 "> My name is shinoy,</h1>
          <p className=" text-sm md:text-base mx-3 ">
            I’m a self-taught front-end developer based in kerala,India. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. As i was looking for a domain to
            chose i stumpled upon fullstack we development,in which iam pretty
            intereted in .Trying to transform my creativity and knoledge into a
            website. I always strive to learn about the newest technologies and
            frameworks. Iam trying to work my way upto a full stack developer.
            <br />
            <br />
            As for my educational qualifcation iam Currently pursuing a diploma
            in computer engineering , i'm Currently at my final year of
            college.Hoping to land on a job as soon as finishing college.
          </p>
        </div>
        <div className="m-20 md:m-10 ">
          <img data-aos="zoom-in" src={bg2} alt=""></img>
        </div>
      </section>
      <section className=" mx-auto  width_limit ">
        <div className=" flex justify-between ml-4  mt-6  ">
          <div>
            <h1 className="md:text-2xl text-lg font-semibold ">
              #Contacts<span> -----------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-between mx-auto">
          <div className="mt-10  ml-4  font-semibold ">
            <p className="text-sm md:text-base">
              I’m interested in Job opportunities including freelance . However,
              if you have other request or question, don’t hesitate to contact
              me
            </p>
          </div>
          <div className="md:m-10  m-4">
            <div
              className=" w-64 h-32 border  md:m-2 pic hide "
              data-aos="zoom-in"
            >
              <p className=" font-bold mx-4 text-white text-sm md:text-base">
                Message me here
              </p>
              <img
                src={Gmail}
                className="m-2 inline hover:text-white"
                alt=""
              ></img>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                className="hover:text-white"
              >
                shinoyshinoo@gmail.com{" "}
              </a>
              <img src={Disc} className="m-2 inline " alt=""></img>
              <a href="https://discord.com/login" className="hover:text-white">
                falcon #0900
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
