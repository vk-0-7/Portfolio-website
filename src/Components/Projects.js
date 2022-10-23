import React from 'react'
import './Projects.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import project1 from"../files/project1.png"

const Projects = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="main-div-projects">

      <div className="project_text">
        <p>Projects</p>
      </div>

      <div className="carousel-items">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="https://incorrect-jeopardy1.000webhostapp.com/" target="_blank"  rel="noreferrer" ><img
          className="d-block w-100"
          src={project1}
          alt="First slide"
        /> </a>
        <Carousel.Caption>
          <h3>Project-1</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="https://incorrect-jeopardy1.000webhostapp.com/" target="_blank"  rel="noreferrer" ><img
          className="d-block w-100"
          src=""
          alt="Second slide"
        /> </a>
        <Carousel.Caption>
          <h3>Project-2</h3>
          <p>This Projects shows world-wide corona cases on real time APIs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1651156979722-5aca6096ec65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Project-3</h3>
          <p>
            Third Project will be Uploaded here soon....
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>

   </div>
    </>
    )
}

export default Projects