import { useState } from "react";
import axios from "axios";
import "../css/singleEquipment.css";

function SingleEquipment({e}){

    const [reservation, setReservation]= useState({
        reservation_id:window.sessionStorage.getItem("reservation_id"),
        equipment_id:e.id,
        equipmentInformation:null
    });

    function handleInput(e){
        let newData = reservation;
        newData[e.target.name]= e.target.value;
        setReservation(newData);
    }

    function addEquipment(){
        if(reservation.equipmentInformation==null){
            alert("Morate popuniti odgovarajuće polje kako biste napravili rezervaciju opreme!");
        }else{
            axios.post("http://127.0.0.1:8000/api/makeEquipmentReservation", reservation).then((res)=>{
                if(res.data.success=="true"){
                    alert("Oprema je uspešno dodata u korpu!");
                }else{
                    alert("Greška prilikom rezervacije opreme!");
                }
            }).catch((e)=>{
                console.log(e);
                alert("Greška prilikom rezervacije opreme!");
            })
        }
    }

    return(
        <div>
            {e.id%2===0 ? 
            (<div className="equipmentCard1">
                <div>
                <h5>{e.name}</h5>
                <p>Cena izražena po danu: {e.price}€</p>
                {window.sessionStorage.getItem("auth_token")=="user" ? (
                    <div>
                        <div>
                            <label>{e.description}</label>
                            <input
                            type="text"
                            className="equipmentInput"
                            name="equipmentInformation"
                            onInput={handleInput}
                            ></input>
                        </div>
                        <button className="equipmentButton" onClick={addEquipment}>Dodaj u korpu</button>
                    </div>
                ):(<></>)}
                </div>
                <div>
                <img src={e.photo} alt="equipment photo" className="equipmentPhoto1"></img>
                </div>
            </div>):(<div className="equipmentCard2">
                <div>
                <img src={e.photo} alt="equipment photo" className="equipmentPhoto2"></img>
                </div>
                <div>
                <h5>{e.name}</h5>
                <p>Cena izražena po danu: {e.price}€</p>
                {window.sessionStorage.getItem("auth_token")=="user" ? (
                    <div>
                    <div>
                        <label>{e.description}</label>
                        <input
                        type="text"
                        className="equipmentInput"
                        name="equipmentInformation"
                        onInput={handleInput}
                        ></input>
                    </div>
                    <button className="equipmentButton" onClick={addEquipment}>Dodaj u korpu</button>
                </div>
                ):(<></>)}
                </div>
            </div>)
}
        </div>
    );
}
export default SingleEquipment;