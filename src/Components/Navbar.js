import React, { useState, useEffect } from "react";
import "./Nav.css";
import { AiTwotonePhone } from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi"
// import "./Nav-sm.css";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import logo from "../files/svg.gif";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={"Container"}>
        <div className="open_logo">
        <div className="Logo">
          <NavLink to={"/"}>
            {" "}
            <img src={logo} alt="" />{" "}
          </NavLink>
        </div>

       

        </div>
        <div className={` ${open ? "open_menu":"lg_menu"} `}>
        <motion.div
          className="Navbar-nav"
          initial={{ translateY: -50 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="Nav-item">
            <a class="Nav-link" href="#about">
              About
            </a>
          </div>
          <div className="Nav-item">
            <a class="Nav-link" href="#skills">
              Skills
            </a>
          </div>

          <div className="Nav-item">
            {" "}
            <a class="Nav-link" href="#projects">
              Projects
            </a>
          </div>

          <div className="Nav-item">
            {" "}
            <a class="Nav-link" href="#Contact">
              Contact
            </a>{" "}
          </div>
        </motion.div>

        {
          open && 
          <div className="contact_nav">
            <span> <AiTwotonePhone/> +91-9608945441 <br /></span>
            <span> <HiOutlineMail/> vivekr4400@gmail.com </span>
          </div>
        }

        </div>
<div className="menuicon">
          <div
            id="menu_icon_container"
            className={open ? "open_menu_icon" : ""}
            onClick={() => {
              setOpen((old) => !old);
            }}
          >
            {/* line 1 */}
            <div className="menu_line_one"></div>
            {/* line 2 */}
            <div className="menu_line_two"></div>
            {/* line 3 */}
            <div className="menu_line_three"></div>
          </div>
        </div>
       
       
      </nav>
    </>
  );
};

export default Navbar;
