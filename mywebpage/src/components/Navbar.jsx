
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



    
    
const Navbar = () => {
    
    
  return (
    <>
      

         
            <div className='topBar'>
              
              <div className='Logo'>
              <div></div>
              <div>
              <Link to="/" className="MenuItem" style={{position: 'relative',top:'2rem',left:'0.3rem'}}>
                &nbsp;Home
              </Link>


              <Link to="/contacts" className="MenuItem2" style={{position: 'relative',top:'1.1rem',left:'-0.5rem'}}>
              &nbsp;contacT&nbsp;
              </Link>

              <Link to="/git" className="MenuItem" style={{position: 'relative',top:'1rem',left:'0.3rem'}}>
              &nbsp;About 
              </Link> 

              <Link to="/contacts" className="MenuItem" style={{position: 'relative',top:'-1rem',left:'0.3rem'}}>
              &nbsp;Contact&nbsp;
              </Link>

              <Link to="/contacts" className="MenuItem2" style={{position: 'relative',top:'-1.9rem',left:'-0.5rem'}}>
              &nbsp;cOntact 
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
    