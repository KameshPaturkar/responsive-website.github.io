import React from 'react-dom'
import Home from './Home'
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
const App = () => {
  return (
    <>
    <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/> } />
    <Route exact path='/About' element={<About/> } />
    <Route exact path='/Service' element={<Service/> } />
    <Route exact path='/Contact' element={<Contact />} />
 
    
  </Routes>
  
 
    </> 
  )
}

export default App;


