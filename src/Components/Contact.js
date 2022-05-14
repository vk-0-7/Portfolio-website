import React from 'react'
import'./Contact.css';
import {NavLink,Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blue, grey, pink,black, red, yellow, orange } from '@mui/material/colors';
import logo from '../files/svg.gif';
import{motion} from 'framer-motion'






const Contact = () => {
  return (
    <div className='main-body'>

<div className="Logo">
          <img src={logo} alt="" />
     </div>

         <div className="contact">
           <p> Contact Me</p>
         
          
         <motion.div className="mail"    
            whileHover={{scale:[1,1.1,1,1.1,1,1.1],textshadow:"0px 0px 10px black"  }}
         > <a   href = 'mailto:vivekr4400@gmail.com?subject="subject"&body=Hello' target='_blank' >
  <EmailIcon  sx={{ color: orange[900] ,fontSize: 90}} />
  <div className='id'> vivekr4400@gmail.com</div>
</a>

</motion.div> 

           
           
           </div>
        

      <div className="cancelicon">
      
      <IconButton color="success"  fontSize="large" aria-label="cancel-icon" as={NavLink} to="/">
  <ArrowCircleRightTwoToneIcon  sx={{ color: grey[900] ,fontSize: 45}} />
</IconButton>
      </div>

     <div className="social-media">
     
     <a    href="https://www.instagram.com/vivek07____/" target="_blank" >
  <InstagramIcon  sx={{ color: red[300] ,fontSize: 55}} />
</a> 
     <a href='https://twitter.com/Vivek05024650' target="_blank" >
  <TwitterIcon  sx={{ color: blue[300] ,fontSize: 55,mx:3}} />
</a> 
     
      
     <a  
    
     href = 'https://github.com/vk-0-7' >
  <GitHubIcon  sx={{ color: grey[800] ,fontSize: 55}}  />
</a>

     </div>




      </div>
  )
}

export default Contact