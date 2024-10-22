import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useEffect } from "react";
import bg2 from "../img/bg-2.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const React = require("react");

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 800 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content"
    >
      <section className="flex flex-col justify-between mx-auto md:flex-row width_limit">
        <div className="">
          <h1 className="mx-3 my-6 text-xl font-bold md:flex-col">
            {" "}
            who am i?
          </h1>
          <h1 className="mx-3 my-2 md:flex-col"> My name is shinoy,</h1>
          <p className="mx-3 text-sm md:text-base">
            I’m a self-taught Full Stack developer based in kerala,India. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. As i was looking for a domain to
            chose i stumpled upon fullstack web development,in which iam pretty
            intereted in .Trying to transform my creativity and knoledge into a
            website. I always strive to learn about the newest technologies and
            frameworks. I can also develop other desktop, mobile applications. I
            can pretty much develop any kind of software
            <br />
            <br />
            As for my educational iam a Computer Engineering Diploma Holder
            Current pursuing Btech in computer science and engineering
          </p>
        </div>
        <div className="m-20 md:m-10 ">
          <LazyLoadImage data-aos="zoom-in" src={bg2} alt=""></LazyLoadImage>
        </div>
      </section>
      <section className="mx-auto width_limit">
        <div className="flex justify-between mt-6 ml-4 ">
          <div>
            <h1 className="text-lg font-semibold md:text-2xl ">
              #Contacts<span> -----------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto md:flex-row">
          <div className="mt-10 ml-4 font-semibold ">
            <p className="text-sm md:text-base">
              I’m interested in Job opportunities including freelance . However,
              if you have other request or question, don’t hesitate to contact
              me
            </p>
          </div>
          <div className="m-4 md:m-10">
            <div
              className="w-64 h-32 border md:m-2 pic hide -z-20"
              data-aos="fade-up"
            >
              <p className="mx-4 mt-2 text-xs font-bold text-white md:text-base">
                Message me here
              </p>
              <div className="p-2">
                <LazyLoadImage
                  loading="lazy"
                  src={Gmail}
                  className="inline m-2 hover:text-white"
                  alt=""
                ></LazyLoadImage>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                  className="text-xs hover:text-white md:text-base "
                >
                  shinoyshinoo@gmail.com{" "}
                </a>
                <br />
                <LazyLoadImage
                  src={Disc}
                  data-aos="fade-up"
                  className="inline m-2 "
                  alt=""
                ></LazyLoadImage>
                <a
                  href="https://discord.com/login"
                  className="text-xs hover:text-white md:text-base"
                >
                  falcon #0900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
