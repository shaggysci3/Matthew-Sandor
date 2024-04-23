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
      <div className="topbar">
        <h1 className="Title">MatthewSandor</h1>
      </div>

      <div className="homeBanner"></div>
        
        <Cloud name={"backCloud"} src={"src/assets/Home.png"}></Cloud>
        <Cloud name={"cloud"} src={"src/assets/Websites.png"}/>
        <Cloud name={"cloudTwo"} src={"src/assets/Resume.png"}/>
        {/* <Cloud name={"cloudThree"} src={"src/assets/cloudThree.png"}/> */}

      </>
    )
  }
  export default Home