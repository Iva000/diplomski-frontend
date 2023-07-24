import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/NavBar.css";
import logo from '../images/Logo.png';

function NavBar(){

    const[user, setUser]=useState({
        auth_token:null,
        auth_email:null
    });

    useEffect(()=>{
        let newUser = user;
        let auth_token= window.sessionStorage.getItem("auth_token");
        let auth_email = window.sessionStorage.getItem("auth_email");
        setUser(newUser);
    })


return (
    <body>
        {window.sessionStorage.getItem("auth_email")=="admin@gmail.com" ? (
            <div className="container">
            <nav>
                <ul className="nav-bar">
                    <div className="justLinks">
                    <li>
                        <img src={logo} alt="logo" className="photo"></img>
                    </li>
    
                    <li>
                        <Link className="links" to="/instructors">Instruktori</Link>
                    </li>
    
                    <li>
                        <Link className="links" to="/requests">Zahtevi</Link>
                    </li>

                    <li>
                        <Link className="links" to="/">Odjavi se</Link>
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
        ):
        (
            <div className="container">
        <nav>
            <ul className="nav-bar">
                <div className="justLinks">
                <li>
                    <img src={logo} alt="logo" className="photo"></img>
                </li>

                <li>
                    <Link className="links" to="/">Početna</Link>
                </li>

                <li>
                    <Link className="links" to="/mountains">Planine</Link>
                </li>

                <li>
                    <Link className="links" to="/instructors">Instruktori</Link>
                </li>

                <li>
                    <Link className="links" to="/equipments">Ski oprema</Link>
                </li>

                <li>
                    <Link className="otherlinks" to="/instructorRegister">Postani instruktor</Link>
                </li>

                <li>
                    <Link className="links" to="/userLogin">Prijavi se</Link>
                </li>
                </div>
            </ul>
        </nav>
    </div>
        )}
    
    </body>
);
}

export default NavBar;