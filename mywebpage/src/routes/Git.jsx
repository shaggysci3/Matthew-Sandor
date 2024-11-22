import { Button } from "bootstrap"
// import ControlledCarousel from "../components/ControlledCarousel"

const Git = () =>{
 
    return(
      <>

      <div className="backgroundImage"></div>
      
      <div className="blur"></div>
      <div className="projectPage">
      {/* <h1 className="Title" style={{padding:"40px", fontSize:"40pt",backgroundColor:"black", width:"40%",textAlign:"center"}} >Projects</h1> */}
        
        <h1 className="title">Featured</h1>

        
        <div className="projectContainer">
      <img className="displayImg" src="https://cdn.pixilart.com/photos/large/089f0b09c43246c.png"></img>
      <div className="projectInfo">
        <h1 className="infoTitle">Character Creator</h1>

        <p className="infoBody"> site description: </p>
        <p>users are able to create and account and create customizeable characters and view other's creations</p>
        <p>Tools Used:</p>
        <ul>
          <li>React</li>
          <li>Boostrap</li>
          <li>Python</li>
          <li>SQL Database</li>
        </ul>
      <a className="infoFooter" href="https://github.com/shaggysci3/CatQuest" target="_blank" rel="noopener noreferrer">Project Github</a>
      </div>
        </div>
{/*  */}
        <h1 className="title">Tusken And The Raiders</h1>
        <div className="projectContainer">
        <img className="displayImg" src="https://hzlezhtofxpfmuntarie.supabase.co/storage/v1/object/public/recordings/Screenshot%202024-11-22%20162808.png"></img>
          <div className="projectInfo">
            <h1 className="infoTitle">Time Clock</h1>
            <p className="infoBody"> site description: </p>
        <p>a place for a band to post recordings and for venues to book the band "tusken and the raiders" for shows</p>
        <p>Tools Used:</p>
        <ul>
          <li>React</li>
          <li>RestApi with Flask includes full CRUD operations</li>
          <li>Python</li>
        </ul>
            <a className="infoFooter" href="https://github.com/shaggysci3/TuskatRaid" target="_blank" rel="noopener noreferrer">Tusken And The Raiders</a>
          </div>

        </div>
        
        <h1 className="title">Coffee Shop</h1>
        <div className="projectContainer">
        <img className="displayImg" src="https://cdn.pixilart.com/photos/large/5e0381b11831b59.png"></img>
          <div className="projectInfo">
            <h1 className="infoTitle">Coffee Shop</h1>
            <p className="infoBody"> site description: </p>
          <p>users are able to create and delete as well as see coffee prices and descriptions</p>
          <p>Tools Used:</p>
          <ul>
          <li>React</li>
          
        </ul>
            <a className="infoFooter" href="https://github.com/shaggysci3/coffee" target="_blank" rel="noopener noreferrer">time clock app</a>
          </div>
        
        </div>
      </div>
      </>
    )
  }
  export default Git