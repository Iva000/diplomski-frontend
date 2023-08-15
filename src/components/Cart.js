import { useState, useEffect } from "react";
import axios from "axios";
import SingleReservation from "./SingleReservation";

function Cart(){

    const[reservations, setReservations]= useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getUsersReservations/"+window.sessionStorage.getItem('auth_user')+"/"+"-1")
        .then((res)=>{
            console.log(res.data.data);
            setReservations(res.data.data);
        })
    },[]);
    
    function handleReturnValue(data){
        let newReservations = reservations.filter((res)=> res.id!=data);
        setReservations(newReservations);
    };

    return(
        <div>
            <h1>Moja korpa</h1>
            <h3>Svaki peti čas Vam mi poklanjamo gratis! :)</h3>
            <div>
                {reservations.map((reservation)=>(
                    <SingleReservation
                    key={reservation.id}
                    r={reservation}
                    flag={-1}
                    onReturnValue={handleReturnValue}
                    />
                ))}
            </div>
        </div>
    );

}

export default Cart;