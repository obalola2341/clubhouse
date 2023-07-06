
import React from 'react';
import style from "../style/explore.module.css";
import { Link } from 'react-router-dom';

function Subheader(props) {
  return (
    <div className={style.head}>
       
        <Link exact to="/home"><img src='imaghes.png' style={{rotate:"180deg", width:"30px", height:"30px"}}/></Link>
        <h3>Explore  </h3>
        </div>
  )
}

export default Subheader