import SingleInstructor from "./SingleInstructor";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import SingleEquipment from "./SingleEquipment";
//import "../css/instructors.css";

function Equipments(){

    const[equipments, setEquipments]= useState([]);
    const[searchField, setSearchField]= useState("");
 
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/equipments").then((res)=>{
         setEquipments(res.data.data);   
       })
       .catch((e)=>{console.log(e)})
    
    }, []);

    function handleChange(e){
        setSearchField(e.target.value);
    }

    const filteredEquipments = equipments?.filter((equipment) => {
            return equipment.name.toLowerCase().includes(searchField.toLowerCase());
        });

    return(
        <div>
            <h1>Pronađi sve što ti je potrebno!</h1>
            <div className="pa2" style={{display: "flex", marginLeft: 60 }}>
                <input
                className="pa3"
                type="search"
                placeholder="Pretraga"
                onChange={handleChange}
                />
            
            </div>
            <div className="allEquipment">
                {filteredEquipments.map((equipment) => (
            <SingleEquipment
            key={equipment.id}
            e={equipment}/>))}
            </div>
        </div>
    );
}
export default Equipments;