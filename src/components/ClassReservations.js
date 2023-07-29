import { useState, useEffect } from "react";
import axios from "axios";
import SingleReservation from "./SingleReservation";

function ClassReservations(){
    const[reservations, setReservations]= useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getInstructorsReservations/"+window.sessionStorage.getItem('auth_instructor')+"/"+"0")
        .then((res)=>{
            console.log(res.data.data);
            setReservations(res.data.data);
        })
    },[])

    return(
        <div>
            <h1>Zahtevi za časove</h1>
            <div>
                {reservations.map((reservation)=>(
                    <SingleReservation
                    key={reservation.id}
                    r={reservation}
                    flag={1}
                    />
                ))}
            </div>
        </div>
    );
}

export default ClassReservations;