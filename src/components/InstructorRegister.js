import React, { useState } from "react";
import axios from "axios";
import "../css/instructorRegister.css";
import { useNavigate } from "react-router-dom";

function InstructorRegister(){

    const[instructorData, setData]=useState({
        name:"",
        surname:"",
        phoneNumber:"",
        experience:"",
        activity:"",
        mountain_id:"",
        skiSchool:"",
        price:"",
        description:"",
        photo:"",
        email:"",
        password:"",
        status:0
    });

    let navigate= useNavigate();

    function handleInput(e){
        console.log(e.target.value);
        let newData = instructorData;
        newData[e.target.name]= e.target.value;
        setData(newData);

    }

    function handleSubmit(e){
        console.log(instructorData);
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/addInstructor", instructorData).then((res)=>{
            if(res.data.success=='true'){
                alert("Registracija je uspešna! Proverite status prilikom prijave!")
                navigate('/instrustorLogin');
            }else{
                alert("Nalog sa datim mejlom već postoji!");
            }
        }).catch((e)=>{
            console.log(e);
            alert("Nalog sa datim mejlom već postoji!");
        })

    }

    return(
        <div>
            <h1 className="instructorRegisterH1">Popuni formu i postani jedan od naših instruktora!</h1>
            <form onSubmit={handleSubmit}>
                <div className="regsterInstructorContainer">
                    <div className="registerInstructorFirst">
                        <label>Ime</label>
                        <br/>
                        <input
                        type="text"
                        name="name"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Prezime</label>
                        <br/>
                        <input
                        type="text"
                        name="surname"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Broj telefona</label>
                        <br/>
                        <input
                        type="text"
                        name="phoneNumber"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Godine rada kao instruktor</label>
                        <br/>
                        <input
                        type="text"
                        name="experience"
                        className="registerInstructor"
                        onInput={handleInput}/>
                    </div>

                    <div className="registerInstructorSecond">
                        <label>Aktivnost</label>
                        <br/>
                        <select
                        name="activity"
                        className="registerInstructorBox"
                        onInput={handleInput}>
                            <option value="skijanje">skijanje</option>
                            <option value="bordanje">bordanje</option>
                        </select>
                        <br/>

                        <label>Planina</label>
                        <br/>
                        <select name="mountain_id"
                        className="registerInstructorBox"
                        onInput={handleInput}>
                            <option value={1}>
                                Tornik
                            </option>

                            <option value="2">
                                Kopaonik
                            </option>

                            <option value="3">
                                Stara planina
                            </option>

                            <option value="4">
                                Brezovica
                            </option>
                        </select>
                        <br/>

                        <label>Ski škola</label>
                        <br/>
                        <input
                        type="text"
                        name="skiSchool"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Cena po času</label>
                        <br/>
                        <input
                        type="text"
                        name="price"
                        className="registerInstructor"
                        onInput={handleInput}/>
                    </div>

                    <div>
                        <label>Poruka za početnike</label>
                        <br/>
                        <textarea
                        type="text area"
                        name="description"
                        className="registerInstructorTextArea"
                        onInput={handleInput}/>
                        <br/>

                        <label>Slika</label>
                        <br/>
                        <input
                        type="text"
                        name="photo"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Email</label>
                        <br/>
                        <input
                        type="email"
                        name="email"
                        className="registerInstructor"
                        onInput={handleInput}/>
                        <br/>

                        <label>Lozinka</label>
                        <br/>
                        <input
                        type="password"
                        name="password"
                        className="registerInstructor"
                        onInput={handleInput}/>
                    </div>
                </div>

                <button type="submit" className="registerInstructorButton">Pridruži nam se!</button>
            </form>
        </div>
    );

}
export default InstructorRegister;