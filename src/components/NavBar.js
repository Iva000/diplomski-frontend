import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from '../images/Logo.png';

function NavBar(){
return (
    <body>
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
                    <Link className="otherlinks" to="/">Postani instruktor</Link>
                </li>

                <li>
                    <Link className="links" to="/userLogin">Prijavi se</Link>
                </li>
                </div>
            </ul>
        </nav>
    </div>
    </body>
);
}

export default NavBar;