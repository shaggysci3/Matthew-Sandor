import { useState } from "react"
import { useEffect } from "react"
import Book from "../components/book"
import Cloud from "../components/clouds"

const Home = () =>{
  const [style,setStyle] = useState(false)

  function handleClick(){
    setStyle(!style)
    
  }
    return(
      <>
      <div className="topbar">Header Bar</div>
      <div className="homeBanner"></div>
        
        <Cloud className={"backCloud"} src={"src/assets/titleCloud.png"}>
        <h1 className="homeTitle">Matthew Sandor</h1>
        </Cloud>
        <Cloud className={"cloud"} src={"src/assets/Cloud.png"}/>
        <Cloud className={"cloudTwo"} src={"src/assets/cloudTwo.png"}/>
        <Cloud className={"cloudThree"} src={"src/assets/cloudThree.png"}/>
        
        

      </>
    )
  }
  export default Home