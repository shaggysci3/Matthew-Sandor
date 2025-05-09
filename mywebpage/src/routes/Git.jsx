import { Button } from "bootstrap"
import { useState } from "react"
// import ControlledCarousel from "../components/ControlledCarousel"

const Git = () =>{
  const[selected,setSelected]=useState("")
 
  function handleSelect(e){
    if(selected != e.target.id){
      setSelected(e.target.id)
    }else{
      setSelected(null)
    }

  }
    return(
      <>

      <div className="backgroundImage"></div>
      
      <div className="blur"></div>
      <div className="projectPage">
      {/* <h1 className="Title" style={{padding:"40px", fontSize:"40pt",backgroundColor:"black", width:"40%",textAlign:"center"}} >Projects</h1> */}
        
        <h1 className="title">Featured</h1>        
        <div  className={selected=="char"?"selectedProject":"projectContainer"}>
      <img onClick={handleSelect} id="char" className="displayImg" src="https://cdn.pixilart.com/photos/large/089f0b09c43246c.png"></img>
      <div className="projectInfo">
        <h1 className="infoTitle">Character Creator</h1>
        <div>
          <p className="infoBody"> site description: </p>
          <p>users are able to create and account and create customizeable characters and view other's </p>
        </div>
        <div>
          <p>Tools Used:</p>
          <ul>
            <li>React</li>
            <li>Python</li>
            <li>SQL Database</li>
          </ul>
        </div>
      <a className="infoFooter" href="https://github.com/shaggysci3/CatQuest" target="_blank" rel="noopener noreferrer">Project Github</a>
      </div>
        </div>
{/*  */}
        <h1 className="title">Tusken And The Raiders</h1>
        <div className={selected=="tusken"?"selectedProject":"projectContainer"}>
        <img onClick={handleSelect} id="tusken" className="displayImg" src="https://blftsnghthwvftuunsse.supabase.co/storage/v1/object/public/matthewsandorresume//Screenshot%202025-04-18%20183911.png"></img>
          <div className="projectInfo">
            <h1 className="infoTitle">Tusken band webpage</h1>
            <div>
              <p className="infoBody"> site description: </p>
              <p>a place for a band to post recordings and for venues to book the band "tusken and the raiders" for shows</p>
            </div>
            <div>
              <p>Tools Used:</p>
              <ul>
                <li>React</li>
                <li>RestApi with Flask includes full CRUD operations</li>
                <li>Python</li>
              </ul>
            </div>
            <a className="infoFooter" href="https://github.com/shaggysci3/TuskatRaid" target="_blank" rel="noopener noreferrer">Tusken And The Raiders</a>
          </div>

        </div>
        
        <h1 className="title">Coffee Shop</h1>
        <div className={selected=="coffee"?"selectedProject":"projectContainer"}>
        <img onClick={handleSelect} id="coffee" className="displayImg" src="https://cdn.pixilart.com/photos/large/5e0381b11831b59.png"></img>
          <div className="projectInfo">
            <h1 className="infoTitle">Coffee Shop</h1>
            <div>
            <p className="infoBody"> site description: </p>
          <p>users are able to create and delete as well as see coffee prices and descriptions</p>
            </div>
          <div>
          <p>Tools Used:</p>
          <ul>
          <li>Java Script</li>
          <li>local .db file for data storage</li>
        </ul>
          </div>
            <a className="infoFooter" href="https://github.com/shaggysci3/coffee" target="_blank" rel="noopener noreferrer">time clock app</a>
          </div>
        
        </div>
      </div>
      </>
    )
  }
  export default Git