import React, {useState} from 'react'
import Header from '../components/Header'
import DailyCard from '../components/DailyCard'
import RoomCard from '../components/RoomCard'
import {AiOutlinePlus } from "react-icons/ai"
import { BsGrid3X3Gap } from 'react-icons/bs'
import style from "../style/Home.module.css"
import Bottomsheet from '../components/Bottomsheet'
import data from "../Data/RoomCard.json"
import Newroomdata from "../Data/Newroomdata.json"



function Home() {

  const [itemsvisible,setitemsvisible]= useState(true);
  const [sheetvisible,setsheetvisible]= useState(false);
  const [sheetcreateroom,setsheetcreateroom]= useState(false);
 
  const [loadervisibility,setloadervisibility]= useState(false);
  const [cardid,setcardid]= useState(1);

  

  return (


    <div className={style.home_continer}>
        {
          loadervisibility ? (
            <div style={{
                  position:"fixed",
                  top:"0",
                  right:"0",
                  bottom:"600",
                  left:"0",
                  display: "flex",
                  alignItems:"center",
                  justifyContent:"center",
                  zIndex:99
                }}
                ><img style={{width:500}} src='1_CsJ05WEGfunYMLGfsT2sXA.gif' />
            </div>
            ) :( " ")
        }
       
        <Header/>
        
        <div className="app_layouts">
            <div className={style.home_continer}>
                <DailyCard/>
                <RoomCard/>
                
            </div>
            
        </div>
        <div className={style.action_btn}>
            <button onClick={()=>setsheetvisible(true)} ><AiOutlinePlus className='mr-2'/> start a room</button>
            <button><BsGrid3X3Gap/></button>
        
        </div>

        <div >
          <Bottomsheet
                      sheettitle="start room"
                      setsheetvisible={(item)=>setsheetvisible(item)}
                      sheetvisible={sheetvisible}
                      carddetail={data.find((item)=>item.id==cardid)}
                      setitemsvisible={(item)=>setitemsvisible(item)}
                      setsheetcreateroom={(item)=>{
                        setloadervisibility(true);
                        setTimeout(() => {
                          setsheetcreateroom(item);
                          setloadervisibility(false)
                          
                        }, 1000);
                      }} 
                      />

          <Bottomsheet
                      sheettitle="New room"
                      setsheetvisible={(item)=>setsheetcreateroom(item)}
                      sheetvisible={sheetcreateroom}
                      carddetail={Newroomdata}
                      setitemsvisible={(item)=>setitemsvisible(item)}
                                        
                      />

        </div>
    </div>  
   
  )
 
}   

export default Home