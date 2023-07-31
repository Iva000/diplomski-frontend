import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleReservation from './SingleReservation';

function Schedule(){

    const[schedule, setSchedule]= useState([]);

    const currentDate= new Date();

    const today = format(currentDate, 'dd.MM.yyyy.');

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getSchedule/"+window.sessionStorage.getItem('auth_instructor')).then((res)=>{
            console.log(res.data.data);
            setSchedule(res.data.data);
        })
    },[])

    return(
        <div>
            <h1>Današnji raspored</h1>
            <h3>{today}</h3>
            <div>
                {schedule.map((reservation)=>(
                    <SingleReservation
                    key={reservation.id}
                    r={reservation}
                    flag={2}
                    />
                ))}
            </div>
        </div>
    );
}

export default Schedule;