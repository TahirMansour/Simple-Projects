import React from "react";
import {BsFillArrowUpRightCircleFill} from "react-icons/bs"

function Preview(props){
 return(
    
     <div className="Preview">
         <div className="toolbar">
            <h3 style={{"margin" : 0 }}>Preview </h3>
            <BsFillArrowUpRightCircleFill />
    </div>
  <div>{props.input}</div>  
     </div>
 )
}

export default Preview;