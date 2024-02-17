
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


    
    
const Navbar = () => {
    
    
  return (
    <>
      
          
        <nav >
          <div >
            <div className='topBar'>
              <NavLink to="/" className="MenuItem" >
                Home
              </NavLink>



              <NavLink to="/contacts" className="MenuItem">
                  Contact Me
              </NavLink>
              
            </div>
          </div>
        </nav>
            
        
        </>
      )
    }
    
    export default Navbar
    