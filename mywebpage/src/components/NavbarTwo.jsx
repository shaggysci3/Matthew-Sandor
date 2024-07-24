
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



    
    
const NavbarTwo = () => {
    
    
  return (
    <>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end",zIndex:"5"}} className="topbar">
        <div>

        <h1 className="Title">MatthewSandor</h1>
        </div>
        <div>

        <Link to={"/git"} className='navItem'  >Projects</Link>
        <Link to={"/resume"} className='navItem'>Resume</Link>
        <Link to={"/"} className='navItem'>Home</Link>
        <h2></h2>
        </div>
      </div>

    </>
      )
    }
    
    export default NavbarTwo
    