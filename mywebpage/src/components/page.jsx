import { useEffect, useState } from "react"

const Page = ({number,found}) =>{
    const[sticker,setSticker] = useState({
        1:"https://cdn.pixilart.com/photos/large/34949c80a753d17.png",
        2:"https://cdn.pixilart.com/photos/large/529e437ee65603e.png"

    })
    
    return(
      <>
        <div>

            <p>title</p>
            <h1>{number}</h1>
            <div className="stickerContainer">
            <img style={{filter:`brightness(${0})`}} className="sticker" src={sticker[1]}></img>
            <img style={{filter:`brightness(${1})`}} className="sticker" src={sticker[2]}></img>
            </div>
        </div>

      </>
    )
  }
  export default Page