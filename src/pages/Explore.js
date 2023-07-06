import React from 'react';
import {DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../Data/Explore.json";
import style from "../style/explore.module.css"
import Subheader from '../components/Subheader';

function Explore() {
    
    const {people, conversation} = data[0];
    //console.log(conversation)
  return (
    
    <div className={style.explorecontainer}>
       
        <div className={style.header}>
        <Subheader/>
            <img src='search-icon.svg' width=""/>
            <input style={{

                backgroundColor:"#f4f4f4",
                borderRadius:"0.8em",
                padding:"0.3em 1em",
                border:"none",
                boxShadow:"none",
            }} 
                size="large"
                placeholder='find people and clubs'
                prefix={<img src='logo192.png' width="150px"/> }
            >
            
            </input>
        </div>
        <h6> PEOPLE TO FOLLOW</h6>
        <div className={style.peoplecontainer}> 
            {people.map((item)=>{
                return(
                    <div className='d-flex align-items-center'>  
                    
                        <div>
                            <img src='Screenshot__484_-removebg-preview.png' style={{margin:"10px", width:"30px", borderRadius:"1.1em "}}/>
                                    
                            <div className={style.titledisc}>
                                <h5> { item.title}</h5>
                                <p> {item.description}</p>
                            </div>
                    
                        </div>
                           
                    
                       

                        <div>
                            <button> Follow</button>
                        </div> 
                    </div>
                    
                )
                
            })}

            <button className={style.showmore}>
                Show more people <DownOutlined/>
            </button>
        </div>
            <div className='row mx= 0'>
                <h6>FIND CONVERSATION ABOUT ...</h6>
                {conversation.map((item=>{

                    return(    <div className='col-6 px-3 mb-3'>
                    <div className={style.conversationcard}>
                        <h6> 
                            <FireOutlined/>
                            {item.title}
                        </h6>
                        <p>{item.description}</p>
                    </div>
                </div> )
                

                }))}
            </div>
    </div> 

  )
}

export default Explore