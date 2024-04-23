
const Cloud = ({src,name}) =>{
 
    return(
      <>
      <div className={name} >
        <div className="slideContainer">
          <img  src={src} className="cloudIcon"></img>
        </div>
        {/* <img className={className} src={src}></img> */}
      </div>
      </>
    )
  }
  export default Cloud