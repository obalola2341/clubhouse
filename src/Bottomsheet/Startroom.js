import React, {useState} from 'react'
import style from "../style/Bottomsheet.module.css"
import {FcGlobe} from "react-icons/fc" 

function StartRoom(props) {
    const [room,setroom]=useState("open")
    
  return (
    <div className='text-center' >
        <div className={style.switch_line}>
        
        </div>
        <div className='text-right'>
            <button className={style.addtopicbtn}>
                +Add a topic
            </button>
        </div>
        <div className={style.selectroom}>
            <button className={room=="open" ? style.active: " "}
                     onClick={()=>setroom("open")}
                    >
                    <div> 
                        <FcGlobe/>
                    </div> 
                    open
            </button>
             <button className={room=="social" ? style.active: " "}
                     onClick={()=>setroom("social")}
                    >
                    <div> 
                        <FcGlobe/>
                    </div> 
                    social
            </button>
            <button className={room=="close" ? style.active: " "}
                     onClick={()=>setroom("close")}
                    >
                    <div> 
                        <FcGlobe/>
                    </div> 
                    close
            </button>
        </div>
        <p>Start a room <span>{room=="close" ? " for people i choose":room=="social" ? "for peple i follow" : " open to everyone" } </span></p>
        <div className='text-center'>
            <button className={style.letgobtn} onClick={()=>{props.setsheetvisible(true); props.setsheetcreateroom(true)}}> Lets go </button>
        </div>
    </div>
  )
} 

export default StartRoom

