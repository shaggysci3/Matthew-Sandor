import { Link } from 'react-router-dom'

const Cloud = ({src,name,title,link}) =>{
 
    return(
      <>
      <div className={name} >
      
        <div className="slideContainer">
        <a className="sliderName" href={link}>{title}</a>
          <img   src={src} className="cloudIcon"></img>
        </div>
        {/* <img className={className} src={src}></img> */}
      </div>
      </>
    )
  }
  export default Cloud