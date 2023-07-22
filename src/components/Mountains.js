import React, { useEffect, useState } from "react";
import SingleMountain from "./SingleMountain";
import axios from 'axios';
import "../css/mountains.css";

function Mountains(){

    const[mountains, setMountains]= useState(['b', 'c']);
 
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/mountains").then((res)=>{
         setMountains(res.data.data);    
       })
       .catch((e)=>{console.log(e)})
    
    }, []);

    return(
        <div>
            <h1>Koje skijalište birate?</h1>
            <div className="allMountains">
            {mountains.map((mountain) => (
            <SingleMountain
            key={mountain.id}
            m={mountain}/>))}
            </div>
        </div>
    );
}
export default Mountains;