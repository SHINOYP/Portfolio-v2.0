import { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../Data";
import ProjectBox from "../Components/ProjectCard/project_Box";
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
      <section className="m-10 mx-auto width_limit">
        <div className="flex items-center justify-between mt-10 ml-4 md:ml-10">
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">
              {" "}
              <span>#</span>projects <span> --------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-6">
          {projects?.map((pr, index) => (
            <ProjectBox key={index} data={pr} />
          ))}
        </div>
      </section>
      <section className="m-10 mx-auto width_limit">
        <div className="flex items-center justify-between mt-10 ml-4 md:ml-10">
          <div className="">
            <h1 className="text-xl font-semibold md:text-2xl">
              Small <span>projects</span> <span> --------</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-6">
          {projects?.map((pr, index) => (
            <ProjectBox key={index} data={pr} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
