import SIT_img from "../img/sit.svg";
import Coming_soon from "../img/working.png";
import Skill from "../img/skill-bg.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import {motion} from 'framer-motion';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import bg2 from "../img/bg-2.svg"
const React=require("react");

export default function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <motion.div
        
        initial={{opacity:0}}
        animate={{opacity:1 ,transitionDuration:1}}
        exit={{opacity:0}}
        
        >
            <section>
                <div className="md:flex justify-between mx-auto width_limit"> 
                    <div  className="mt-20 ml-2 md:ml-10 font-semibold ">           
                    <h1  className="md:text-5xl text-4xl"> hi iam a <span >  <br/> web developer</span></h1>
                    <p  className=" my-2 text-base md:text-lg " >He who crafts responsive website where technologies meet creativity</p>
                    <form  className=" text-sm">
                        <button className="border-solid border-2 border-purple-700  hover:bg-purple-700 md:px-2 md:my-4 md:px-6 px-2 md:py-1 -py-1 my-1 md:my-2" ><a href="./contact.html">contact me !!</a></button>
                    </form>
                    </div>
                    <div  className="m-10 flex-col ">
                        <img src={SIT_img} data-aos="zoom-out" alt=""></img>
                        <p  className=" px-8  md:px-12 text-xs align-center md:mx-10 mx-1" >Currently working on improving skills.</p>
                    </div>
                </div>
            </section>
            <section  >
                <div className="flex flex-col mx-3">
                    <div className="border mx-auto  mt-6 p-4 " > 
                        <h1 className="text-xs md:text-base" > if your code works fine Don't touch it</h1>
                    </div>
                    <div className=" mx-auto "  > 
                        <h1 className="-bottom-0  border  md:ml-96 md:px-6  text-wid  p-1 text-xs">-nerd </h1>
                    </div>
                </div>
            </section>
            
            <section className=" mx-auto width_limit"  >
                <div className=" flex justify-between  md:ml-10 ml-4  mt-10 items-center ">
                    <div>
                        <h1 className="md:text-2xl text-xl font-semibold " ><span> #</span>projects<span >--------</span> </h1>
                    </div>
                    <div >
                        <a href="./projects.html" className="hover:text-white mr-6 text-xs ">view all --</a>
                    </div>
                </div>
                
                <div className="flex flex-wrap mx-6 " >
                    <div data-aos="fade-right" className=" pic hide md:w-80 md:h-72  mx-auto md:ml-10 md:mt-16 mt-10 "> 
                        <img src={Coming_soon} className="border border-purple-700 "alt="" ></img>

                    </div>
                    <div data-aos="fade-left" className="  pic hide md:w-80 md:h-72   mx-auto md:ml-10 md:mt-16 mt-4"> 
                        <img src={Coming_soon} className="border border-purple-700 "alt=""></img>

                    </div>
                    <div data-aos="fade-right" className="  pic hide md:w-80 md:h-72 mx-auto md:ml-10 md:mt-16 mt-4 "> 
                        <img src={Coming_soon} className="border border-purple-700 "alt=""></img>

                    </div>
                </div>


            </section>
        
            <section className=" mx-auto width_limit" >
                <div className=" flex justify-between  md:ml-10 ml-4  mt-10 my-20 ">
                    <div className="">
                        <h1 className="md:text-2xl text-xl font-semibold" ><span> #</span>skills<span>--------</span> </h1>
                    </div>
                </div>
                <div className="md:flex  flex-col md:flex-row">
                    <div className="md:m-10 m-20  ">
                        <img src={Skill}  alt=""></img>
                    </div>
                    <div  data-aos="fade-up" className="md:flex  md:ml-4 m-2  flex-col md:flex-row" >
                        <div className=" pic hide md:w-40  h-32 border border-purple-700 m-2 " > 
                            <h3 className=" border-b-2 border-b text-white p-2">Languages</h3>
                            &nbsp;&nbsp;C  &nbsp;&nbsp;&nbsp;  C++&nbsp;&nbsp;&nbsp; Html&nbsp;&nbsp;&nbsp;Css
                            &nbsp;JavaScript&nbsp;php
                        </div>
                        <div data-aos="fade-up" className=" pic hide md:w-40 h-32 border border-purple-700 m-2"> 
                            
                            <h3 className=" border-b-2 border-b text-white p-2">Databases</h3>
                            &nbsp;&nbsp;Mysql &nbsp;&nbsp;&nbsp;SQL &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div  data-aos="fade-up" className=" pic hide md:w-40 h-32 border border-purple-700 m-2" style={{width: "auto"}}> 
                            
                            <h3 className=" border-b-2 border-b text-white p-2">Frameworks</h3>
                            &nbsp;&nbsp;VisualStudio&nbsp;&nbsp;&nbsp;&nbsp;Tailwind&nbsp;&nbsp;&nbsp;&nbsp;Canvas&nbsp;
                        
                        </div>
                    </div>
                        
                </div>    
            </section>
        
            <section className=" mx-auto  width_limit" >
                <div className=" flex justify-between md:ml-10 ml-4  mt-10  ">
                    <div className="">
                        <h1 className="md:text-2xl text-xl font-semibold" ><span> #</span>about<span >--------</span> </h1>
                    </div>
                </div>
                <div className="flex  flex-col md:flex-row justify-between mx-auto" >
                    <div className="mt-10 md:ml-10 ml-4  md:bg-60px ">           
                        <p className=" text-sm md:text-base  font-semibold ">
                                    I’m a self-taught front-end developer based in kerala,India.
                                    I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                                    As i was looking for a domain to chose i stumpled upon fullstack we development,in which iam pretty intereted in
                                    .Trying to transform my creativity and knoledge into a website.
                                    I always strive to learn about the newest technologies and frameworks.
                                    Iam trying to work my way upto a full stack developer.
                                    <br/><br/>As for my educational qualifcation iam Currently pursuing a diploma in computer engineering , i'm Currently
                                    at my final year of college.Hoping to land on a job as soon as finishing college.
                        </p>
                        <form className="">
                            <button className="border-solid border-2 border-purple-700 hover:bg-purple-700 md:px-4 md:py-1 px-2 mt-10  text-xs " >
                            <a href="./about.html">View all -- </a></button>
                        </form>
                    </div>
                    <div className="m-20 md:m-10 ">
                        <img src={bg2} alt=""></img>
                    </div>
                        
                </div>
            </section>
        
            <section className=" mx-auto  width_limit">
                <div className=" flex justify-between md:ml-10 ml-4  mt-6  ">
                        <div className="">
                            <h1 className="md:text-2xl text-xl font-semibold " >#Contacts<span>--------</span> </h1>
                        </div>
                </div>
                <div className="flex  flex-col md:flex-row justify-between mx-auto">
                    <div className="mt-10 md:ml-10 ml-4  font-semibold ">                   
                    <p className="text-sm md:text-base">I’m interested in Job opportunities including freelance . However, if you have other request or question, don’t hesitate to contact me</p>
                    </div>
                    <div className="md:m-10  m-4">
                        <div className=" w-64 h-32 border  md:m-2 pic hide  " data-aos="zoom-in"> 
                            <p className=" font-bold mx-4 text-white text-xs md:text-base">Message me here</p>
                            <img src={Gmail} className="m-2 inline hover:text-white" alt=""></img>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"className="hover:text-white text-xs md:text-base ">shinoyshinoo@gmail.com </a>
                            <br/><img src={Disc} className="m-2 inline " alt=""></img>
                            <a href="https://discord.com/login" className="hover:text-white text-xs md:text-base">falcon #0900</a>
                        </div>
                    </div>
                    
                </div> 
            </section> 

        </motion.div>
    )
}

