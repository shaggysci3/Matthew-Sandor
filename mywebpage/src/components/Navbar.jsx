
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



    
    
const Navbar = () => {
    
    
  return (
    <>
      

         
            <div className='topBar'>
              
              <div className='Logo'>
              
              <div style={{maxHeight:'3rem'}}>
              <Link to="/" className="MenuItem" style={{position: 'relative',top:'0.6rem',left:'0.2rem'}}>
                &nbsp;Home
              </Link>


              <Link to="/contacts" className="MenuItem2" style={{position: 'relative',top:'-0.3rem',left:'-0.8rem'}}>
              &nbsp;contacT&nbsp;
              </Link>

              <Link to="/git" className="MenuItem" style={{position: 'relative',top:'-1.5rem',left:'0.7rem'}}>
              &nbsp;About 
              </Link> 

              <Link to="/contacts" className="MenuItem4" style={{position: 'relative',top:'-2.3rem',left:'-0.6rem'}}>
              &nbsp;cOntact 
              </Link>

              <Link to="/contacts" className="MenuItem3" style={{position: 'relative',top:'-3.5rem',left:'0.5rem'}}>
              &nbsp;Contact&nbsp;
              </Link>

              

              
              </div>
              
              </div>
              {/* <img className='Logo' src='src/assets/pixil-frame-0.png'>
              </img> */}
              
              
              
            </div>
          
        
            
        
        </>
      )
    }
    
    export default Navbar
    