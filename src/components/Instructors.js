import SingleInstructor from "./SingleInstructor";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../css/instructors.css";

function Instructors({flag}){

    const[instructors, setInstructors]= useState([]);
    const[searchField, setSearchField]= useState("");
    const[activity, setActivity] = useState("");

 
    useEffect(()=>{
            axios.get("http://127.0.0.1:8000/api/getInstructorsByStatus/" + flag).then((res)=>{
            console.log("http://127.0.0.1:8000/api/getInstructorsByStatus/" + flag);
            setInstructors(res.data.data);   
            })
            .catch((e)=>{console.log(e)})
        
    
    },[flag]);

    function handleChange(e){
        setSearchField(e.target.value);
    }

    function changeActivity(e){
        console.log(e.target.value);
        setActivity(e.target.value);
    }

    const filteredInstructors = instructors?.filter((instructor) => {
        if(activity==="sve" || activity==""){
            return instructor.name.toLowerCase().includes(searchField.toLowerCase()) || instructor.surname.toLowerCase().includes(searchField.toLowerCase());
        }
        else{
            return instructor.activity==activity && (instructor.name.toLowerCase().includes(searchField.toLowerCase()) || instructor.surname.toLowerCase().includes(searchField.toLowerCase()))
        }
    });

    return(
        <div>
            {flag==1 ? (
                <h1>Naši instruktori</h1>
            ): (<h1>Zahtevi za nove instruktore</h1>)}
            
            <div className="pa2" style={{ display: "flex", marginLeft: 60 }}>
                <input
                className="pa3"
                type="search"
                placeholder="Pretraga"
                onChange={handleChange}
                />
            <div className="dropDownActivity">
                <label for="form-control mt-1">Aktivnost: </label>
                <select
                className="form-control mt-1"
                placeholder="Aktivnost"
                name="activity"
                onInput={changeActivity}
                >
                <option key="0" value="sve" default>Sve</option>
                <option key="1" value="skijanje">Skijanje</option>
                <option key="2" value="bordanje">Bordanje</option>
                
                </select>
            </div>
            </div>
            <div className="allInstructors">
            {filteredInstructors.map((instructor) => (
            <SingleInstructor
            key={instructor.id}
            i={instructor}
            flag={flag}/>))
            }
            </div>
        </div>
    );
}
export default Instructors;