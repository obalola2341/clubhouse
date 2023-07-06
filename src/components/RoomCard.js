import React from 'react';
import data from "../Data/RoomCard.json";
import style from "../style/Roomcard.module.css";
import {BsChatDots,BsChatDotsFill,BsFillPersonFill} from "react-icons/bs" 


function RoomCard() {
   
  return (
    <div>
        {data.map(items=>{
            return( 

                <div className={style.roomcard}>
                    <div >  
                        <h2>{items.title}</h2>
                        <h6>{items.sub_title} </h6>
                    </div>
                    <div>
                        <img/>
                        <img/>
                    </div>
                    <div className={style.roommembers}>
                        <div>
                             <img src='pngegg.png'/>
                             <img src='Screenshot__484_-removebg-preview.png'/>
                        </div>
                        <div className={style.span}>
                            {items.members.map(person=>{

                                return( 
                                    <div>
                                        
                                        <div>
                                            <p>
                                                {person.first_name} {person.last_name} <BsChatDots/>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                            <p  className='d-flex align-items-center'>
                            <span className='mr-2'> 1.8</span>  <BsFillPersonFill/>
                            <span className=' '>{ " "}</span>
                            <span className='mr-6'>5</span>  <BsChatDotsFill/>
                            
                            </p>
                        </div>
                       

                    </div>
                </div>
               
              
            
            )
            
        })}
    
    </div>
  )
}

export default RoomCard 
