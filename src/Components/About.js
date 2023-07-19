import React from "react";
import "./About.css";

import { yellow } from "@mui/material/colors";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import { motion } from "framer-motion";
import { techStackData } from "../data/data";
import { gsap } from "gsap";
// import  ScrollTrigger  from "gsap";
// import  {ScrollSmoother}  from "gsap/ScrollSmoother";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  return (
    <div className="smooth-wrapper" >
      <div className="main-div-home" >
       <motion.div className="left-part"
             initial={{ opacity: 0, translateY: 100 }}
             animate={{ opacity: 1, translateY: 0 }}
             transition={{ duration: 0.5,delay:0.2 }}
        >
          <div className="inner_left_part">
            <div className="first-line">Hi , 👋 I'M</div>
            <h1 className="second-line">Vivek Kumar</h1>
            <div className="third-line">
              <h2>Web Developer(MERN) </h2>
            </div>
            <div className="fourth-line">
              <p>
                Logical and organised individual with a good
                <span> communication skill </span> and proficiency in{" "}
                <span> web development (MERN) ,C++, DSA . </span> 
                  Currently i am working as a frontend Developer Intern at
                  <a href="https://cftlabs.org/"> <span><u> CFT Labs </u> </span> </a> 
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/19vGxHboHYLowph1fzfo7fut4f9GMxTAf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button class="button-27" role="button">
                RESUME
              </button>
            </a>
          </div>
           
          
        </motion.div>
        {/* <div className="rightpart">
   <img src="/Images/homeimg.png" alt="no image found" />


    

</div>  */}
      </div>
      <div className="tech_stack"  id="skills"
      
      >
        <motion.div className="tech_stack_inner"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{delay:0.1,duration:0.4}}
         viewport={{ once: true }}>
          <h1>Skills I'm quite good at.. </h1>
          <div className="item_container">
            {techStackData.map((item, index) => {
              return (
                <div className="items">
                  <img src={item.image} alt="no image found" />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
