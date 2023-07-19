import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";

import {SiLeetcode,SiGeeksforgeeks} from 'react-icons/si'
import {FaBitbucket,FaJira} from 'react-icons/fa'
import { FaInstagram,FaTwitter } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import {AiOutlineGithub } from "react-icons/ai"


import logo from "../files/svg.gif";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="main-body" id="Contact">
      <div className="contact">
        {/* <h2> Get in Touch</h2> */}
         <div className="icons">
        <a
          href='mailto:vivekr4400@gmail.com?subject="subject"&body=Hello'
          target="_blank"
          rel="noopener noreferrer"
        >

          <MdEmail  />
        </a>
        <a
          href='https://leetcode.com/vivekr4400/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode  />
        </a>
        <a
          href='https://auth.geeksforgeeks.org/user/vivekr4400'
          target="_blank"
          rel="noopener noreferrer"
        >
         <SiGeeksforgeeks/>
        </a>
        <a
          href="https://www.instagram.com/vivek07____/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram  />
        </a>
        <a
          href="https://twitter.com/Vivek05024650"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter  />
        </a>

        <a href="https://github.com/vk-0-7">
          <AiOutlineGithub  />
        </a>
        <a href="https://bitbucket.org/vivek_07/workspace/overview">
          <FaBitbucket  />
        </a>
        <a href="https://cfuturetechtech.atlassian.net/jira/people/63aae7fa2c70aae1e6f9af9d">
          <FaJira  />
        </a>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
