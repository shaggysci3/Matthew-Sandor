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
      <div className="homeContainer">

      <div className="homeBanner"></div>
        
        <Cloud name={"backCloud"} src={"https://lh3.googleusercontent.com/fife/ALs6j_E86GuGyz3GYptuE1wYL_faw3ZMOrf-QNm5wxWAwWieJEqDEypOyC1ZyJc6MvhrouMJ3rspegZN8iRaDDRRtSCmt28iweGehW2m0D8AoSh7lcCSAKPpbcPuhxf9W8ekSoUjBm7PQ-niQ9EH9XVk4GuGQIgcy0hYDtJMTXd-9nbFEyWs5yRg9ZNtOGAQ-AHUT9mgPaunWKakMEO3xnsmaTxMAQpr8npwS-hc3rZUpKH6FWZCIs9MK8BfRM0jME3zcystdMWYWU_vA7Cb9RUwUD_gFWqHjWhENXHtRHRoUARfbhSfnvNIbLa3trQZrTE3jLfcevgpClhSg5cLqfTWq-Kqrc2FJPHasf0HPI0WJxMZPBhi82jCxwDGChNU50GNcTwi23EB-AfwYTMzIH9zsDMtmRpApBHabDehFad9e6vBj_ylneI8u879ml0mXBAAHds8YD5XoGtGDbAK4B22u6VSMJR73ve9iaKBMGfkEacGu2a4OGrc0K9fZQC_tiPhZ7fTHL-Xw_wDd8q4vK47KVygcXKSwCwjGbiGwwLvYNbCvYHY0vq3TjD2hQoN12jRo3XrtQZeaASDOO473olOXDQlddnVZOCLhO9AWlJ_tDJzEwu5yApMY5a-94FNdvs69ddqtqwVcsnMRJlkANEUwZSCQtXhjJiw1CPcU0Sp_9qtWpK_dCpyzyQKSRJQDZiUqV9EIHWZvckqKPfRJSkwPDZYyjOP2PRCQnwyiUEjX2zKNogk3sOX4agrwkLRkuMI_eaW6ay8ZPQmR7aCb5D0mqv1lK5eDQg10CRYa4iwWcXFPVkYLcu6WyhPnccH4oUWHXgmypRtBpNAgWbm-wPmGZkMaB8KZQ-4ywZqC9zCcYtruMJtsSua5sYEIslJPOwAh5R1Nfjb6OxvQ6nIpaZC1SStQVXFAD3a08PXmYQinjfzCDo8dztTjTQ97_VCV6ANzzi06SAQwM95CIEARvWKqeRGTTvYxh-BOrxWrje_YQ8oBiBPUXMg0cDFD5VH9m3xp_mOcSbeGQ4C6tRma6qkOu37ksJ8v6KPzn2wWZKgbbQ_iOAOwQYgGh1yAknf9RBWZnxatni-ftLQ0bC07NqJg6kynaQNabDCGNo9oNVEyNGplYVdSuVOlkZg_xGiV7pTjwCY2M1fo2GhQSCPHMBRLN7D3L9NCVZVJ7JhEIo8-H1UhZ760EOJBDyK_2PCNg67uDRgcgyKdOSXOWbHkStKc7ouoejOcxw9gJh-W0f14Jr7TXrlxJg9dHXkU7EMCRxFr8nxQ_rXlV492x4k9M0j7pE89fuZUDosITWC9EsOKtjmdJn9_Le5-QTKC4iQ8L8Xq1TmSFmam29e4SUoZHenA93GQexDZwTYFaqWnAkeP-oOuM-4jTpSo0EataZaDLyHTApygWgmuDgIbIVk-NitFqSXWALixjljjz0fxsa0VZZants0MXBzWQRhT8xRJdum5hKE9uuaAi1L0uXHRpGcdiIRe_Cwi-HD8RgCy6s1KvcUd7vw2RgZ2F2tQp2V3zumskrnBMJt_7oGvaOLbmEDcYtBQcJSPvrD7zPlz_kmIXG-0eRrCVIJozms2lLEtt0Sa3Gx77PdxGeYw5ZUus-L0fb_wNIpzZC0mmYJdJZGsnTttHd3KnzyZp73BpmAybx394fbwRlnGEqWesxovbdZjO38rI3D0r9RfOp2DvTWu9nAGKh54aJv7eaVijP-=w1920-h919"}></Cloud>
        <Cloud name={"cloud"} src={"src/assets/Websites.png"}/>
        <Cloud name={"cloudTwo"} src={"src/assets/Resume.png"}/>
        
      <div className="aboutInfo">
        <img src="https://pbs.twimg.com/profile_images/1716840237450854400/FJuHG7C1_400x400.jpg"></img>
        <h1>about me</h1>
      </div>

      <div className="aboutInfo">
        <img src="https://pbs.twimg.com/profile_images/1716840237450854400/FJuHG7C1_400x400.jpg"></img>
        <h1>about me</h1>
      </div>

      </div>
      </>
    )
  }
  export default Home