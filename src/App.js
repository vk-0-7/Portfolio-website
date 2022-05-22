import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {

  // const[screenwidth,setscreenwidth]=useState(window.innerWidth)

  return (
    <>
    {/* <Navbar/>  */}
    {/* <Home/>
  <About/>
  <Projects/> */}
     
      

  
  {/* {screenwidth>550 ?
     (*/}
       <Router>
     
     <Navbar/>
        <Routes>
        
   
    
    <Route exact path="/" element={<About/>} />
     
    <Route exact path="/projects" element={<Projects/>} />
    <Route exact path="/contact" element={<Contact/>} />
    
     </Routes>
  </Router> 
     
     {/* ( */}
       {/* <Router>
           <Navbar/>
          <About/>
          <Projects/>
          <Contact/>
     </Router> */}
     {/* )
     } */}
     
  

  
    </>
  );
}

export default App;
