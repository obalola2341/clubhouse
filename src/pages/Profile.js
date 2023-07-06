
import React from 'react';
import style from "../style/Profile.module.css";
import exploreStyle from "../style/explore.module.css" ;
import { Link } from 'react-router-dom';
import { BsAt,BsUpload, BsPlus } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';




function Profile() {
  return (
    <>
    <div className={style.profilecontainer}>
        <div className={exploreStyle.header}>  
            <div className={`${exploreStyle.head} text-right mb-0`}>
                <Link to="/home">
                    <img src='imaghes.png' className={exploreStyle.arrow_icon}/>
                </Link>
                <div className={style.actionbtn}>
                    <BsAt/>
                    <BsUpload/>
                    <AiOutlineSetting/>
                </div>
            </div>
        </div>
        <img src='Screenshot__484_-removebg-preview.png'  className={style.profileimage}/> 
         <h4> deborah</h4> 
         <p> programmer</p>  
        <div className={style.follow}> 
           <p> <span> 0</span> followers </p>
            <p> <span> 51 </span> following </p>
            
        </div>
        <button>add a bio</button>
        <div>
            <button>
                <AiOutlineTwitter/>Add Twitter
            </button>
            <button>
                <AiOutlineInstagram/>Add Instagram
            </button>
        </div>
        <div className={style.nominated}> 
            <img src='Screenshot__484_-removebg-preview.png' />
            <div>
                <p>joined 14 july 2020 </p>
                <p>norminated by <span> alcaron malkanaki</span></p>
            </div>
        </div>
        <p>Member of</p>
        <button className={style.addmemberbtn}>
            <BsPlus/>
        </button>
        
    </div>
    </>
  )
}

export default Profile