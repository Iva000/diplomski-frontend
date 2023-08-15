import SingleInstructor from "./SingleInstructor";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../css/instructors.css";

function Instructors({flag}){

    const[instructors, setInstructors]= useState([]);
    const {fromMountain} = useParams();
    const[filterData, setFilterData]= useState({
        status:"",
        name: "",
        dateFrom:"",
        dateTo:"",
        mountain:fromMountain,
        activity:""
    })
    
    console.log("from mountain", fromMountain);
 
    useEffect(()=>{
        let newData = filterData;
        newData["status"]=flag;
        setFilterData(newData);
        // if(fromMountain!=null && fromMountain>0){
        //     axios.get("http://127.0.0.1:8000/api/getInstructorsByMountain/"+fromMountain).then((res)=>{
        //     setInstructors(res.data.data);   
        //     })
        //     .catch((e)=>{console.log(e)}) 
        // }else{
        //     axios.get("http://127.0.0.1:8000/api/getInstructorsByStatus/"+flag).then((res)=>{
        //     setInstructors(res.data.data);   
        //     })
        //     .catch((e)=>{console.log(e)})
        //  } 

        console.log("filter: ", filterData);
        console.log("flag",flag);
        axios.post("http://127.0.0.1:8000/api/filterInstructors", filterData).then((res)=>{
            setInstructors(res.data.data);   
        })
        .catch((e)=>{console.log(e)})
    },[flag]);

    function handleChange(e){
        let newData = filterData;
        newData[e.target.name]=e.target.value;
        setFilterData(newData);
        getFilteredInstructors();
    }

    function getFilteredInstructors(){
        axios.post("http://127.0.0.1:8000/api/filterInstructors", filterData).then((res)=>{
            setInstructors(res.data.data);   
        })
        .catch((e)=>{console.log(e)})
    }


    function handleReturnValue(data){
        let ins = instructors.filter((ins)=> ins.id!=data);
        setInstructors(ins);
    };

    return(
        <div>
            {flag==1 ? (
                <h1>Naši instruktori</h1>
            ): (<h1>Zahtevi za nove instruktore</h1>)}
            
            <div className="pa2" style={{ 
                display: "flex", 
                marginLeft: 60 }}>

                <input
                className="pa3"
                type="search"
                placeholder="Pretraga"
                onChange={handleChange}
                name="name"
                />

                <div className="dropDownActivity">
                <label for="form-control mt-1">Aktivnost: </label>
                <select
                className="form-control mt-1"
                placeholder="Aktivnost"
                name="activity"
                onInput={handleChange}
                >
                <option key="0" value="" default>Sve</option>
                <option key="1" value="skijanje">Skijanje</option>
                <option key="2" value="bordanje">Bordanje</option>
                
                </select>
                </div>

                <div className="dropDownActivity">
                <label>Planina: </label>
                    <select name="mountain"
                            onInput={handleChange}
                            defaultValue={fromMountain}
                            >
                            <option value="0"></option>
                                <option value="1">
                                    Tornik
                                </option>

                                <option value="2">
                                    Kopaonik
                                </option>

                                <option value="3">
                                    Stara planina
                                </option>

                                <option value="4">
                                    Brezovica
                                </option>
                            </select>
                </div>

                <div className="dropDownActivity">
                    <label>Datum: </label>
                    <input
                        type="date"
                        id="dateInput"
                        name="dateFrom"
                        onChange={handleChange}
                        placeholder="Od"
                    />
                     - 
                    <input
                        type="date"
                        id="dateInput"
                        name="dateTo"
                        onChange={handleChange}
                        placeholder="Do"
                    />

                </div>
            </div>

            
            <div className="allInstructors">
            {instructors.map((instructor) => (
            <SingleInstructor
            key={instructor.id}
            i={instructor}
            flag={flag}
            onReturnValue={handleReturnValue}
            />))
            }
            </div>
        </div>
    );
}
export default Instructors;