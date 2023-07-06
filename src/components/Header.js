import React from 'react'
import { Link } from 'react-router-dom';
import style from "../style/Header.module.css";
import { Router } from 'react-router'

function Header() {
  return (
    <div className={style.header}>
       
        <Link exact to="/explore">
            <img src='search-icon.svg'/> 
        </Link>
    
        <div className={style.navbar}>
            <Link exact to="/Friends_invite">
                <img src='nav-network.svg'/>
            </Link>
            <Link exact to="/Activity">
                <img src='nav-notifications.svg'/>
            </Link>
            <Link exact to="/Upcoming" >
                <img src='calendar-date-23-icon.webp' width={40} height={40}/>
            </Link>
            <Link exact to="/Profile">
                <img src='login-hero.svg' width={40} height={40}/>
            </Link>
        </div>
    
    </div>
    
  )
}

export default Header

