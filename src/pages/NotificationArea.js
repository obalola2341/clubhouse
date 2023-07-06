import React from 'react'
import { Link } from 'react-router-dom';
import style from "../style/PhoneConfirm.module.css";
function NotificationArea() {
  return (
    <div className={style.PhoneconfirmationContainer}>
        <div className='text-center'>
            <h1 className='mb-4'> Last, Important step!</h1>
            <h1 className='mb-3'>Enable notification to know when people are speaking</h1>
            <div className={style.NotificationArea}>
                <div className="mb-3">
                    <h3> "Clubhouse" would like to send you notification</h3>
                    <p> Notification may inclde alerts, sounds, and icon badges</p>
                    <div className={style.action_btn}>
                        <Link exact to="/">
                            Dont allow
                        </Link>
                        <Link exact to="/home">
            
                            Allow
                        </Link>
                        <img 
                        src='images__1_-removebg-preview.png'
                        alt=' '
                        className={style.hand_icon}
                        />
                    </div>
                </div>
            </div>
        
        </div>
    
    </div>
    
  )
}

export default NotificationArea