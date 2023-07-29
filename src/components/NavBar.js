import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/NavBar.css";
import logo from '../images/Logo.png';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function NavBar(){

    const [showDropdown, setShowDropdown] = useState(false)

    let navigate=useNavigate();

    const handleProfileIconHover = (e) => {
        setShowDropdown(e.type === 'mouseenter');
    };

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
                     <Link className="profilelinks" to="/cart"><FaShoppingCart size={24} /></Link>
                 </li>

                 {/* <li>
                     <Link className="links" to="/" onClick={handleLogout}><FaUserCircle size={24} /></Link>
                 </li> */}
                 <li
                    className="profile-icon"
                    onMouseEnter={handleProfileIconHover}
                    onMouseLeave={handleProfileIconHover}
                    >
                        <FaUserCircle size={24} color="white"/>
                            {showDropdown && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/myReservations">Moje rezervacije</Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to="/editProfile">Izmeni profil</Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to="/" onClick={handleLogout}>
                                        Odjavi se
                                    </Link>
                                </li>
                                
                            </ul>
                            )}
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
    }else if(window.sessionStorage.getItem('auth_token')=="instructor"){
        return(
            <div className="container">
            <nav>
                <ul className="nav-bar">
                    <div className="justLinks">
                    <li>
                        <img src={logo} alt="logo" className="photo"></img>
                    </li>
    
                    <li>
                        <Link className="links" to="/schedule">Raspored</Link>
                    </li>
    
                    <li>
                        <Link className="links" to="/classReservations">Zahtevi</Link>
                    </li>

                    <li>
                        <Link className="links" to="/addPeriod">Dodaj</Link>
                    </li>

                    {/* <li>
                        <Link className="links" to="/" onClick={handleLogout}><FaUserCircle size={24} /></Link>
                    </li> */}
                    <li
                    className="profile-icon"
                    onMouseEnter={handleProfileIconHover}
                    onMouseLeave={handleProfileIconHover}
                    >
                        <FaUserCircle size={24} color="white"/>
                            {showDropdown && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/editProfile">Izmeni profil</Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to="/" onClick={handleLogout}>
                                        Odjavi se
                                    </Link>
                                </li>
                            </ul>
                            )}
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