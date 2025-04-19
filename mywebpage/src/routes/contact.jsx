import { useState } from "react"
import Technologies from "../components/Technologies"

const Contact = () =>{
 const[selected,setSelected]=useState("tech")
 function handleClick(e){
  setSelected(e.target.id)
 }
    return(
      <>
      <div className="projectPage">
       <div className="educationContainer">
        <div className="infoSelector">
          <h1 id="tech" onClick={handleClick} className="infoItem">Technologies</h1>
          <h1 id="cert" onClick={handleClick} className="infoItem">Certificate</h1>
        </div>
        {selected=="cert"?<>
        <img className="certificate" src="https://blftsnghthwvftuunsse.supabase.co/storage/v1/object/public/matthewsandorresume//1745023658656-cfae5034-be14-4a74-8dad-93978d141858_1.png"></img>
        </>:<>
        <Technologies/>
        </>
        }
       </div>
      </div>
        
      </>
    )
  }
  export default Contact