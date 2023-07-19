import React from "react";
import "./Projects.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import project1 from "../files/project1.png";
import image3 from "../files/image3.png";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="main-div-projects" id="projects">
        <h1>Projects</h1>

        <div className="carousel-items">
          <div>
            <a href="http://reviser-client.vercel.app/">
              <img src={image3} alt="project 1" />
            </a>
          </div>
          <div >
            <a href="http://reviser-client.vercel.app/">
              <img src={project1} alt="project 1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
