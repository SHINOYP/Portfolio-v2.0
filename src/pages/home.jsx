import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../Data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skill from "../img/skill-bg.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import Aos from "aos";
import bg2 from "../img/bg-2.svg";
import ProjectBox from "../Components/ProjectCard/project_Box";
import BlobAnimation from "../Components/BlobAnimation/BlobAnimation";
import TyingAnimation from "../Components/TypingAnimation";
const React = require("react");

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Web developer";

  useEffect(() => {
    let currentIndex = 0;

    const typingEffect = () => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
        setTimeout(typingEffect, 100); // Adjust typing speed here (milliseconds)
      }
    };

    typingEffect();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800 });
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transitionDuration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <div className="justify-between mx-auto md:flex width_limit">
          <div className="mt-20 ml-2 font-semibold md:ml-10 ">
            <h1 className="text-4xl md:text-5xl">
              {" "}
              <TyingAnimation text={"hi iam a"} speed={"100"} />
              <span>
                {" "}
                <br />
                <TyingAnimation
                  text={"Software Development Engineer"}
                  speed={"200"}
                />
              </span>
            </h1>
            <p className="my-2 text-base md:text-lg">
              He who crafts software where technologies meet creativity
            </p>
            <form className="text-sm ">
              <button className="px-2 my-1 border-2 border-purple-700 border-solid hover:bg-purple-700 md:px-2 md:my-4 md:px-6 md:py-1 -py-1 md:my-2">
                <a href="https://wa.me/+918589922327">contact me !!</a>
              </button>
            </form>
          </div>
          <div className="flex-col m-10 ">
            <BlobAnimation />
            {/* <img src={SelfPotrait} data-aos="zoom-out"  className="rounded-full sm:w-2/3 " alt=""></img> */}
            {/* <div className="flex ml-3 border-2 w-fit border-zinc-400 xl:ml-16">           
              <p className="flex mx-1 mx-auto text-xs align-center md:mx-10">
                Currently working on improving skills.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col mx-3">
          <div className="p-4 mx-auto mt-6 border ">
            <h1 className="text-xs md:text-base">
              {" "}
              Consistency is the key to success !
            </h1>
          </div>
          <div className="mx-auto ">
            <h1 className="p-1 text-xs border -bottom-0 md:ml-96 md:px-6 text-wid">
              -____{" "}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto width_limit">
        <div className="flex items-center justify-between mt-10 ml-4 md:ml-10">
          <div>
            <h1 className="text-xl font-semibold md:text-2xl ">
              <span> #</span>projects<span>--------</span>{" "}
            </h1>
          </div>
          <div>
            <span
              onClick={() => navigate("/Project")}
              className="mr-6 text-xs hover:text-white "
            >
              view all --
            </span>
          </div>
        </div>

        <div className="flex flex-wrap mx-6 mt-10 sm:mt-0 ">
          {projects?.map((pr, index) => (
            <div key={index} data-aos="">
              <ProjectBox key={pr.id} data={pr} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto width_limit">
        <div className="flex justify-between my-20 mt-10 ml-4 md:ml-10">
          <div className="">
            <h1 className="text-xl font-semibold md:text-2xl">
              <span> #</span>skills<span>--------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex-col md:flex md:flex-row">
          <div className="m-20 md:m-10 ">
            <LazyLoadImage src={Skill} alt=""></LazyLoadImage>
          </div>
          <div
            data-aos="fade-up"
            className="flex-col m-2 md:flex md:ml-4 md:flex-row"
          >
            <div className="h-32 m-2 font-bold border border-purple-700 text-md pic hide md:w-40">
              <h3 className="p-2 text-white border-b border-b-2 ">Languages</h3>
              {/* &nbsp;&nbsp;C &nbsp;&nbsp;&nbsp; C++&nbsp;&nbsp;&nbsp; */}
              &nbsp;Html&nbsp;JavaScript &nbsp;Css&nbsp;Typescript&nbsp;
              &nbsp;C,C++ &nbsp;Java
            </div>
            <div
              data-aos="fade-up"
              className="h-32 m-2 text-lg border border-purple-700 pic hide md:w-40"
            >
              <h3 className="p-2 text-white border-b border-b-2 ">Databases</h3>
              &nbsp;Mysql&nbsp;MongoDb&nbsp;&nbsp; &nbsp;PostgreSql
            </div>
            <div
              data-aos="fade-up"
              className="h-32 m-2 text-lg border border-purple-700 pic hide md:w-40"
              style={{ width: "auto" }}
            >
              <h3 className="p-2 text-xl text-white border-b border-b-2 ">
                Tools
              </h3>
              &nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;Tailwind&nbsp;&nbsp;&nbsp;&nbsp;Node.js&nbsp;
              &nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;&nbsp;Nextjs &nbsp; Aws
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto width_limit">
        <div className="flex justify-between mt-10 ml-4 md:ml-10">
          <div className="">
            <h1 className="text-xl font-semibold md:text-2xl">
              <span> #</span>about<span>--------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto md:flex-row">
          <div className="mt-10 ml-4 md:ml-10 md:bg-60px ">
            <p className="text-sm font-semibold md:text-base">
              I’m a self-taught Full Stack developer based in kerala,India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. As i was looking for a
              domain to chose i stumpled upon fullstack web development,in which
              iam pretty intereted in .Trying to transform my creativity and
              knoledge into a website. I always strive to learn about the newest
              technologies and frameworks. I can also develop other desktop,
              mobile applications. I can pretty much develop any kind of
              software
              <br />
              <br />
              As for my educational iam a Computer Engineering Diploma Holder
              Current pursuing Btech in computer science and engineering
            </p>
            <form className="">
              <button
                onClick={() => navigate("/About")}
                className="px-2 mt-10 text-xs border-2 border-purple-700 border-solid hover:bg-purple-700 md:px-4 md:py-1 "
              >
                <span>View all -- </span>
              </button>
            </form>
          </div>
          <div className="m-20 md:m-10 ">
            <LazyLoadImage src={bg2} data-aos="fade-up" alt=""></LazyLoadImage>
          </div>
        </div>
      </section>

      <section className="mx-auto width_limit">
        <div className="flex justify-between mt-6 ml-4 md:ml-10">
          <div className="">
            <h1 className="text-xl font-semibold md:text-2xl ">
              #Contacts<span>--------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto md:flex-row">
          <div className="mt-10 ml-4 font-semibold md:ml-10 ">
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
                <img src={Disc} className="inline m-2 " alt=""></img>
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
