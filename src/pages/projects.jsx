import { useEffect } from "react";
import ProjectBox from "../Components/ProjectCard/project_Box";
import { motion } from "framer-motion";
import { projects } from "../Data";
const React = require("react");

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className=" mx-auto m-10   width_limit">
        <div className=" flex justify-between  md:ml-10 ml-4  mt-10 items-center ">
          <div>
            <h1 className="md:text-2xl text-xl font-semibold">
              {" "}
              <span>#</span>projects <span> --------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-6">
          {projects?.map((pr) => (
            <ProjectBox key={pr.id} data={pr} />
          ))}
        </div>
      </section>
      <section className=" mx-auto m-10   width_limit">
        <div className=" flex justify-between  md:ml-10 ml-4  mt-10 items-center ">
          <div className="">
            <h1 className="md:text-2xl text-xl font-semibold">
              Small <span>projects</span> <span> --------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-6">
          {projects?.map((pr) => (
            <ProjectBox key={pr.id} data={pr} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
