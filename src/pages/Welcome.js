import React, {useEffect, useState} from 'react'
import style from "../style/Welcome.module.css";
import {Link} from "react-router-dom";
import {auth, provider}from "../Firebase";
import { useNavigate } from 'react-router-dom';

function Welcome() {

  const [userlogin,setuserlogin] = useState();
  const navigate = useNavigate();

  let signin=()=>{

    auth.signInWithPopup(provider)
    .then((result)=>{
        let user = result.user
        console.log(result.user)
        setuserlogin({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL



        })
        navigate('/Home');
        console.log(userlogin)
    })
}
  return (
    <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}> 
            <p>We give you a warm welcome! I hope you will find us productive and helpful as you plan for our betterment. So glad to include you on our team.</p>
            <p>Messages of welcome are rarely found on the web. That is why we have these samples listed for your perusal at any time. With these messages, you will never be caught off-guard in any given situation. Furthermore, being cordial gives you an edge over anyone you will come across and may establish valuable connections with people for your career growth. Also, these messages will bring profoundness to express the gladness you have in your heart in welcoming important people into your life.</p>
            <p>Paul, Rohan and the club house team</p>
        </div>
        <div className={style.actionBtn} style={{width:"100%"}}>
            <Link exact to="/invite" className='primaryBtn d-flex align-items-center mb-3' style={{ textDecoration: 'none' }}> Get your Username</Link>
            <Link onClick={signin}> have an invite text ? sign in.</Link>
        </div>

       
    </div>
  )
}

export default Welcome