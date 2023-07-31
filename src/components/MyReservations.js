import { useState, useEffect } from "react";
import axios from "axios";
import SingleReservation from "./SingleReservation";

function MyReservations(){

    const[reservations, setReservations]= useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getPreviousUsersReservations/"+window.sessionStorage.getItem('auth_user'))
        .then((res)=>{
            console.log(res.data.data);
            setReservations(res.data.data);
        })
    },[])

    return(
        <div>
            <h1>Moje rezervacije</h1>
            <div>
                {reservations.map((reservation)=>(
                    <SingleReservation
                    key={reservation.id}
                    r={reservation}
                    flag={0}
                    />
                ))}
            </div>
        </div>
    );

}

export default MyReservations;