import React, { useState } from "react";
import axios from "axios";
import "../css/userRegister.css";
import { useNavigate } from "react-router-dom";

function UserRegister(){

    const[registerData, setData]= useState({
        name:"",
        surname:"",
        gender:"",
        phoneNumber:"",
        email:"",
        password:""
    });

    let navigate= useNavigate();

    function handleInput(e){
        let newData = registerData;
        newData[e.target.name]= e.target.value;
        setData(newData);

    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/registerNewUser", registerData).then((res)=>{
            if(res.data.success=="true"){
                alert("Prijava je uspešna!");
                navigate('/userLogin');
            }
            else{
                alert("Nalog sa datim mejlom već postoji!");
            }
        }).catch((e)=>{
            console.log(e);
            alert("Nalog sa datim mejlom već postoji!");
        })
    }

    return(
        <div>
            <h1 className="registerH1">Napravi nalog i pronađi instruktora baš po svojoj meri!</h1>

            <form onSubmit={handleSubmit}>
                <div className="registerFormContainer">
                    <div>
                        <label>Ime</label>
                        <br/>
                        <input 
                            type="name"
                            className="registerInput"
                            name="name"
                            onInput={handleInput}/>
                        <br/>

                        <label>Prezime</label>
                        <br/>
                        <input 
                            type="surname"
                            className="registerInput"
                            name="surname"
                            onInput={handleInput}/>
                        <br/>
                        
                        <label>Pol</label>
                        <br/>
                        <select
                        name="gender"
                        className="registerInput"
                        placeholder="izaberite pol"
                        onInput={handleInput}>
                            <option value="ženksi">ženski</option>
                            <option value="muški">muški</option>
                        </select>
                        <br/>
                        
                    </div>

                    <div className="rightSideRegister">
                        <label>Broj telefona</label>
                        <br/>
                        <input 
                            type="phoneNumber"
                            className="registerInput"
                            name="phoneNumber"
                            onInput={handleInput}/>
                        <br/>
                        
                        <label>Email</label>
                        <br/>
                        <input 
                            type="email"
                            className="registerInput"
                            name="email"
                            onInput={handleInput}/>
                        <br/>
                        
                        <label>Lozinka</label>
                        <br/>
                        <input 
                            type="password"
                            className="registerInput"
                            name="password"
                            onInput={handleInput}/>
                        <br/>
                        

                    </div>
            </div>

            <button type="submit" className="buttonRegister">Pridruži nam se!</button>
            </form>
        </div>
    );
}

export default UserRegister;