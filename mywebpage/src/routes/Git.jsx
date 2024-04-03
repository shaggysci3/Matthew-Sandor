import { Button } from "bootstrap"

const Git = () =>{
 
    return(
      <>

      <div className="backgroundImage"></div>
      <div className="blur"></div>
      <div className="projectPage">
        <h1>Character creator</h1>
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

        <h1>Time Clock</h1>
        <div className="projectContainer">
        <img className="displayImg" src="https://cdn.pixilart.com/photos/large/1856ff3188846e3.png"></img>
          <div className="projectInfo">
            <h1>Title</h1>
            <p className="infoBody"> site description: </p>
        <p>users are able to clock in and out with their user ID as well as admins may login and add/remove users as needed</p>
        <p>Tools Used:</p>
        <ul>
          <li>Python</li>
        </ul>
            <a className="infoFooter" href="https://github.com/AustinBByrd/Phase-3-project" target="_blank" rel="noopener noreferrer">time clock app</a>
          </div>

        </div>
        
        <h1>Coffee Shop</h1>
        <div className="projectContainer">
        <img className="displayImg" src="https://cdn.pixilart.com/photos/large/5e0381b11831b59.png"></img>
        <div className="projectInfo">
            <h1>Title</h1>
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