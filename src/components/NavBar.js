import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/NavBar.css";
import logo from '../images/Logo.png';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function NavBar(){

    let navigate=useNavigate();

    function handleLogout(){
        //axios.post("http://127.0.0.1:8000/api/logoutUser").then((res)=>{
            alert('Uspešno ste se odjavili!');
            window.sessionStorage.setItem("auth_token", null);
            window.sessionStorage.setItem("auth_email", null);
            navigate("/");
        //})
    }

    if(window.sessionStorage.getItem("auth_token")=="user" && window.sessionStorage.getItem("auth_email")!=="admin@gmail.com"){
        return(<div className="container">
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
                     <Link className="profilelinks" to="/"><FaShoppingCart size={24} /></Link>
                 </li>
                 <li>
                     <Link className="links" to="/"><FaUserCircle size={24} /></Link>
                 </li>
                 </div>
             </ul>
         </nav>
     </div>);
    }else if(window.sessionStorage.getItem("auth_token")=="user" && window.sessionStorage.getItem("auth_email")=="admin@gmail.com"){
        return(
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
                        <Link className="logoutLink" to="/" onClick={handleLogout}>Odjavi se</Link>
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
        );
    }
    
    return( <div className="container">
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
    </div>)
    
    

}

export default NavBar;