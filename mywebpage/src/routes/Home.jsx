import { useState } from "react"
import { useEffect } from "react"
import Book from "../components/book"

const Home = () =>{
  const [style,setStyle] = useState(false)

  function handleClick(){
    setStyle(!style)
    
  }
    return(
      <>
      <div className="topbar">Header Bar</div>
        <h1>this is Home page</h1>
        
        

      </>
    )
  }
  export default Home