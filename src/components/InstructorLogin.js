import React, { useState } from "react";
import axios from "axios";
import "../css/userLogin.css";
import { useNavigate, Link } from "react-router-dom";

function InstructorLogin(){

    const [data, setData]= useState({
        email:"",
        password:""
    });

    let navigate = useNavigate();

    function handleInput(e){
        let newData = data;
        newData[e.target.name] = e.target.value;
        setData(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/loginInstructor", data).then((res)=>{
            if(res.data.success=="true"){
                if(res.data.instructor.status==1){
                    alert("Prijava je uspešna!");
                    window.sessionStorage.setItem("auth_token", res.data.token_type);
                    window.sessionStorage.setItem("auth_instructor", res.data.instructor.id);
                    console.log("res.data", res.data);
                    console.log("res.data.instructor", res.data.instructor);
                    navigate("/schedule");
                }
                if(res.data.instructor.status==0){
                    alert("Prijava na sajt nije obrađena, pokušajte kasnije!");
                }
                if(res.data.instructor.status==2){
                    alert("Vaš zahtev za prijavu na sajt je odbijen!");
                }
            }
            else{
                alert("Email ili lozinka su neispravni!");
            }
        })
        .catch((e) => {
            console.log(e);
            alert("Email i lozinka su obavezni!");
        });
    }

    return(
        <div className="loginContainer">
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="containerEmail">
                    <label className="labelLoginE">Email</label>
                    <br/>
                    <input
                    type="email"
                    className="emailInput"
                    name="email"
                    onInput={handleInput}/>
                </div>

                <div className="containerPassword">
                    <label className="labelLoginP">Lozinka</label>
                    <br/>
                    <input
                    type="password"
                    className="passwordInput"
                    name="password"
                    onInput={handleInput}/>
                </div>

                <div>
                    <button type="submit" className="loginButton">
                    Prijavi se
                    </button>
                </div>
            </form>

            {/* <div className="messageForRegister">
                <p>Nemaš nalog?</p>
                <p>Pridruži se <Link className="fun" to="/userRegister">zabavi!</Link></p>
            </div> */}
        </div>
    );

}

export default InstructorLogin;