
import {Link} from "react-router-dom";
import LOGO from "../img/box.svg"
import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
const React=require('react');




export default function navbar(){
    return(
      <>
      <header className="sticky top-0 flex justify-between items-center mx-auto md:py-4 py-3 text-lg  width_limit" style={{ zIndex:1000 }} >
            <div className="flex items-center">
                <img src={LOGO}  className="px-3 " alt="" style={{width: '50px' , height: '50px' ,zIndex:3000}}></img>
                <p className="font-bold  text-white md:text-lg text-base" style={{zIndex:3000}}> Shino </p>
            </div>
            <div className="flex hidden md:inline ">
                <Link to="./"  className="px-3 hover:text-white"> <span > #</span>home</Link>
                <Link to="./Project"  className="px-3  hover:text-white"><span> #</span>works </Link>
                <Link to="./About"  className="px-3 hover:text-white"> <span > #</span>about-me</Link>
                <Link to="./Contact"  className="px-3 hover:text-white"> <span > #</span>contact</Link>
            </div>
            <div className="md:hidden">
                <input type="checkbox" id="navi-toggle" className="checkbox" />
                <label for="navi-toggle" className="button">
                    <span className="icon">&nbsp;</span>
                </label>
                <div className="background">&nbsp;</div>

                
                <nav className="nav  " >
                    <ul className="list">
                    <li className="item "> <a href="./" className="px-3 link hover:border-x-4 py-2 my-2 "><span > #</span>home</a></li>
                    <li className="item"> <a href="./project" className="px-3  link hover:border-x-4 py-2 my-2"><span > #</span>works</a> </li>
                    <li className="item"> <a href="./About" className="px-3   link hover:border-x-4 py-2 my-2"><span > #</span>about-me</a> </li>
                    <li className="item"> <a href="./Contact" className="px-3 link hover:border-x-4 py-2 my-2  text-white"><span > #</span>contact</a> </li>
                    </ul>
                    <div className="absolute flex items-center align-center" style={{ top: '680px' , left:'110px' }}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"className=" mx-2"><img src={Gmail} alt=""></img> </a>
                        <a href="https://discord.com/login"><img src={Disc} className="mx-2" alt=""></img></a>
                        <a href="https://github.com/Shinoyp"><img src={Git} className="mx-2" alt=""></img></a>
                        <a href="https://www.instagram.com/shinoy._.p/"><img src={Inst} className="mx-2" alt=""></img></a>
                    </div>
                </nav>
            </div>
        
      </header>
      </>
    )
}