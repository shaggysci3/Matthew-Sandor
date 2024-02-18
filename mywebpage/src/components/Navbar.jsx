
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



    
    
const Navbar = () => {
    
    
  return (
    <>
      

         
            <div className='topBar'>
              <div className='Logo'>
              <Link to="/" className="MenuItem" >
                Home
              </Link>


              <Link to="/contacts" className="MenuItem">
                  Contact Me
              </Link>
              </div>
              {/* <img className='Logo' src='src/assets/pixil-frame-0.png'>
              </img> */}
              
              
              
            </div>
          
        
            
        
        </>
      )
    }
    
    export default Navbar
    