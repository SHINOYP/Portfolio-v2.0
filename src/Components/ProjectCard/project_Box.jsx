import "./ProjectBoxStyles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GitHubIcon from "@mui/icons-material/GitHub";
const React = require("react");

export default function Project_box({ data }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div
          data-aos="fade-up"
          className="flip-card-front  bg-gradient-to-r from-indigo-800 via-purple-800 to-gray-700  "
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
            <p className="  mr-2 leading-4 overflow-hidden  text-[10px] md:text-xs text-white">
              {data.description}
            </p>
          </div>
        </div>
        <div class="flip-card-back">
          <a href={data.link}>
            <GitHubIcon
              sx={{ fontSize: "3rem" }}
              className="m-3 hover:text-purple-500"
            />
          </a>
          <LiveTvIcon
            sx={{ fontSize: "3rem" }}
            className="m-3 hover:text-purple-500"
          />
        </div>
      </div>
    </div>
  );
}
