import React from 'react'
import'./About.css';

import {  yellow } from '@mui/material/colors';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import {motion} from 'framer-motion';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: 'red',
//     color:  'white',
//   },
// });



const Home = () => { 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: "20vw"},
    show: { opacity: 1, x: 0 },
  };

  return (
   <>
   <div className='main-div-home'>

      <div className="first-line">
        HI , THERE 👋 I'M
     </div>
      <motion.div className="second-line"
          initial={{x:'-100vw'}}
          animate={{x:0}}
          // transition={{duration:1 ,type:'spring' ,stifness:'100'}}
      >
         Vivek
     </motion.div>
      <div className="third-line">
     <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5,duration:1}}
     >Web Developer(MERN) + Competitive Programmer</motion.p>
     </div>
      <div className="fourth-line">
     <motion.p
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:0.8,duration:1}}
     >Logical and organised individual with  a <br/> good communication skill and proficiency <br/> in web development (MERN) ,C++, DSA.</motion.p>
     </div>

<div className="rightpart">
  <div className="right-first">
    <p>Tech Stack I'm good at...</p>
  </div>
  <motion.ul variants={container} initial="hidden" animate="show" className='list-container'>

  
  <motion.div className="ul-items" 
  variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Wordpress</li>
  </motion.div>
  <motion.div className="ul-items" 
  variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     HTML</li>
  </motion.div>
  <motion.div className="ul-items" variants={item} >
  <li> <ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
    CSS</li>
  </motion.div>
  <motion.div className="ul-items"  variants={item} >
  <li> <ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
    Javascript</li>
  </motion.div>
  <motion.div className="ul-items"  variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     React</li>
  </motion.div>
  <motion.div className="ul-items" variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Material-UI</li>
  </motion.div>
  <motion.div className="ul-items" variants={item} >
  <li> <ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Bootstrap</li>
  </motion.div>
  <motion.div className="ul-items"  variants={item} >
  <li> <ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Node.js</li>
  </motion.div>
  <motion.div className="ul-items " variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Express.js</li>
  </motion.div>
  <motion.div className="ul-items" variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Mongo-DB</li>
  </motion.div>
  <motion.div className="ul-items" variants={item} >
  <li><ArrowRightTwoToneIcon sx={{ color: yellow[500] ,fontSize: 35}} />
     Git/Github</li>
  </motion.div>

  </motion.ul>


</div>
    

     



   </div>

   </>
  )
}

export default Home