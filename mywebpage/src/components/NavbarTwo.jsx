
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



    
    
const NavbarTwo = () => {
    
    
  return (
    <>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end",zIndex:"5"}} className="topbar">
        <div>

        <Link className="Title">MatthewSandor</Link>
        </div>
        <div>

        <Link to={"/"} className='navItem'>Home</Link>
        <Link to={"/git"} className='navItem'  >Projects</Link>
        <Link to={"/resume"} className='navItem'>Resume</Link>
        <h2></h2>
        </div>
      </div>

    </>
      )
    }
    
    export default NavbarTwo
    