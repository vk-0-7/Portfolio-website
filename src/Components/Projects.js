import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../files/image1.png";
import smimg1 from '../files/sm_img1.jpg'
import smimg2 from '../files/sm_img2.jpg'
import image2 from "../files/image2.png";
import image3 from "../files/image3.png";

import { GoLinkExternal } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const Projects = () => {





  return (
    <>
      <div className="main-div-projects" id="projects">
        <h1>Projects</h1>

        <div className="projects">
          <div className={`${"project"} ${"even"}`}>
            <div className="project_img"
            >
              <div className="overlay"></div>
              <img src={image1} alt="project 1" />

            </div>
            <div className="project_details"
            >
              <span>
                <h3>Chatty</h3>
                <div className="project_icons">
                  <a href="https://chat-ty.vercel.app/">  <GoLinkExternal /> </a>
                  <a href="https://github.com/vk-0-7/chatty"><BsGithub /></a>
                </div>
              </span>
              <div className="aboutProject">
                <p>
                  This is a real time messaging app build in MERN stack along with socket.io for making real time connections.It has features like fully functional authentication system, profile picture uploading using cloudinary, creating group with your friends,notification system and much more.
                  Tech stacks used in this Project is - React.js ,Scss, Node.js, MongoDB, Socket.io .It has auth system with token using jwt and password encryption using bcrypt . Frontend is deployed on vercel and Backend on AWS ec2.




                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <div
              className="project_img">
              <div className="overlay"></div>
              <img src={image2} alt="project 1" />

            </div>
            <div
              className="project_details"
            >
              <span>
                <h3>Reviser</h3>
                <div className="project_icons">
                  <a href="http://reviser-client.vercel.app/" rel="noreferrer" target="_blank">  <GoLinkExternal /> </a>
                  <a href="https://github.com/vk-0-7/Reviser-client"><BsGithub /></a>
                </div>
              </span>
              <div className="aboutProject">
                <p>The web app project is designed as a comprehensive vocabulary management tool. Users can create an account and add new words along with their meanings, antonyms, synonyms, and examples, which are stored in a database for future reference. The app also offers a revision feature, where user can generate a quiz of their saved words. <br />
                  In addition, the app provides a  feature where users can opt to receive daily emails containing two new words. This subscription service enhances users' vocabulary by delivering a manageable dose of new words each day.A Quiz game  will also be conducted at the end of every week.
                </p>
              </div>

            </div>
          </div>
          <div className={`${"project"} ${"even"}`}>
            <div className="project_img"
            >
              <div className="overlay"></div>
              <img src={image3} alt="project 1" />

            </div>
            <div className="project_details"
            >
              <span>
                <h3>Covid-Counter</h3>
                <div className="project_icons">
                  <a href="#">  <GoLinkExternal /> </a>
                  <a href="https://github.com/vk-0-7/corona-count"><BsGithub /></a>
                </div>
              </span>
              <div className="aboutProject">
                <p>
                  The COVID-19 data visualization project leverages APIs to retrieve real-time information regarding the global pandemic. The project presents the data in a user-friendly manner, featuring a table that displays country-specific statistics, including the number of infected, recovered, and deceased individuals. <br />
                  Additionally, the project incorporates a graph to provide a visual representation of the data, enabling users to track the trends and patterns of the virus over time. Furthermore, a world map is included to visualize the global impact of the infection, offering an interactive experience that enhances users' understanding of the magnitude and distribution of COVID-19 cases worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
