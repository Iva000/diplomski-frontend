import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/addPeriod.css";

function AddPeriod(){

    const[periodData, setData]=useState({
        dateFrom:"",
        dateTo:"",
        timeStart:"",
        timeFinish:"",
        instructor_id: window.sessionStorage.getItem('auth_instructor')
    });

    console.log("U addPeriod, instruktor:", window.sessionStorage.getItem('auth_instructor'));

    let navigate = useNavigate();

    function handleChange(e){
        let newData = periodData;
        newData[e.target.name]=e.target.value;
        setData(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("periodi: ", periodData);
        axios.post("http://127.0.0.1:8000/api/addNewClass", periodData).then((res)=>{
            console.log(res.data);
            alert("Časovi su uspešno dodati!");
            navigate("/schedule");
        })
        .catch((e) => {
            console.log(e);
            alert("Greška prilikom dodavanja časova!");
        });
    }

    return(
        <div>
            <h1>Dodaj nove termine časova</h1>
            <h3 className="addPeriodExplanation">Za dodavanje više dana sa istim terminima popunite potrebna polja. 
                Podrazumevano trajanje jednog termina je sat vremena. U odnosu na radno vreme termini će biti 
                generisani.
            </h3>

            <form onSubmit={handleSubmit}>
                <div className="addPeriodFirst">
                    <label className="addPeriodLabel1">Datum</label>
                    <br/>
                    <input
                        type="date"
                        id="dateInput"
                        name="dateFrom"
                        //value={selectedDate}
                        onChange={handleChange}
                        placeholder="Od"
                        className="inputFrom"
                    />
                    -
                    <input
                        type="date"
                        id="dateInput"
                        name="dateTo"
                        //value={selectedDate}
                        onChange={handleChange}
                        placeholder="Do"
                        className="inputTo"
                    />

                </div>

                <div>
                    <label className="addPeriodLabel2">Radno vreme</label>
                    <br/>
                    <input
                        type="time"
                        id="timeInput"
                        name="timeStart"
                        //value={selectedTime}
                        onChange={handleChange}
                        placeholder="Početak"
                        className="inputFrom"
                    />
                    -
                    <input
                        type="time"
                        id="timeInput"
                        name="timeFinish"
                        //value={selectedTime}
                        onChange={handleChange}
                        placeholder="Kraj"
                        className="inputTo"
                    />
                </div>

                <button type="submit" className="addPeriodButton">Napravi termine!</button>
            </form>
        </div>
    );
}
export default AddPeriod;