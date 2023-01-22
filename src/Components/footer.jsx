import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
const React = require("react");


export default function footer(){
    const date=new Date().getFullYear();
return(
        <footer className="sticky footer flex justify-between  items-center mx-auto py-7 text-lg border-t-2 border-t-white  width_limit" > 
            <div className="md:ml-10 ml-2 ">
                <small className="text-xs">&copy; Copyright {date} ,Shino</small> 
            </div>
            <div className="flex items-center ">
                <a href="https://discord.com/login"><img src={Git} className="mr-6 " alt="" ></img></a>
                <a href="https://github.com/Shinoyp"><img src={Inst} className="mr-6" alt=""></img></a>
            </div>
        </footer> 
    )   
}