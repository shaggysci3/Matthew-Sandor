import { useState } from "react"
import { useEffect } from "react"

const Book = () =>{
  const [style,setStyle] = useState(false)

  function handleClick(){
    setStyle(!style)
    
  }
    return(
      <>
      <div className="stickersContainer">

        <div className="bookcover">
          <div className="backpage">
            <div className="spine"></div>
            <div onClick={handleClick} className="flipper"></div>
            <div className={style ? `${"bookflip"}`: `${"bookpage"}`}></div>
          </div>
        </div>
      </div>

      </>
    )
  }
  export default Book