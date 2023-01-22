import work from "../img/working.png"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const React =require("react");
;

export default function Project_box(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div data-aos="fade-up" className=" pic hide  md:w-80 md:h-72  mx-auto md:ml-10 md:mt-16 mt-10 "> 
            <img alt=""  src={work} className="border border-purple-700 " ></img>
        </div>
        </>
    )
}