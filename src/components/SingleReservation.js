import { useState, useEffect } from "react";
import axios from "axios";
import "../css/singleReservation.css";

function SingleReservation({r, flag}){

    const[equipment, setEquipment]=useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getEquipmentReservation/"+r.id).then((res)=>{
            setEquipment(res.data.reservation_equipment);
            console.log("preuzeta oprema: ",res.data.reservation_equipment)
        })

    },[])

    // equipment.forEach(element => {
    //         r.totalPrice=r.totalPrice+element.price;
    //         console.log("cena po casu: ", r.id," je ",r.totalPrice);
    //         callUpdate();
    // });

    // function callUpdate(){
    //     axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
    //         console.log(res);
    //     })
    // }

    function sendRequest(){
        r.status=0;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
            alert("Zahtev je uspešno poslat!");
        })
    }

    function acceptRequest(){
        r.status=1;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
        })
        r.period.status=1;
        axios.post("http://127.0.0.1:8000/api/updateClass", r.period).then((res)=>{
            console.log(res);
            alert("Zahtev je uspešno prihvaćen!");
        })
    }

    function declineRequest(){
        r.status=2;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
            alert("Zahtev je uspešno odbijen!");
        })
    }

    if(flag==1){
        return(
            <div className="reservationCardRequest">
                <div className="reservationCardRequestContainer">
                        <div className="rcrc1">
                            <h3 className="reservationClass1">{r.period.date}</h3>
                            {/* <br/> */}
                            <h3 className="reservationClass1">{r.period.time}h</h3>
                            <p>{r.user.name} {r.user.surname}</p>
                            <p>{r.user.phoneNumber}</p>
                        </div>

                        <div className="rcrc2">
                            {equipment.map((e)=>(
                                <div>
                                    <p >{e.name}, {e.pivot.equipmentInformation}</p>
                                </div>
                            ))}
                            <h3>Ukupno: {r.totalPrice}€</h3>
                        </div>
                </div>
            <div>
            <button className="reservationButton1" onClick={declineRequest}>Odbij</button>
            <button className="reservationButton" onClick={acceptRequest}>Prihvati</button>
            </div>
            
        </div>
        );
    }if(flag==2){
        return(
            <div className="reservationCardRequest">
                <div className="reservationCardRequestContainer">
                        <div className="rcrc1">
                            <h3 className="reservationClass1">{r.period.date}</h3>
                            {/* <br/> */}
                            <h3 className="reservationClass1">{r.period.time}h</h3>
                            <p>{r.user.name} {r.user.surname}</p>
                            <p>{r.user.phoneNumber}</p>
                        </div>

                        <div  className="rcrc2">
                            {equipment.map((e)=>(
                                <div>
                                    <p >{e.name}, {e.pivot.equipmentInformation}</p>
                                </div>
                            ))}
                            <h3>Ukupno: {r.totalPrice}€</h3>
                        </div>
                </div>
        </div>
        );
    }

    return(
        <div className="reservationCard">
            {flag==0 && r.status==0 ? (
                    <p className="statusBlack">Status: Na čekanju</p>
                ):(<></>)}
                {flag==0 && r.status==1 ? (
                    <p className="statusGreen">Status: Prihvaćen</p>
                ):(<></>)}
                {flag==0 && r.status==2 ? (
                    <p className="statusRed">Status: Odbijen</p>
                ):(<></>)}
            <div className="reservationClass">
                <p className="reservationClass1">1 x čas, instruktor {r.period.instructor.name} {r.period.instructor.surname}, datum {r.period.date}, početak {r.period.time}h</p>
                <p>{r.period.price}€</p>
            </div>
            {equipment.map((e)=>(
                <div className="reservationClass">
            <p className="reservationClass1">1 x {e.name}, {e.description} {e.pivot.equipmentInformation}</p>
                <p>{e.price}€</p>
            </div>
            ))}
            <p>Ukupno: {r.totalPrice}€</p>
            {flag==-1 ? (
            <button className="reservationButton" onClick={sendRequest}>Potvrdi rezervaciju</button>):(<></>)}
        </div>
    );
}

export default SingleReservation;