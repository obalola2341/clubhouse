import React from 'react';
import data from "../Data/DailyCard.json";
import style from "../style/Dailycard.module.css";
//import style from "../style/PhoneConfirm.module.css";


function DailyCard() {
    //console.log(data[0].time)
  return (

    <div className={style.dailycard}>
        {data.map(items=>{
            //console.log(items)
                return( 
                        <div>
                            <span> {items.time}</span>
                            <div>
                                <span> {items.title}</span>
                                <p>{items.description}</p>
                            </div>
                        </div>
                            
                       );
                
        })}
    </div>
    
    
  )
}

export default DailyCard 