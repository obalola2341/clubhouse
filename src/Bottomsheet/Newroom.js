import React,{useState} from 'react';
import {AiOutlineFile, AiOutlinePlus} from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';
import data from "../Data/Newroomdata.json"

import style from "../style/Roomdetail.module.css"


function Newroom(props) {
 
  const [micmutevisible,setmicmutevisible] = useState(false);
  const [ itemsvisible, setitemsvisible] = useState(true)

  const card= props.carddetail
  //console.log(card)
  return (
    <div className={style.roomdetailcontainer}> 
      <div className={style.head}>
        <div className={'d-flex align-items-center'}>
          <a href='#' onClick={()=>{props.setsheetvisible(false)}}> 
            <img src='imaghes.png' className={style.nahmage} />
          </a>
          <span>Hallway</span>
        </div>
        <div>
          <AiOutlineFile/>
          <img src='pngegg.png' className={style.profileimage}/>
        </div>
      </div>
      <div className={style.roomdetailcard}>
        <div className='d-flex align-items-center justify-content-between flex-wrap' style={{pading:"0.5em 1em"}}>

            { card.members.map((item)=>( 
                  <div className={style.membercontainer}>
                    {micmutevisible ? (
                    <div className={style.audioicon}> 
                      <BsMicMuteFill/>
                    </div>
                    ): (" ")}
                        
                          
                    <img src='pngegg.png'/>
                    <p><span>*</span>{item.first_name}</p>
                          
                          
                        
                  </div>
               ))
            }
        </div>
      </div>

      <div className={style.footer}> 
            <button onClick={()=>props.setsheetvisible(false)}>
              <img src='download.png'/> Leave Quietly
            </button>
            <div>
              <button>
                <AiOutlinePlus/>
              </button>
              <button>
                <img src='download.jpg'/>
              </button>
              <button onClick={()=>setmicmutevisible(!micmutevisible)}>
                {micmutevisible ? <BsMicMuteFill/> :<BsMicFill/> }
              </button>
            </div>
      </div>
    </div>
  )
}

export default Newroom

