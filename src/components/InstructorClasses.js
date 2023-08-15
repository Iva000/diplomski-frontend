import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
import SingleClass from './SingleClass';

function InstructorClasses(){

    const [instructorClasses, setClasses]= useState([]);
    const {id} =useParams();

    console.log(id);

    useEffect(()=>{
        console.log("salje u termine");
        
        axios.get("http://127.0.0.1:8000/api/getClass/"+id).then((res)=>{
            setClasses(res.data.data);
        });
    }, []);

    return(
        <div>
            <h1>Pronađi termin koji ti odgovara!</h1> 
            <div>
            {instructorClasses.map((c) => (
            <SingleClass
            key={c.id}
            c={c}/>))}
            </div>
        </div>
    );
}

export default InstructorClasses;