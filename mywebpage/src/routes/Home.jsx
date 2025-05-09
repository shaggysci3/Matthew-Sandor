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
      {/* <div className="topbar">
        <h1 className="Title">MatthewSandor</h1>
      </div> */}
      <div className="homeContainer">

      <div className="homeBanner"></div>
        
        <Cloud link={"/"} title={"Home"} name={"backCloud"} src={"https://lh3.googleusercontent.com/fife/ALs6j_E86GuGyz3GYptuE1wYL_faw3ZMOrf-QNm5wxWAwWieJEqDEypOyC1ZyJc6MvhrouMJ3rspegZN8iRaDDRRtSCmt28iweGehW2m0D8AoSh7lcCSAKPpbcPuhxf9W8ekSoUjBm7PQ-niQ9EH9XVk4GuGQIgcy0hYDtJMTXd-9nbFEyWs5yRg9ZNtOGAQ-AHUT9mgPaunWKakMEO3xnsmaTxMAQpr8npwS-hc3rZUpKH6FWZCIs9MK8BfRM0jME3zcystdMWYWU_vA7Cb9RUwUD_gFWqHjWhENXHtRHRoUARfbhSfnvNIbLa3trQZrTE3jLfcevgpClhSg5cLqfTWq-Kqrc2FJPHasf0HPI0WJxMZPBhi82jCxwDGChNU50GNcTwi23EB-AfwYTMzIH9zsDMtmRpApBHabDehFad9e6vBj_ylneI8u879ml0mXBAAHds8YD5XoGtGDbAK4B22u6VSMJR73ve9iaKBMGfkEacGu2a4OGrc0K9fZQC_tiPhZ7fTHL-Xw_wDd8q4vK47KVygcXKSwCwjGbiGwwLvYNbCvYHY0vq3TjD2hQoN12jRo3XrtQZeaASDOO473olOXDQlddnVZOCLhO9AWlJ_tDJzEwu5yApMY5a-94FNdvs69ddqtqwVcsnMRJlkANEUwZSCQtXhjJiw1CPcU0Sp_9qtWpK_dCpyzyQKSRJQDZiUqV9EIHWZvckqKPfRJSkwPDZYyjOP2PRCQnwyiUEjX2zKNogk3sOX4agrwkLRkuMI_eaW6ay8ZPQmR7aCb5D0mqv1lK5eDQg10CRYa4iwWcXFPVkYLcu6WyhPnccH4oUWHXgmypRtBpNAgWbm-wPmGZkMaB8KZQ-4ywZqC9zCcYtruMJtsSua5sYEIslJPOwAh5R1Nfjb6OxvQ6nIpaZC1SStQVXFAD3a08PXmYQinjfzCDo8dztTjTQ97_VCV6ANzzi06SAQwM95CIEARvWKqeRGTTvYxh-BOrxWrje_YQ8oBiBPUXMg0cDFD5VH9m3xp_mOcSbeGQ4C6tRma6qkOu37ksJ8v6KPzn2wWZKgbbQ_iOAOwQYgGh1yAknf9RBWZnxatni-ftLQ0bC07NqJg6kynaQNabDCGNo9oNVEyNGplYVdSuVOlkZg_xGiV7pTjwCY2M1fo2GhQSCPHMBRLN7D3L9NCVZVJ7JhEIo8-H1UhZ760EOJBDyK_2PCNg67uDRgcgyKdOSXOWbHkStKc7ouoejOcxw9gJh-W0f14Jr7TXrlxJg9dHXkU7EMCRxFr8nxQ_rXlV492x4k9M0j7pE89fuZUDosITWC9EsOKtjmdJn9_Le5-QTKC4iQ8L8Xq1TmSFmam29e4SUoZHenA93GQexDZwTYFaqWnAkeP-oOuM-4jTpSo0EataZaDLyHTApygWgmuDgIbIVk-NitFqSXWALixjljjz0fxsa0VZZants0MXBzWQRhT8xRJdum5hKE9uuaAi1L0uXHRpGcdiIRe_Cwi-HD8RgCy6s1KvcUd7vw2RgZ2F2tQp2V3zumskrnBMJt_7oGvaOLbmEDcYtBQcJSPvrD7zPlz_kmIXG-0eRrCVIJozms2lLEtt0Sa3Gx77PdxGeYw5ZUus-L0fb_wNIpzZC0mmYJdJZGsnTttHd3KnzyZp73BpmAybx394fbwRlnGEqWesxovbdZjO38rI3D0r9RfOp2DvTWu9nAGKh54aJv7eaVijP-=w1920-h919"}></Cloud>
        <Cloud link={"/git"}  title={"Projects"} name={"cloud"} src={"https://lh3.googleusercontent.com/fife/ALs6j_ECX8RQvKt8lWMJdL2wqrZKaJthT8BUPbHzWxPxd-iExLqVdY02ARJrgVi0KBJ20Fg3eAwWGax6Sia9qnUaG7np0LAOn4R4sKHI4wKZ9vcaoy9aFentuJyksDyxqHB1OolcAindGKlkSF6vXfdBBJSyEV4edgibkM4sroJ5yuTCSv9P2xbJh2NzmJM5_nATPPqjDYZ451EthsRMeU2ip1q4iOSxmr8wq1oSQTThtT--iG_L0xFKT0KwIpsxPMUUegtC5azKnNWKoSRryhWyMMSeLICTrQJcZ_t4wplMSQmurvqyd2ZyG6_yIwG6G9VgyWLemP-JlZJ3cseja68Eh0zrKVJT7ccdmy8Dco5Ki27rmOoMVHwfppp-8yVq5W4lStD1ctFd11JkcZ9JHNNuEghk3t62HuOWpXsPuGXk73UEs1KrC9U8d9-fKIlCR9ZiJ6UTmW8X2ghCPCIWFiT8sM0n1vKgHihbScJ_1IaNstjPZ-HkK4GDfFVS3mZllHOzC1IwSqh9E8W3bvRLzcihxY1CCx50sRUev-DdJUx2PkL-LVlcr9j4gTuyIHYdf8FNHwHZH3jCL9DbpGHcjJVhwfzH9OhaLTeoRToAk6LbNmZnerzKSX2O9RV-o80987JDU_ZziVbM2_MnlHwUfXqQ-hKVlvEj2GkT6zurjCLBYBevkLfpJRRCh34rx1qxVMKLlN7UHRPKBVux2fumbpBw1MrWE9PsrWLJ-XPjSWcPcd3FBPdZ9y_xtkjRBel97bCqtMgHlC0DY4k2AjnooEWoHr64rxe33_OVy0aRpllmQGol4R-1Cjisq1j-KWZi2Fz-UAkqOxQNn0_bX4GB7RWfu0dq7KW5QvdgWRgiYw9jc0swzAuzLJs85LHyYPe4_ij6SYz1pT6usGwkgxKplLknePHJ8CAIYHJZVcGNytPNEexHA6_eZbXzOxIUQfLlC8UL7F_rPno8WTva7xihK4ns6TEgEnHdRRHDNI0ccUBTPdwHnhFh5HnBpevFSvLlsGi1C2m4CIxqShD1nzSLRw2r2cNr_Wk6jr1AREqxc7L09rKzstpIoEpP_hbMmeF3hx_rlZm-mRTzffB-UOCJwigTzvMlk4U-2NQjX-3JfEnnEkl7UQgWeCfou27cCot1x9CsTrLFJf6WEIbmQ6hOfzpO01QPwPOThhdegY6gjTGiYZXDLKpSwELS-BlMAhGZllP-ACskJyjUkcNMSnu13rnZc3kw5gxADZK4Mo_XPtR_wVpUHWVN8uyyNbSxiHK0k0W6ObTWMEbaiwdNYYDrN4b52lr9F-XFTPJB8PaM3viEv8u1PJRqFnp2JXhHYGqeiDkRj63O19qZCBE118iNG-sNBAw3IdrpKtDwxR0y6Mtgno1GTBQ55_JomfHG-onzNRS5Dz9hrLf1zBFC7x6UN03g5ppxV3RX4QV-Piv_-FMv0tQIiVJ0_Ft5ekJ5jGayAoDTNNcDGRfD5miOUhG8WLDSIu4QR2AUrbZBehsxD5n6IMqu0ikiI0NU2I75PBStGx92XJzz7eza7z8FPavS61V3TxvOTQG_bTw6RnNyAZNOeqnqQqQr2a_FDg_4T8bo59RS1o5wUj-JghVe1e8dbfMpcGaJG-yBS-xF2iQNnykJ9gr0OHHac1R412zKPAr0YiwHPycgYPAghgO-NQ4JSYeIWyzlhL1Ou9L6yeCsGt4DYGj8h4UzEXaZ95q7pKk=w1920-h919"}/>
        <Cloud link={"/resume"} title={"Resume"} name={"cloudTwo"} src={"https://lh3.googleusercontent.com/fife/ALs6j_Ht7zl_QNezoURr-l69NOUaOauQtHZL3fLdz3szV3Y-PNj_uqEznj-qVZQHHObpEOiWMTLiNpk-XqIALuct108eURMDvnRBh8iau6eEc7g8l0V7Sanst0pHOks7whVq7srO--Wo82fJxHZR7FKQDvroKHbuUYAxZE7r41e0Mset5fvB41wTBG135jtQ82FjM-BelDkXpCfnXCaP2LSUTdDd3S6isAJ4PwB3WU3XaqoGfJ_HCtJDhOA095PskcQ-BZbPQDBZLcxwOBQPN8s3CazGRB50exdl3lH3gCHoVmEYWsOAXMmKKFUx0XSZVQ8yRDis06aRXln0rwdfzczsI3tBqZLwrI7kCTV2KRajUs3-KtgGGFLlVxbcT0zv6URkAPCpmn3Ex_uqOU5eGsNeptUel3EjhKhDCpiyxe5g1p6s22YuPnbsdIvBuvqBuoTfShHk3oUM32h0z38NmmcvIWazkw03jc3jyjCpTRoDnwVGUb7nMyjJEEIQWdMCvD4nZhRobAczzNmFpdjE8I03hWFatxOZMQbWdtBAzqhsqVc9BuDZ2B1XB39dNKLcyx05t_CPxl0qjHva7zb8dywbuTr4mYHjBq_OrNjK4QLi90ylaqyAkNeZ3oaRBKqFhWiEbBnadpyDoyH2UrXBrMttXnnm4MOh1KEnyaO7Iz4CDpqjql9JofK6Zt1ZZSAiFlEQl9L_UyGFKFRSLcCyoRLZtautRSTL36T8_Vr04EH9mYduIEb8T-AlcIO3A9hcNXhSmEuVP86Wxev3wm6dqumS43Y1RY6acarCIEDGi6R-6JWKLGqyQxxtXuPlx9bPAlS7ca_cPnn-oMjuiup4mdvBUK5z1JLLaHn7wqQ2uLCkgzUy9ld1fR_dLm0NSOqzchnhE8wmJXWrr9RxRXVl-Dh-Rmqqw26D4WI54vO5yFWTct0Le0SDc9RlOg8GBMgTJ0HLX3jIMpbqSXNIs7Z8wkGb7eOYAK9GSaNnF5y3DED4m4Y75w33XzpSn1voxT_GMTZB_qBpmB7RiaISRNF1_nnJS6ZY1DdrSdoRO-zyb46Y-pZydTNaBxGrAIf8nxAIqvtQsuMXzYcqTackXPb8hwlC7vWcSiMQS4p6NKOmm0mrAALQeq_xUXWV7kD3-sEaKe3VSNI9-LPUDikU2-m3Y7YBuBOuARns-fQ5Rgn5qHnuO5G8Hj8Vjjv4ub4ZqJ8qLpQ_d5dmuKnvUV2lFRv8sFepBItGaT1OFyot2SXcaLj99CyMp5QWd0AL1H5biMQLoFffh7NdddkiYtzrD95l3yQfkm4kFEdpySuh8ZUejE8Qz351qCsomD1tfj-MIYd0Hkm1Jio8SGXxiL6KOMP_3Sh7GfHoaTvUb9FuuAO5FU50dWDw5dUegkXT0HLiuOClk3SbPGSI-xKwTVBGVib2WVI2nuzLt2ZwxzUhuudsb7eaqe3uyySu5oYAWP2lx1GnpSsggFLCxGFpPX-cU7Acn7A6rlG_CEFueIg4NtRsZt65oepFspylo4aGm2FZiz86mn24NR5sCOlZgR687E4HFgThq-Y5eP99OjSEdk2EY-F3aFp9h4D0mBWc_kMgpyHYYo4a5RfyofrVGWxoqVbng-Dlo8NPM_Syh6QNIAhSgK_cfnAD42bxy_VNunufp_lS8xvSm7SmqvdlMTPTCEUZrkfQJ7hH3CUFMMmAAEgxP_fbUCVWdvLSugSk3Fi9e1lK=w1920-h919"}/>
      
      
      <h1 className="Title" style={{backgroundColor:'black',padding:'15px',margin:'0'}}> Education </h1>  
      {/* <div className="aboutInfo">
        <img src="https://pbs.twimg.com/profile_images/1716840237450854400/FJuHG7C1_400x400.jpg"></img>
        <a className="readMore" href="https://github.com/shaggysci3/CatQuest" target="_blank" rel="noopener noreferrer">Read More</a>
      </div> */}

      <div className="aboutInfo">
      <a className="readMore" href="https://flatironschool.com/tech-training-solutions/#skillsTabblock_975b3d359c42ca512c96e99748f96a4c4" target="_blank" rel="noopener noreferrer">Read More</a>
        <img style={{ border: '2px solid black', scale: '170%' }} src="https://imgs.search.brave.com/RhgplZAA43WpqAPL8bnVuHdzjJA8gTfHS8AIdufrXuM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b25saW5lc2Nob29s/c2d1aWRlLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvZmxhdGly/b24tc2Nob29sLWxv/Z28ucG5n"></img>
      </div>

      </div>
      </>
    )
  }
  export default Home