import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Resume = () =>{
 
    return(
      <>
      <div className="resumeContainer">
      <iframe className='resume' src="https://blftsnghthwvftuunsse.supabase.co/storage/v1/object/public/matthewsandorresume//Matthew%20Sandor%20Front%20End%20Resume.docx.pdf">
      </iframe>
      </div>
      </>
    )
  }
  export default Resume