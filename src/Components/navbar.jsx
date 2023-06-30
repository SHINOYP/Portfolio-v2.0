import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LOGO from "../img/box.svg";
import Git from "../img/git.svg";
import Inst from "../img/instagram.svg";
import Disc from "../img/discord.svg";
import Gmail from "../img/gmail.svg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const React = require("react");


export default function Navbar() {
  const [check,setCheck]=useState(true);
  const navigate=useNavigate()
  return (
    <>
      <header
        className="sticky top-0 flex justify-between items-center mx-auto md:py-4 py-3 text-lg  width_limit"
        style={{ zIndex: 1000 }}
      >
        <div onClick={()=>navigate('/')} className="flex items-center">
          <img
            src={LOGO}
            className="px-3 "
            alt=""
            style={{ width: "50px", height: "50px", zIndex: 3000 }}
          ></img>
          <p
            className="font-bold  text-white md:text-lg text-base"
            style={{ zIndex: 3000 }}
          >
            {" "}
            Shino{" "}
          </p>
        </div>
        <div className={check?'menu-items':'menu-items active'}>
          <Link onClick={()=>setCheck(true)} to="./" className="px-3 hover:text-white">
            {" "}
            <span> #</span>home
          </Link>
          <Link to="./Project"  onClick={()=>setCheck(true)}className="px-3  hover:text-white">
            <span> #</span>works{" "}
          </Link>
          <Link to="./About"  onClick={()=>setCheck(true)}className="px-3 hover:text-white">
            {" "}
            <span> #</span>about-me
          </Link>
          <Link to="./Contact" onClick={()=>setCheck(true)} className="px-3 hover:text-white">
            {" "}
            <span> #</span>contact
          </Link>
          <div
              className="absolute md:hidden flex bottom-10 items-center "
              
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                className=" mx-2"
              >
                <img src={Gmail} alt=""></img>{" "}
              </a>
              <a href="https://discord.com/login">
                <img src={Disc} className="mx-2" alt=""></img>
              </a>
              <a href="https://github.com/Shinoyp">
                <img src={Git} className="mx-2" alt=""></img>
              </a>
              <a href="https://www.instagram.com/shinoy._.p/">
                <img src={Inst} className="mx-2" alt=""></img>
              </a>
            </div>
        </div>
        {/* <div className="md:hidden">
          <input type="checkbox" id="navi-toggle" className="checkbox" checked={check}  />
          <label for="navi-toggle" className="button">
            <span className="icon">&nbsp;</span>
          </label>
          <div className="background">&nbsp;</div>

          <nav className="nav  ">
            <ul className="list">
              <li className="item ">
                {" "}
                <Link to="./" onClick={()=>setCheck(false)} className="px-3 link hover:border-x-4 py-2 my-2 ">
                  <span> #</span>home
                </Link>
              </li>
              <li className="item">
                {" "}
                <Link
                  to="./Project"
                  className="px-3  link hover:border-x-4 py-2 my-2"
                >
                  <span> #</span>works
                </Link>{" "}
              </li>
              <li className="item">
                {" "}
                <Link
                  to="./About"
                  className="px-3   link hover:border-x-4 py-2 my-2"
                >
                  <span> #</span>about-me
                </Link>{" "}
              </li>
              <li className="item">
                {" "}
                <Link
                  to="./Contact"
                  className="px-3 link hover:border-x-4 py-2 my-2  text-white"
                >
                  <span> #</span>contact
                </Link>{" "}
              </li>
            </ul>
            <div
              className="absolute flex items-center align-center"
              style={{ top: "680px", left: "110px" }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shinoyshinoo@gmail.com"
                className=" mx-2"
              >
                <img src={Gmail} alt=""></img>{" "}
              </a>
              <a href="https://discord.com/login">
                <img src={Disc} className="mx-2" alt=""></img>
              </a>
              <a href="https://github.com/Shinoyp">
                <img src={Git} className="mx-2" alt=""></img>
              </a>
              <a href="https://www.instagram.com/shinoy._.p/">
                <img src={Inst} className="mx-2" alt=""></img>
              </a>
            </div>
          </nav>
        </div> */}
        <div className="menu-icon md:hidden flex" >
          <li className='list-none'  onClick={()=>{check?setCheck(false):setCheck(true)}} >{check?<MenuIcon/> :<CloseIcon/>}</li>
        </div>
      </header>
    </>
  );
}
