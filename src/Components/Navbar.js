import React, { useState, useEffect } from "react";
import "./Nav.css";
// import "./Nav-sm.css";
import {motion} from 'framer-motion'

import { NavLink } from "react-router-dom";
import logo from "../files/svg.gif";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //  const navItems = document.querySelectorAll('.Nav-link');

  // // Add click event listener to each navbar item
  //    navItems.forEach(item => {
  //   item.addEventListener('click', () => {
  //     // Remove 'active' class from all navbar items
  //     navItems.forEach(navItem => navItem.classList.remove('active'));

  //     // Add 'active' class to the clicked navbar item
  //     item.classList.add('active');
  //   });
  // });
  //   }, []);
  return (
    <>
      <nav className="Container" id={open ? "open" : ""} >
        <div className="Logo">
          <NavLink to={"/"}>
            {" "}
            <img src={logo} alt="" />{" "}
          </NavLink>
        </div>

        <motion.div className="Navbar-nav"
            initial={{  translateY: -50 }}
            animate={{  translateY: 0 }}
            transition={{ duration: 0.4 }}
        
        
        >
          <div className="Nav-item">
            <a class="Nav-link" to="/">
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
