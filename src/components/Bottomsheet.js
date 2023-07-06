import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from "../style/Bottomsheet.module.css";
import Startroom from '../Bottomsheet/Startroom'
import Newroom from '../Bottomsheet/Newroom';

function Bottomsheet(props) {
  
  return (
    <div>
      <SwipeableBottomSheet 
                              
                              open={props.sheetvisible}
                              onChange={()=>{
                                props.setsheetvisible(!props.sheetvisible)
                                props.setitemsvisible(true)

                              }}
                              fullScreen={props.sheettitle=='room detail' ? true: false}

                              
                              >
        <div style={{backgroundColor: props.sheettitle == "profile" ? 'transparent' : " "  }}
             className={style.bottomsheetcontainer}
             
            >
            {props.sheettitle=='start room'? (
              <Startroom 
                              setsheetcreateroom={props.setsheetcreateroom}
                              setsheetvisible={(item)=>{
                                props.setsheetvisible(item);
                                props.setitemsvisible(true);
                              }}
            /> 
            ): props.sheettitle=="New room" ?(<Newroom 
              setsheetcreateroom={props.setsheetcreateroom}
              setsheetvisible={(item)=>{
                props.setsheetvisible(item);
                props.setitemsvisible(true);
              }}
              carddetail={props.carddetail}
/> ) :(" ") }
        </div>
      </SwipeableBottomSheet>

    
    </div>
  )
  
}

export default Bottomsheet

