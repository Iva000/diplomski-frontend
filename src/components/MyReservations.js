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

    let freeReservations = [];
    let i=1;
    reservations.forEach(reservation => {
        console.log("usao u for each");
        if(reservation.status==1){
            freeReservations[i]=reservation;
            console.log(i);
        }
        if(i%5===0 && reservation.totalPrice>0){
            console.log("daje nula cenu za i ", i);
            reservation.totalPrice=0
            axios.post("http://127.0.0.1:8000/api/updateReservation", reservation).then((res)=>{
            });
        }
        i=i+1;
    });

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