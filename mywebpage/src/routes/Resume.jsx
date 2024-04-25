import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Resume = () =>{
 
    return(
      <>
      <div className="resumeContainer">

        <h1>Preview</h1>
        <Document />
        {/* <img className="resume" src="./src/assets/My Resume-1.png"></img> */}
        <button ><a href="./src/assets/My Resume-1.png" download>download 🡇</a></button>
      </div>
      </>
    )
  }
  export default Resume