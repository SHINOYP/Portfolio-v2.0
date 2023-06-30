import work from "../img/working.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const React = require("react");

export default function Project_box({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  console.log(data.image);

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col md:w-80  h-72 md:h-72 p-3 mx-auto rounded-md bg-gradient-to-r from-indigo-800 via-purple-800 to-gray-700  md:ml-10 md:mt-16 mt-10 "
       
      >
        
        <img
          alt=""
          src={`${data?.image}`}
          className=" border rounded-md border-purple-700 mb-1 mx-auto "
        ></img>
        {/* <a href={data.link} className="">
          Visit
        </a> */}
        <div className="flex flex-col  ">
          <h4 className=" font-bold text-lg text-white">{data.name}</h4>
          <p className="  mr-2 leading-4 overflow-hidden  text-xs text-white">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
}
