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

    function handleReturnValue(data){
        let newReservations = reservations.filter((res)=> res.id!=data);
        setReservations(newReservations);
    };

    function onAccept(data){
        reservations.forEach(element => {
            if(element.period.id==data.period.id && element.id!=data.id){
                element.status=2;
                axios.post("http://127.0.0.1:8000/api/updateReservation", element).then((res)=>{
                    
                })
            }
        });
        let newReservations = reservations.filter(a => a.status ==0);
        setReservations(newReservations);
        
    }

    return(
        <div>
            <h1>Zahtevi za časove</h1>
            <div>
                {reservations.map((reservation)=>(
                    <SingleReservation
                    key={reservation.id}
                    r={reservation}
                    flag={1}
                    onReturnValue={handleReturnValue}
                    onAccept={onAccept}
                    />
                ))}
            </div>
        </div>
    );
}

export default ClassReservations;