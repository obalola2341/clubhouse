import React from 'react'
//import style from "../style/CodeConfirm.module.css";
import { Link } from 'react-router-dom';
import style from "../style/PhoneConfirm.module.css";

function Codeconfirm() {
  return (
    <div className={style.PhoneconfirmationContainer}>
        <div className='text-center'>
          <Link exact to={"/invite"} className={style.Backbtn}>
              <img src='images-removebg-preview (1).png' width={20} height={20}/>
          </Link>
          <h1 style={{width:"100% ", maxWidth:"200px", marginBottom:"1em"}}> ENTER THE CODE WE SENT TO YOU</h1>
          <input type='text'
          style={{width:"100%", border:"none", textAlign:"center", outline:"none"}}/>
          <p className='mt-2' > Didnt receive it ? <span><br/>Tap to resend. </span></p>
        </div>
        <Link exact to={"/NotificationArea"} className="primaryBtn d-flex align-items-center" style={{textDecoration: 'none'}}>
           Next
        </Link>
    </div>
  )
}

export default Codeconfirm