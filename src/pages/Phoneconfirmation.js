import React, {useState} from 'react';
import {Link} from "react-router-dom";
import style from "../style/PhoneConfirm.module.css";
import PhoneInput from 'react-phone-number-input/input'




function Phoneconfirmation() {
    let [value,setValue]= useState();
    

  return (
    <div className={style.PhoneconfirmationContainer}>
        <Link exact to={"/"} className={style.Backbtn}>
            <img src='images-removebg-preview (1).png' width={20} height={20}/>
        </Link>
        <h1>Enter Your Phone Number</h1>
        <PhoneInput
        country="US"
        value={value}
        onChange={setValue} />
        <p>By entering your number, you are agreeing to our {" "}
            <span>Terms of service and privacy policy.
            </span> <br/>
            Thanks !
        </p>
        <Link exact to={"/codeconfirm"} className= "primaryBtn d-flex align-items-center" style={{ textDecoration: 'none' }}>
            NEXT
        </Link>
        
    </div>
    
    )

    
        
  
}

export default Phoneconfirmation