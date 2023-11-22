import React, {useState} from "react";

import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState('navbarMenu')
  const [nav, setNav] = useState('navbar-two')
  const navBarBg = () =>{
      if(window.scrollY >= 10){
        setNav('navbar-two navbar-two-bg')
      }else{
        setNav('navbar-two')
      }
  }
  window.addEventListener('scroll', navBarBg)
  const showNavbar = () =>{
    setActive('navbarMenu showNavbar')
  }
  const removeNavbar = () =>{
    setActive('navbarMenu')
  }
  return (
    <div className="navbar flex">
      <div className="navbar-one flex">
        <div>
          <SiConsul />
        </div>
        <div className=" none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span> 
          <span>Sign Out</span>
        </div>
      </div>
      <div className={nav}>
        <div className="logoDiv">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar} className="listItem">Home</li>
            <li onClick={removeNavbar} className="listItem">About</li>
            <li onClick={removeNavbar} className="listItem">Offers</li>
            <li onClick={removeNavbar} className="listItem">Seats</li>
            <li onClick={removeNavbar} className="listItem">Destinations</li>
          </ul>
        <button onClick={removeNavbar} className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={active === 'navbarMenu'? showNavbar: removeNavbar} className="toggleIcon">
          <CgMenuGridO className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
