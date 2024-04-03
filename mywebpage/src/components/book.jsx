import { useState } from "react"
import { useEffect } from "react"
import Page from "./page"

const Book = () =>{
  const [style,setStyle] = useState(true)
  const [found,setFound] = useState({})
  function handleClick(){
    setStyle(!style)
    
  }
    return(
      <>
      <div className="stickersContainer">

        <div className="bookcover">
          <p className="coverText">Sticker Book</p>
          <div className="backpage">
            <div className="pageContent"><Page number ={1} found={0}/></div>
            <div className="pageContentTwo"><Page number={4} found={1}/></div>
            <div className="spine"></div>
            <div onClick={handleClick} className="flipper"></div>
            <div className={style ? `${"bookflip"}`: `${"bookpage"}`}>
              <div className={style ? `${"pageOneContent"}`: `${"pageTwoContent"}`}>
                {style?<Page number={2} found ={0} />:<Page number={3} found={1}/>}
                </div>
            </div>
          </div>
        </div>
      </div>

      </>
    )
  }
  export default Book