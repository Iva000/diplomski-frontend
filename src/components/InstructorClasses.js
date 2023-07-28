import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
import SingleClass from './SingleClass';

function InstructorClasses(){

    // const location = useLocation();
    // const i = new URLSearchParams(location.search);
    // const location = useLocation();
    // const i = location.state;
    const [instructorClasses, setClasses]= useState([]);
    const [instructor, setInstructor] = useState([]);
    const {id} =useParams();

    console.log(id);

    useEffect(()=>{
        console.log("salje u termine");
        
        axios.get("http://127.0.0.1:8000/api/getClass/"+id).then((res)=>{
            console.log(res.data.data);
            setClasses(res.data.data);
            //setInstructor(instructorClasses[0].instructor);
            //console.log(instructor);
            console.log(instructorClasses[0]);
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