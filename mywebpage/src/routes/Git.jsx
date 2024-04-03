import { Button } from "bootstrap"

const Git = () =>{
 
    return(
      <>

      <div className="backgroundImage"></div>
      <div className="blur"></div>
      <div className="projectPage">
        <h1>Character creator</h1>
        <div className="projectContainer">
      <img className="displayImg" src="src/assets/characterCreation.png"></img>
      <div className="projectInfo">
        <h1 className="infoTitle">Character Creator</h1>
        <p className="infoBody"> this was the final project wich included a full front end built out with react and bootstrap as well as a backend with python with multiple many to many connections between datatables. </p>
      <a className="infoFooter" href="https://github.com/shaggysci3/CatQuest" target="_blank" rel="noopener noreferrer">character creation app</a>
      </div>
        </div>

        <h1>Time Clock</h1>
        <div className="projectContainer">
        <img className="displayImg" src="src/assets/TimeClock (2).png"></img>
          <div className="projectInfo">
            <h1>Title</h1>
            <a href="https://github.com/AustinBByrd/Phase-3-project" target="_blank" rel="noopener noreferrer">time clock app</a>
          </div>

        </div>
        
        <h1>Coffee Shop</h1>
        <div className="projectContainer">
        <img className="displayImg" src="src/assets/Coffee.png"></img>
        <div className="projectInfo">
            <h1>Title</h1>
            <a href="https://github.com/shaggysci3/coffee" target="_blank" rel="noopener noreferrer">time clock app</a>
          </div>
        
        </div>
      </div>
      </>
    )
  }
  export default Git