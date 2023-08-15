import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
import "../css/singleReservation.css";

function SingleReservation({r, flag, onReturnValue, onAccept}){

    const[equipment, setEquipment]=useState([]);

    const[totalPriceReservation, setTotalPrice]=useState(r.totalPrice);

    const currentDate= new Date(r.period.date);

    const today = format(currentDate, 'dd.MM.yyyy.');

    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getEquipmentReservation/"+r.id).then((res)=>{
            setEquipment(res.data.reservation_equipment);
            console.log("preuzeta oprema: ",res.data.reservation_equipment)
        })

    },[]);

    function sendRequest(){
        r.status=0;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
            alert("Zahtev je uspešno poslat!");
        });
        sendDataToParent(r.id);
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
        //sendDataToParent(r.id);
        onAccept(r);
    }

    function declineRequest(){
        r.status=2;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
            alert("Zahtev je uspešno odbijen!");
        })
        sendDataToParent(r.id);
    }

    function giveupRequest(){
        r.status=3;
        axios.post("http://127.0.0.1:8000/api/updateReservation", r).then((res)=>{
            console.log(res);
            alert("Šablon rezervacije je izbrisan!");
        })
        sendDataToParent(r.id);
    }

    function removeComponent(e){
        console.log("izbacuje");
        console.log(e);
        axios.delete("http://127.0.0.1:8000/api/deleteEquipmentReservation/"+r.id+"/"+e).then((res)=>{
            let newEquipment= equipment.filter((eq)=> eq.id!=e);
            setEquipment(newEquipment);
            setTotalPrice(res.data.newPrice);
        })
    }

    function updateReservation(){
        window.sessionStorage.setItem("reservation_id", r.id);
        navigate("/equipments");

    }
    
    function sendDataToParent(id){
        onReturnValue(id);
    };

    if(flag==1){
        return(
            <div className="reservationCardRequest">
                <div className="reservationCardRequestContainer">
                        <div className="rcrc1">
                            <h3 className="reservationClass1">{today}</h3>
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
                            <h3 className="reservationClass1">{today}</h3>
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
                <p className="reservationClass1">1 x čas, instruktor {r.period.instructor.name} {r.period.instructor.surname}, datum {today}, početak {r.period.time}h</p>
                <p className="price">{r.period.price}€</p>
            </div>
            {equipment.map((e)=>(
                <div className="reservationClass">
                    <p className="reservationClass1">1 x {e.name}, {e.description} {e.pivot.equipmentInformation}</p>
                    <p className="price">{e.price}€</p>
                    <p onClick={() => removeComponent(e.id)} className="x" type="button" value={e.id} name={e.id}>x</p>
                </div>
            ))}
            {totalPriceReservation>0 ? (
                <p>Ukupno: {totalPriceReservation}€</p>
            ):(
                <p>Ukupno: Gratis</p>
            )}
            
            {flag==-1 ? (
                <div className="buttonsForReservation">
                    <button className="reservationButton2" onClick={giveupRequest}>Odustani</button>
                    <button className="reservationButton2" onClick={updateReservation}>Uredi rezervaciju</button>
                    <button className="reservationButton2" onClick={sendRequest}>Potvrdi rezervaciju</button>
                </div>):(<></>)}
        </div>
    );
}

export default SingleReservation;