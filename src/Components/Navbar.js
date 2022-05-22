import React,{useState,useEffect} from 'react'
import './Nav.css';
import './Nav-sm.css';

import {NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../files/svg.gif';
import{motion} from 'framer-motion'
import IconButton from '@mui/material/IconButton';
import {  yellow } from '@mui/material/colors';


const Navbar = () => {
      
  const [ismobile,setismobile]=useState(false);
  const[screenwidth,setscreenwidth]=useState(window.innerWidth)

  const toggleNav= () =>{
     setismobile(!ismobile)
  }
 
  useEffect(() =>{
  const changewidth=() =>{
    setscreenwidth(window.innerWidth);
  }
 window.addEventListener('resize', changewidth)
  return () =>{
      window.removeEventListener('resize', changewidth)
  }
  },[])
  return (
  <>
  
     <nav className="Container">
    
     ``
     <div className="Logo">
          <img src={logo} alt="" />
     </div>
     {(ismobile || screenwidth>550) && (
    <ul className="Navbar-nav" 
    onClick={toggleNav}
   >
       
        <motion.li class="Nav-item"
         whileHover={{scale:1.2,textshadow:"0px 0px 8px"}}>
          <NavLink class="Nav-link" to="/">
             About
          </NavLink>
        </motion.li>
        
         <motion.li class="Nav-item"  
          whileHover={{scale:1.2,textshadow:"0px 0px 7px"}}
        >
          
          <NavLink class="Nav-link" to="/projects">Projects</NavLink>
        </motion.li>
        <motion.li class="Nav-item"
         whileHover={{scale:1.2,textshadow:"0px 0px 8px"}}
        >
          <NavLink class="Nav-link" to="/contact">Contact</NavLink> 
          </motion.li>
         
        <motion.button className='btn-grad' 
         whileTap={{scale:0.5}}
        
        >  <a href="https://drive.google.com/file/d/1fT-UZObbp_dIp9kiWpR6GW0RHz5Pyd41/view?usp=sharing"   target="_blank"> RESUME</a>   </motion.button>
     
        
      </ul> )}
     <div className="menuicon">
      
      <IconButton onClick={toggleNav} color="success"  fontSize="large" aria-label="menu-icon" >
           <MenuIcon  sx={{ color: yellow[500] ,fontSize: 35}} /> 
</IconButton>
      </div>

      
      </nav>  
     
    </>
  )
}

export default Navbar

