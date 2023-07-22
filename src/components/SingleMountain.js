import { useState } from "react";
import "../css/singleMountain.css";

function SingleMountain({m}){

    return(
        <div>
        {m.id%2===0 ? (<div className="mountainCard1">
        <h5>{m.name}</h5>
        <img src={m.photo} alt="mountain photo" className="mountainPhoto1"></img>
    </div>)  :
         (<div className="mountainCard2"> 
        <h5>{m.name}</h5>
        {console.log(m.photo)}
        <img src={m.photo} alt="mountain photo" className="mountainPhoto2"></img>
        </div>)
         } 
        </div>
        );
}

export default SingleMountain;