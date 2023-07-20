import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import project1 from "../files/project1.png";
import image3 from "../files/image3.png";
import { GoLinkExternal } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="main-div-projects" id="projects">
        <h1>Projects</h1>

        <div className="projects">
          <div className="project">
            <motion.div
              className="project_img"
              initial={{ translateX: -100 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
                <div className="overlay"></div>
                <img src={image3} alt="project 1" />
             
            </motion.div>
            <motion.div
              className="project_details"
              initial={{ translateX: 100 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>
                <h3>Reviser</h3>
                <div className="project_icons"> 
                <a href="http://reviser-client.vercel.app/" target="_blank">  <GoLinkExternal/> </a>
                <a href="https://github.com/vk-0-7/Reviser-client"><BsGithub/></a>
                  </div> 
              </span>
                  <div className="aboutProject">
                    <p>The web app project is designed as a comprehensive vocabulary management tool. Users can create an account and add new words along with their meanings, antonyms, synonyms, and examples, which are stored in a database for future reference. The app also offers a revision feature, where user can generate a quiz of their saved words. <br />
                    In addition, the app provides a  feature where users can opt to receive daily emails containing two new words. This subscription service enhances users' vocabulary by delivering a manageable dose of new words each day.A Quiz game  will also be conducted at the end of every week.
                    </p> 
                  </div>

            </motion.div>
          </div>
          <div className={`${"project"} ${"even"}`}>
            <motion.div className="project_img"
              initial={{ translateX: 100 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
               <div className="overlay"></div>
                <img src={project1} alt="project 1" />
              
            </motion.div>
            <motion.div className="project_details"
             initial={{ translateX: -100 }}
             whileInView={{ translateX: 0 }}
             transition={{ duration: 0.4 }}
             viewport={{ once: true }}
            >
              <span>
                <h3>Covid-Counter</h3>
                <div className="project_icons"> 
                <a href="https://corona-count.000webhostapp.com/">  <GoLinkExternal/> </a>
               <a href="https://github.com/vk-0-7/corona-count"><BsGithub/></a> 
                  </div>  
              </span>
              <div className="aboutProject">
                    <p>
The COVID-19 data visualization project leverages APIs to retrieve real-time information regarding the global pandemic. The project presents the data in a user-friendly manner, featuring a table that displays country-specific statistics, including the number of infected, recovered, and deceased individuals. <br />
 Additionally, the project incorporates a graph to provide a visual representation of the data, enabling users to track the trends and patterns of the virus over time. Furthermore, a world map is included to visualize the global impact of the infection, offering an interactive experience that enhances users' understanding of the magnitude and distribution of COVID-19 cases worldwide.</p> 
                  </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
